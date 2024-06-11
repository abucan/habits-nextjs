'use client';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { SidebarItemProps } from '@/types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const MobileSidebarItem = ({
  label,
  href,
  icon,
  isPro,
  isDisabled,
}: SidebarItemProps) => {
  const Icon = icon;
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={cn(
        'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground',
        {
          'bg-muted text-primary': isActive,
          'cursor-not-allowed hover:text-muted-foreground': isDisabled,
        }
      )}
    >
      <Icon className='h-5 w-5' />
      {label}
      {isPro && (
        <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-md px-4 bg-destructive'>
          Pro
        </Badge>
      )}
    </Link>
  );
};
