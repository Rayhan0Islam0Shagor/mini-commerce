'use client';
import handleError from '@/utils/handleError';

interface ErrorProps {
  error: unknown;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="px-4 py-2 text-2xl text-center text-red-500 bg-gray-900 rounded">
        {handleError(error)}
      </h1>

      <button
        onClick={reset}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
