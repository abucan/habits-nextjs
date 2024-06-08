import logo from '@/public/logo.svg';
import dark_logo from '@/public/dark-logo.svg';
import Image from 'next/image';

export const Logo = ({
  width = 128,
  footer = false,
  isDark = false,
}: {
  width?: number;
  footer?: boolean;
  isDark?: boolean;
}) => {
  return (
    <>
      {!isDark ? (
        <Image
          src={logo}
          className={`${footer ? 'mx-auto' : ''}`}
          width={width}
          alt='Daily Logo'
        />
      ) : (
        <Image
          src={dark_logo}
          className={`${footer ? 'mx-auto' : ''}`}
          width={width}
          alt='Daily Dark Logo'
        />
      )}
    </>
  );
};
