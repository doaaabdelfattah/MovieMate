import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface Props {
  handleOnClick: () => void;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isScroll: boolean;
}

const SearchBar = ({
  handleOnClick,
  placeHolder,
  onChange,
  value,
  isScroll,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    handleOnClick();
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`flex items-center  bg-transparent border rounded-full px-5 py-2 ${
        isScroll ? " border-mainLight border-[1.5px]" : "border-white"
      } `}
    >
      <input
        ref={inputRef} // 📌 Attach ref to input
        type="text"
        placeholder={placeHolder}
        className="bg-transparent ml-2 placeholder:text-white outline-none"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} // ⌨️ Listen for Enter key
      />
      <button
        onClick={handleSearch}
        aria-label="Search"
        className="cursor-pointer"
      >
        <FaMagnifyingGlass className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
