'use client';

import { FaGithub } from 'react-icons/fa';
import { TbBrandTinder } from 'react-icons/tb';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <h1 className='btn btn-ghost normal-case text-xl'>
            <TbBrandTinder size={50} /> {title}
          </h1>
        </div>
        <div className='flex-none hidden sm:flex'>
          <a
            className='btn btn-outline'
            href='https://github.com/Michael-Hutchinson'
            target='_blank'
          >
            <FaGithub size={25} /> Star on GitHub
          </a>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className='divider'></div>
      </div>
    </header>
  );
};

export default Header;
