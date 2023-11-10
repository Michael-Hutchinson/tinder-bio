'use client';

import { useChat } from 'ai/react';
import { ChangeEvent, FormEvent, useState } from 'react';

type WritingStyleProps = 'Serious' | 'Funny' | 'Clever' | 'None';

export default function Home() {
  const [tinderBio, setTinderBio] = useState('');
  const [writingStyle, setWritingStyle] = useState<WritingStyleProps>('Funny');

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
    <main>
      <form className='mx-auto max-w-sm space-y-4' onSubmit={onSubmit}>
        <textarea
          defaultValue={input}
          onChange={onInputChange}
          rows={4}
          required
          placeholder={
            'Enter your exiting tinder bio or enter some keywords about yourself.'
          }
        />

        <label htmlFor='writingStyle'>Choose a writing style:</label>
        <select
          id='writingStyle'
          defaultValue={writingStyle}
          onChange={(e) => setWritingStyle(e.target.value as WritingStyleProps)}
        >
          <option value='Serious'>Serious</option>
          <option value='Funny'>Funny</option>
          <option value='Clever'>Clever</option>
          <option value='None'>None</option>
        </select>

        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      <hr className='h-px bg-gray-700 border-1 dark:bg-gray-700' />
      <output className='space-y-10 my-10'>
        {generatedBios && (
          <>
            <div>
              <h2 className='sm:text-4xl text-3xl font-bold text-slate-900 mx-auto'>
                Your generated bios
              </h2>
            </div>
            <div className='space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto'>
              {generatedBios
                .substring(generatedBios.indexOf('1') + 3)
                .split('2.')
                .map((generatedBio, index) => (
                  <div
                    className='bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border'
                    onClick={() => {
                      navigator.clipboard.writeText(generatedBio);
                    }}
                    key={index}
                  >
                    <p>{generatedBio}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </output>
    </main>
  );
}
