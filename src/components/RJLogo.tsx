import React from 'react';
import { motion } from 'motion/react';
import logoImg from '../assets/Logo.png';

interface RJLogoProps {
  variant?: 'full' | 'icon' | 'white-text';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RJLogo: React.FC<RJLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  const imageSizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 sm:h-11 w-auto',
    lg: 'h-10 sm:h-14 w-auto',
    xl: 'h-14 sm:h-20 w-auto'
  };

  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-10 h-10 sm:w-14 sm:h-14',
    xl: 'w-14 h-14 sm:w-20 sm:h-20'
  };

  const textSizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-xl sm:text-3xl',
    xl: 'text-2xl sm:text-5xl'
  };

  const subTextSizeClasses = {
    sm: 'text-[9px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[9px] sm:text-xs',
    xl: 'text-xs sm:text-sm'
  };

  const badgeSizeClasses = {
    sm: 'text-[9px] px-1 py-0.5',
    md: 'text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5',
    lg: 'text-[9px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1',
    xl: 'text-xs sm:text-sm px-2 sm:px-2.5 py-1'
  };

  if (variant === 'icon') {
    return (
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={`relative flex items-center justify-center ${iconSizeClasses[size]} ${className}`}
      >
        <img
          src={logoImg}
          alt="RJ Enterprises Logo"
          className="w-full h-full object-contain drop-shadow-xs"
        />
      </motion.div>
    );
  }

  // Full Brand display
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}
    >
      {/* Brand Emblem Image */}
      <div className={`shrink-0 flex items-center justify-center ${iconSizeClasses[size]}`}>
        <img
          src={logoImg}
          alt="RJ Enterprises Emblem"
          className="w-full h-full object-contain drop-shadow-xs"
        />
      </div>

      {/* Modern Clean Typography */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
          <span
            className={`font-sans ${textSizeClasses[size]} font-black tracking-tight leading-none truncate ${
              variant === 'white-text' ? 'text-white' : 'text-slate-900'
            }`}
          >
            RJ Enterprises
          </span>
          <span className={`inline-flex items-center rounded font-bold bg-amber-500/15 text-amber-600 border border-amber-500/20 uppercase tracking-wide shrink-0 ${badgeSizeClasses[size]}`}>
            Pune
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
          <span className={`${subTextSizeClasses[size]} uppercase font-semibold text-emerald-600 tracking-wider truncate`}>
            Clean Spaces, Better Places
          </span>
        </div>

        <span
          className={`${subTextSizeClasses[size]} font-medium tracking-tight mt-0.5 leading-tight truncate ${
            variant === 'white-text' ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Facility Management & Housekeeping Services
        </span>
      </div>
    </motion.div>
  );
};
