import { ChangeEvent, FormEvent, useState } from 'react';
import { useChat } from 'ai/react';
import { WritingStyleProps } from '../types';

export function useTinderBio() {
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

  return {
    writingStyle,
    setWritingStyle,
    input,
    onInputChange,
    onSubmit,
    isLoading,
    generatedBios,
  };
}
