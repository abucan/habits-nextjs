'use client';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { SidebarItemProps } from '@/types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const SidebarItem = ({
  href,
  label,
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
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        {
          'bg-muted text-primary': isActive,
          'cursor-not-allowed hover:text-muted-foreground': isDisabled,
        }
      )}
    >
      <Icon className='h-4 w-4' />
      {label}
      {isPro && (
        <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-md px-4 bg-destructive'>
          Pro
        </Badge>
      )}
    </Link>
  );
};
