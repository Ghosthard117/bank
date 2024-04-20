import { cn } from '@/libs/utils';
import { ReactNode } from 'react';


interface CardUserProps {
  children: ReactNode;
  className?: string;
}

export default function CardUser({ className, children }: CardUserProps) {
  return (
    <div
      className={cn(
        'bg-slate-50 px-3 py-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2',
        className
      )}
    >
      {children}
    </div>
  );
};
