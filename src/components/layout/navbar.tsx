'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Logo } from '@/components/common/logo';
import { navConfig } from '@/config/nav';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {navConfig.mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gray-900">
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">联系我们</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5" />
          </svg>
        </button>
      </div>

      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <Dialog.Panel className="fixed inset-x-4 top-20 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="mb-6">
                <Logo />
              </div>
              <div className="flex flex-col gap-4 text-base font-medium text-gray-700">
                {navConfig.mainNav.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                ))}
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    联系我们
                  </Link>
                </Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
