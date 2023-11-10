'use client';

interface TextAreaProps {
  input: string;
  onInputChange: (e: any) => void;
}

const TextArea = ({ input, onInputChange }: TextAreaProps) => {
  return (
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
        <span className='label-text-alt'>You can just add keywords here</span>
      </label>
    </div>
  );
};

export default TextArea;
