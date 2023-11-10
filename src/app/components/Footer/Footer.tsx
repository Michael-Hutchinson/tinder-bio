'use client';

import { FaGithub, FaInternetExplorer } from 'react-icons/fa';
import { TbBrandTinder } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-primary text-primary-content'>
      <aside>
        <TbBrandTinder size={50} />
        <p>
          Powered by{' '}
          <a
            className='font-bold link'
            href='https://openai.com/blog/chatgpt'
            target='_blank'
          >
            ChatGPT
          </a>
          .
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a href='https://github.com/Michael-Hutchinson' target='_blank'>
            <FaGithub size={25} />
          </a>
          <a href='https://michaelhutchinson.me' target='_blank'>
            <FaInternetExplorer size={25} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
