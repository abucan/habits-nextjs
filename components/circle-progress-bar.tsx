const progress = 60;
const strokeWidth = 10;
const size = 50;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (progress / 100) * circumference;

/*
 * get the habit Goal
 * onClick increment by 1
 * if goal is reached change count to Yes icon
 * when the goal is reached log the record
 *
 *
 */

export const CircleProgressBar = () => {
  return (
    <div className='relative flex items-center justify-center'>
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
      <div className='absolute text-xs font-semibold'>0</div>
    </div>
  );
};
