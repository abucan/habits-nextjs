'use client';
import { cn } from '@/lib/utils';
import { CircleProgressBarProps } from '@/types';
import { CircleCheckBig, Lock } from 'lucide-react';

export const CircleProgressBar = ({
  count,
  habitCurrentCount,
  onProgressIncrease,
  isButtonDisabled,
}: CircleProgressBarProps) => {
  const strokeWidth = 10;
  const size = 50;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (habitCurrentCount / count) * circumference;

  return (
    <button
      className={cn(
        'relative flex items-center justify-center',
        isButtonDisabled ? 'cursor-default' : 'cursor-pointer',
      )}
      onClick={onProgressIncrease}
      disabled={isButtonDisabled}
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
          stroke='lightgray'
          strokeWidth={strokeWidth}
          fill='none'
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='green'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className='transition-all duration-300'
        />
      </svg>
      <div className='absolute text-xs font-semibold'>
        {habitCurrentCount === count ? (
          <CircleCheckBig className='h-4 w-4 text-emerald-800 font-extrabold' />
        ) : isButtonDisabled ? (
          <span>
            <Lock className='h-4 w-4 text-emerald-800 font-extrabold' />
          </span>
        ) : (
          <span>{habitCurrentCount}</span>
        )}
      </div>
    </button>
  );
};
