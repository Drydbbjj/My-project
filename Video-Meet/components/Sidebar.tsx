'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-8 text-white max-sm:hidden lg:w-[264px]">
      
      {/* 🔹 App title or logo section */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <Image
          src="/icons/logo.svg"
          alt="VIRUTAL COLLABORATION PLATFORM Logo"
          width={36}
          height={36}
          className="rounded-md"
        />
        <h1 className="text-xl font-bold text-white max-lg:hidden">
          VIRUTAL COLLABORATION PLATFORM
        </h1>
      </div>

      {/* 🔹 Sidebar links */}
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start transition-all hover:bg-blue-2/50',
                { 'bg-blue-1': isActive }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
