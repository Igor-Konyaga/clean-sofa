import React from 'react';

type Props = {
  className?: string;
};

export const TelegramIcon = ({ className = '' }: Props) => {
  return (
    <svg
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.5 12.5L5 31.25L22.5 33.75M52.5 12.5L46.25 50L22.5 33.75M52.5 12.5L22.5 33.75M22.5 33.75V47.5L30.6225 39.3075"
        stroke="#77DECA"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
