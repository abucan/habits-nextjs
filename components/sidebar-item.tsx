import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const SidebarItem = ({
  icon,
  label,
  href,
  isPro,
  isDisabled,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const Icon = icon;

  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <li>
      <a
        href={href}
        className={cn(
          'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
          {
            'bg-gray-100': isActive,
            'cursor-not-allowed hover:bg-transparent': isDisabled,
          }
        )}
      >
        <Icon
          className={cn(
            'flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
            {
              'text-gray-900 dark:text-white': isActive,
              'group-hover:text-gray-500': isDisabled,
            }
          )}
        />
        <span className='flex-1 ms-3 whitespace-nowrap'>{label}</span>
        {isPro && (
          <span className='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
            Pro
          </span>
        )}
      </a>
    </li>
  );
};
