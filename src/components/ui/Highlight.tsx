import { ReactNode } from 'react';

interface HighlightProps {
  children: ReactNode;
  color?: 'blue' | 'green' | 'purple' | 'pink' | 'orange' | 'emerald';
}

export const Highlight = ({ children, color = 'blue' }: HighlightProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-900 border-b-2 border-blue-400',
    green: 'bg-green-100 text-green-900 border-b-2 border-green-400',
    purple: 'bg-purple-100 text-purple-900 border-b-2 border-purple-400',
    pink: 'bg-pink-100 text-pink-900 border-b-2 border-pink-400',
    orange: 'bg-orange-100 text-orange-900 border-b-2 border-orange-400',
    emerald: 'bg-emerald-100 text-emerald-900 border-b-2 border-emerald-400',
  };

  return (
    <span className={`px-1.5 py-0.5 rounded font-semibold ${colorClasses[color]} transition-colors`}>
      {children}
    </span>
  );
};
