'use client';

import { WritingStyleProps } from '@/app/types';

interface SelectFieldProps {
  writingStyle: WritingStyleProps | undefined;
  setWritingStyle: React.Dispatch<
    React.SetStateAction<WritingStyleProps | undefined>
  >;
}

const SelectField = ({ writingStyle, setWritingStyle }: SelectFieldProps) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>
          <strong>Step 2.</strong> Pick your writing style
        </span>
      </label>
      <select
        className='select select-bordered'
        defaultValue={writingStyle || ''}
        onChange={(e) => setWritingStyle(e.target.value as WritingStyleProps)}
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
  );
};

export default SelectField;
