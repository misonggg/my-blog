import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}
export default function Categories({categories, selected, onClick}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button
        // className='block md:hidden bg-blue-500 absolute z-10 text-white p-1 w-10 h-10 rounded-full'
        className={ showMenu 
          ? 'block md:hidden bg-blue-500 absolute z-10 text-2xl p-2 text-white w-10 h-10 rounded-full top-8 '
          : 'block md:hidden bg-blue-500 absolute z-10 text-2xl p-2 text-white w-10 h-10 rounded-full ' }
        onClick={handleToggleMenu}
      >
        { showMenu ? <FaAngleLeft /> : <FaAngleRight /> }
      </button>
      <section className={`text-start pr-4 ${showMenu ? 'hidden' : 'block'} md:block`}>
        <h2 className='font-bold text-lg py-1 mb-2 border-b-2 border-blue-500'>Category</h2>
        <ul className='text-md'>
          {categories.map((category) => (
            <li 
              key={category} 
              onClick={()=> onClick(category)}
              className={`cursor-pointer hover:opacity-60 mb-1
                ${category === selected && 'text-blue-500 font-semibold'}
              `}
            >
              {category}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
