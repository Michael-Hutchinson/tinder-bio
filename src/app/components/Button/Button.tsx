'use client';

interface ButtonProps {
  isLoading: boolean;
}

const Button = ({ isLoading }: ButtonProps) => {
  return (
    <button className='btn' type='submit' disabled={isLoading}>
      {isLoading ? (
        <span className='loading loading-infinity loading-lg'></span>
      ) : (
        'Create your bio 👉'
      )}
    </button>
  );
};

export default Button;
