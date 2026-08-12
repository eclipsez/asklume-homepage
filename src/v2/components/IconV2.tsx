import React from 'react'

export type IconV2Name = 
  | 'target' 
  | 'brain' 
  | 'diamond' 
  | 'search' 
  | 'shield' 
  | 'cube' 
  | 'spark' 
  | 'arrow' 
  | 'menu' 
  | 'close' 
  | 'star'
  | 'user'

interface IconV2Props {
  name: IconV2Name
  size?: number
  className?: string
}

export function IconV2({ name, size = 24, className }: IconV2Props) {
  switch (name) {
    case 'target':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="16" cy="16" r="14" fill="url(#target-grad)" fillOpacity="0.15" stroke="url(#target-grad)" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="8" stroke="#7556f4" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="#df5fd1" />
          <defs>
            <linearGradient id="target-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#4972ff" />
              <stop offset="50%" stopColor="#7556f4" />
              <stop offset="100%" stopColor="#df5fd1" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'brain':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M16 4C9.37 4 4 9.37 4 16C4 20.42 6.39 24.28 9.98 26.35C10.5 26.65 11 26.25 11 25.65V24.5C11 23.67 11.67 23 12.5 23H13.5C14.33 23 15 22.33 15 21.5V20.5C15 19.67 15.67 19 16.5 19H17.5C18.33 19 19 18.33 19 17.5V16.5C19 15.67 19.67 15 20.5 15H21.5C22.33 15 23 14.33 23 13.5V12.5C23 11.67 23.67 11 24.5 11H25.65C26.25 11 26.65 10.5 26.35 9.98C24.28 6.39 20.42 4 16 4Z" fill="url(#brain-grad)" fillOpacity="0.2" stroke="url(#brain-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="14" r="2" fill="#4972ff" />
          <circle cx="21" cy="10" r="1.8" fill="#7556f4" />
          <circle cx="11" cy="18" r="1.8" fill="#df5fd1" />
          <defs>
            <linearGradient id="brain-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#4972ff" />
              <stop offset="100%" stopColor="#7556f4" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'diamond':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M7 11L16 3L25 11L16 29L7 11Z" fill="url(#diamond-grad)" fillOpacity="0.2" stroke="url(#diamond-grad)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M7 11H25M16 3V29M11 11L16 29M21 11L16 29" stroke="#df5fd1" strokeWidth="1.5" strokeOpacity="0.6" />
          <defs>
            <linearGradient id="diamond-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#7556f4" />
              <stop offset="50%" stopColor="#df5fd1" />
              <stop offset="100%" stopColor="#ff7a8a" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'search':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <circle cx="14" cy="14" r="9" fill="url(#search-grad)" fillOpacity="0.18" stroke="url(#search-grad)" strokeWidth="2.5" />
          <path d="M21 21L27 27" stroke="#7556f4" strokeWidth="3" strokeLinecap="round" />
          <defs>
            <linearGradient id="search-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#4972ff" />
              <stop offset="100%" stopColor="#7556f4" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'shield':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M16 4L26 8V16C26 22.5 21.5 28 16 30C10.5 28 6 22.5 6 16V8L16 4Z" fill="url(#shield-grad)" fillOpacity="0.2" stroke="url(#shield-grad)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M12 16L15 19L20 13" stroke="#4972ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="shield-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#4972ff" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'cube':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M16 4L27 10V22L16 28L5 22V10L16 4Z" fill="url(#cube-grad)" fillOpacity="0.2" stroke="url(#cube-grad)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M16 4V28M16 16L27 10M16 16L5 10" stroke="#7556f4" strokeWidth="2" strokeLinejoin="round" />
          <defs>
            <linearGradient id="cube-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#7556f4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'spark':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <path d="M16 3L19.5 12.5L29 16L19.5 19.5L16 29L12.5 19.5L3 16L12.5 12.5L16 3Z" fill="url(#spark-grad)" fillOpacity="0.25" stroke="url(#spark-grad)" strokeWidth="2.5" strokeLinejoin="round" />
          <defs>
            <linearGradient id="spark-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#df5fd1" />
              <stop offset="100%" stopColor="#ff7a8a" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'star':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
          <polygon points="16 3 20 11 29 12 22 19 24 28 16 23 8 28 10 19 3 12 12 11 16 3" fill="url(#star-grad)" fillOpacity="0.2" stroke="url(#star-grad)" strokeWidth="2.5" strokeLinejoin="round" />
          <defs>
            <linearGradient id="star-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#ff7a8a" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'arrow':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )
    case 'menu':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={className} aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      )
    case 'close':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={className} aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )
    default:
      return null
  }
}
