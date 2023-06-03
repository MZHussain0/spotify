"use client";
import { FC } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

interface LibraryProps {}

const Library: FC<LibraryProps> = ({}) => {
  const handleOnClick = () => {
    // handle uploads later
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 text-base font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={handleOnClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="flex flex-col gap-y-2 px-3 mt-4">List of songs</div>
    </div>
  );
};

export default Library;
