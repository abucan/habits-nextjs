'use client';

import { CircleProgressBarProps } from '@/types';
export const CircleProgressBar = ({
  count,
  habitCurrentCount,
}: CircleProgressBarProps) => {
  const strokeWidth = 10;
  const size = 50;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (habitCurrentCount / count) * circumference;

  return (
    <div className='relative flex items-center justify-center cursor-pointer'>
      <svg width={size} height={size} className='transform -rotate-90'>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='gray'
          strokeWidth={strokeWidth}
          fill='none'
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='blue'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className='transition-all duration-300'
        />
      </svg>
      <div className='absolute text-xs font-semibold'>{habitCurrentCount}</div>
    </div>
  );
};
