'use client';

import { useChat } from 'ai/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FaGithub, FaInternetExplorer } from 'react-icons/fa';
import { TbBrandTinder } from 'react-icons/tb';
import Header from './components/Header/Header';

type WritingStyleProps = 'Serious' | 'Funny' | 'Clever';

export default function Home() {
  const [tinderBio, setTinderBio] = useState('');
  const [writingStyle, setWritingStyle] = useState<WritingStyleProps>();

  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: {
        writingStyle,
        tinderBio,
      },
    });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };

  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e);
    setTinderBio(e.target.value);
  };

  const aiMessage = messages[messages.length - 1];
  const generatedBios =
    aiMessage?.role === 'assistant' ? aiMessage.content : null;

  return (
    <div className='flex flex-col min-h-screen gap-8'>
      <Header title='tinderBio.io' />
      <main className='prose text-center flex flex-col justify-center items-center container flex-grow gap-8'>
        <h2 className='sm:text-6xl text-4xl'>Transform Your Tinder Game</h2>
        <h3 className='text-2xl'>
          Let AI take the guesswork out of creating the perfect bio.
        </h3>
        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>
                <strong>Step 1.</strong> Copy your current tinder bio
              </span>
            </label>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='e.g. Young professional looking for a partner in crime'
              defaultValue={input}
              onChange={onInputChange}
              required
            ></textarea>
            <label className='label'>
              <span className='label-text-alt'>
                You can just add keywords here
              </span>
            </label>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>
                <strong>Step 2.</strong> Pick your writing style
              </span>
            </label>
            <select
              className='select select-bordered'
              defaultValue={writingStyle || ''}
              onChange={(e) =>
                setWritingStyle(e.target.value as WritingStyleProps)
              }
              required
            >
              <option disabled value=''>
                Pick one
              </option>
              <option value='Serious'>Serious</option>
              <option value='Funny'>Funny</option>
              <option value='Clever'>Clever</option>
            </select>
          </div>

          <button className='btn' type='submit' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Create your bio 👉'}
          </button>
        </form>

        <output>
          {generatedBios && (
            <>
              {generatedBios
                .substring(generatedBios.indexOf('1') + 3)
                .split('2.')
                .map((generatedBio, index) => (
                  <div key={index} className='chat chat-start'>
                    <div className='chat-header'>
                      Cupid{' '}
                      <time className='text-xs opacity-50'>1 second ago</time>
                    </div>
                    <div
                      className='chat-bubble'
                      onClick={() => {
                        navigator.clipboard.writeText(generatedBio);
                      }}
                    >
                      {generatedBio}
                    </div>
                    <div className='chat-footer opacity-50'>Seen</div>
                  </div>
                ))}
            </>
          )}
        </output>
      </main>
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
    </div>
  );
}
