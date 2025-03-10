import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface Props {
  handleOnClick: () => void;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar = ({ handleOnClick, placeHolder, onChange, value }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    handleOnClick(); // 🔍 Trigger search
    inputRef.current?.blur(); // 🚫 Remove focus
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-darkColor border-dark-100 border rounded-full px-5 py-2">
      <input
        ref={inputRef} // 📌 Attach ref to input
        type="text"
        placeholder={placeHolder}
        className="bg-transparent text-light-300 ml-2 outline-none"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} // ⌨️ Listen for Enter key
      />
      <button
        onClick={handleSearch}
        aria-label="Search"
        className="cursor-pointer"
      >
        <FaMagnifyingGlass className="text-light-300" />
      </button>
    </div>
  );
};

export default SearchBar;
