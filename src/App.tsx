import { useState } from 'react';
import LessonItems from './LessonItems.tsx';

export default function App() {
  const[isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-7.75">
      <div className="w-256.5 bg-[#1A1D1F] rounded-lg border border-[#1F272A]">
        <div>
          <div className="flex flex-row justify-between items-center h-16 px-5" onClick={() => setIsOpen(!isOpen)}>
            <h1 className="text-[24px] text-[#F7F9FA] font-bold">
              1. Asosiy donalar
            </h1>
            <img
              className={`${isOpen ? '' : 'rotate-z-180'}`}
              src="/arrow-up.svg"
              alt="icon"
            />
          </div>

          {isOpen && (
            <div className="grid grid-cols-3 w-full bg-[F7F9FA]/3 p-5">
              <LessonItems />
              <LessonItems />
              <LessonItems />
              <LessonItems />
              <LessonItems />
              <LessonItems />
              <LessonItems />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
