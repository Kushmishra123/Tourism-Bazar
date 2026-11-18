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
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-2 flex items-center justify-around lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.07)] print:hidden"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 cursor-pointer min-w-[56px] ${
              isActive
                ? 'text-brand-navy font-bold scale-105'
                : 'text-slate-500 hover:text-brand-navy font-medium'
            }`}
          >
            <div className={`p-1 rounded-lg ${isActive ? 'bg-brand-yellow text-brand-dark' : 'text-slate-500'}`}>
              <Icon className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'text-brand-navy font-bold' : 'text-slate-500'}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
