'use client';

import Bio from './components/Bio/Bio';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SelectField from './components/Inputs/SelectField/SelectField';
import TextArea from './components/Inputs/TextArea/TextArea';
import { useTinderBio } from './hooks/useTinderBio';

export default function Home() {
  const {
    writingStyle,
    setWritingStyle,
    input,
    onInputChange,
    onSubmit,
    isLoading,
    generatedBios,
  } = useTinderBio();

  return (
    <div className='flex flex-col min-h-screen gap-8'>
      <Header title='tinderBio.io' />
      <main className='prose text-center flex flex-col justify-center items-center container flex-grow gap-8'>
        <h2 className='sm:text-6xl text-4xl'>Transform Your Tinder Game</h2>
        <h3 className='text-2xl'>
          Let AI take the guesswork out of creating the perfect bio.
        </h3>

        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
          <TextArea input={input} onInputChange={onInputChange} />

          <SelectField
            writingStyle={writingStyle}
            setWritingStyle={setWritingStyle}
          />

          <Button isLoading={isLoading} />
        </form>

        <Bio generatedBios={generatedBios} />
      </main>
      <Footer />
    </div>
  );
}
