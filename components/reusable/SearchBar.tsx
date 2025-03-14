import React, { useRef } from "react";
import { Search } from "lucide-react";
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
      className={`flex items-center justify-between bg-transparent border flex-1 rounded-full px-5 py-2 ${
        isScroll ? " border-accentColor border-[1.5px]" : "border-accentColor"
      } `}
    >
      <input
        ref={inputRef} // 📌 Attach ref to input
        type="text"
        placeholder={placeHolder}
        className="bg-transparent ml-2 w-full placeholder:text-white outline-none"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} // ⌨️ Listen for Enter key
      />
      <button
        onClick={handleSearch}
        aria-label="Search"
        className="cursor-pointer"
      >
        <Search className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
