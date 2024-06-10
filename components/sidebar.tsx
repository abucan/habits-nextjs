'use client';

import Image from 'next/image';
import logo from '../public/logo.svg';
import { Menu } from 'lucide-react';
import { SidebarItem } from './sidebar-item';
import { routes } from '@/lib/routes';
import { SidebarCTA } from './sidebar-cta';

export const SidebarMX = () => {
  return (
    <>
      <button
        data-drawer-target='logo-sidebar'
        data-drawer-toggle='logo-sidebar'
        aria-controls='logo-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <Menu className='w-6 h-6' />
      </button>

      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <a href='#' className='flex items-center ps-2.5 mb-5'>
            <Image
              src={logo}
              className='me-3'
              alt='Daily Logo'
              height={128}
              width={128}
            />
          </a>
          <ul className='space-y-2 font-medium'>
            {routes.map((route) => (
              <SidebarItem key={route.href} {...route} />
            ))}
          </ul>
          <SidebarCTA />
        </div>
      </aside>
    </>
  );
};
