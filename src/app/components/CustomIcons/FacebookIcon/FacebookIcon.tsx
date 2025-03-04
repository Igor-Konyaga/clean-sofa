import React from 'react';

type Props = {
  className?: string;
};

export const FacebookIcon = ({ className = '' }: Props) => {
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
        d="M17.5 25V35H25V52.5H35V35H42.5L45 25H35V20C35 19.337 35.2634 18.7011 35.7322 18.2322C36.2011 17.7634 36.837 17.5 37.5 17.5H45V7.5H37.5C34.1848 7.5 31.0054 8.81696 28.6612 11.1612C26.317 13.5054 25 16.6848 25 20V25H17.5Z"
        stroke="#77DECA"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
