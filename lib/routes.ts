import {
  ArchiveIcon,
  Clock1Icon,
  LayoutDashboard,
  PieChartIcon,
  Settings2Icon,
} from 'lucide-react';

export const routes = [
  {
    href: '/',
    label: 'Home',
    icon: LayoutDashboard,
  },
  {
    href: '/stats',
    label: 'Stats',
    icon: PieChartIcon,
  },
  {
    href: '/alerts',
    label: 'Alerts',
    icon: Clock1Icon,
    isPro: true,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: Settings2Icon,
  },
  {
    href: '/archived',
    label: 'Archived',
    icon: ArchiveIcon,
  },
];
