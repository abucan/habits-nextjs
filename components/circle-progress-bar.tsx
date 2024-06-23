'use client';

import { CircleProgressBarProps } from '@/types';
import { useState } from 'react';

export const CircleProgressBar = ({
  count,
  habitCurrentCount,
}: CircleProgressBarProps) => {
  const [progress, setProgress] = useState(habitCurrentCount);
  const strokeWidth = 10;
  const size = 50;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / count) * circumference;

  const handleProgress = () => {
    if (progress === count) {
      return;
    } else {
      setProgress(progress + 1);
    }
  };
  return (
    <div
      className='relative flex items-center justify-center cursor-pointer'
      onClick={handleProgress}
    >
      <svg
        width={size}
        height={size}
        className='transform -rotate-90'
      >
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
      <div className='absolute text-xs font-semibold'>{progress}</div>
    </div>
  );
};
