'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Plane, Globe2, Palmtree, Compass } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dummy Ticket', href: '/dummy-ticket', icon: Plane },
    { name: 'Visas', href: '/visas', icon: Globe2 },
    { name: 'Holidays', href: '/holidays', icon: Palmtree },
    { name: 'More', href: '/documentation', icon: Compass },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0C1B33] border-t border-white/10 py-1.5 px-2 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex items-center justify-around lg:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.35)] print:hidden overflow-x-hidden"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 cursor-pointer min-w-[54px] ${
              isActive
                ? 'text-white font-bold'
                : 'text-slate-400 hover:text-white font-medium'
            }`}
          >
            <div className={`p-1.5 rounded-full transition-all ${
              isActive ? 'bg-white/15 text-brand-yellow shadow-inner ring-1 ring-white/20' : 'text-slate-400'
            }`}>
              <Icon className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'text-white font-bold' : 'text-slate-400'}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
