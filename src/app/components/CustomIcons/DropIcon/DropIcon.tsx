import React from 'react';

export const DropIcon = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="a" cx=".77734" cy=".61719">
          <stop stopColor="#009ecb" offset="0" />
          <stop stopColor="#005387" offset="1" />
        </radialGradient>
      </defs>
      <path
        d="m316.96 2.3125c-43.436 192.24-149.94 211.47-147.47 333.14 2.0572 101.38 75.676 139 139.81 139.97 70.842 1.0727 137.12-34.422 136.45-140.22-0.61856-97.905-96.708-141.08-128.78-332.89z"
        fill="url(#a)"
        strokeWidth="8.01"
      />
    </svg>
  );
};
