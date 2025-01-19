import React from 'react';

type Props = {
  className: string;
  active?: boolean;
};

export const ArrowIcon = ({ className = '', active }: Props) => {
  return (
    <>
      {active ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M36 30L20.9412 14L4 30" stroke="#ED8812" strokeWidth="2" />
        </svg>
      ) : (
        <svg
          className={className}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 14L19.0588 30L36 14" stroke="#ED8812" strokeWidth="2" />
        </svg>
      )}
    </>
  );
};
