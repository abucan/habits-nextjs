import {
  HiOutlineViewGrid,
  HiOutlineChartPie,
  HiOutlineSpeakerphone,
  HiAdjustments,
  HiBookmark,
} from 'react-icons/hi';

export const routes = [
  {
    href: '/',
    label: 'Home',
    icon: HiOutlineViewGrid,
    id: 1,
  },
  {
    href: '/stats',
    label: 'Stats',
    icon: HiOutlineChartPie,
    id: 2,
  },
  {
    href: '/alerts',
    label: 'Alerts',
    icon: HiOutlineSpeakerphone,
    isPro: true,
    isDisabled: true,
    id: 3,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: HiAdjustments,
    id: 4,
  },
  {
    href: '/archived',
    label: 'Archived',
    icon: HiBookmark,
    id: 5,
  },
];
