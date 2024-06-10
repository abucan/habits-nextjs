import { SidebarItemProps } from '@/types';

export const SidebarItem = ({
  icon,
  label,
  href,
  isPro,
}: SidebarItemProps) => {
  const Icon = icon;
  return (
    <li>
      <a
        href={href}
        className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
      >
        <Icon className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
        <span className='ms-3'>{label}</span>
        {isPro && (
          <span className='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
            Pro
          </span>
        )}
      </a>
    </li>
  );
};
