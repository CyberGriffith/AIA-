import React from 'react';

export const WhatsAppFloating: React.FC = () => {
  return (
    <a
      href="https://wa.me/94774807748?text=Hello%20AIA%2C%20I%20would%20like%20to%20speak%20with%20an%20education%20advisor."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_28px_rgba(16,185,129,0.45)] hover:shadow-[0_14px_36px_rgba(16,185,129,0.6)] border border-white/25 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
      aria-label="WhatsApp 07748 07748"
      title="Chat with AIA on WhatsApp (07748 07748)"
    >
      <span className="sr-only">WhatsApp 07748 07748</span>
      <svg
        className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-105"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.27 11.93C20.27 16.47 16.59 20.15 12.05 20.15ZM16.57 14.33C16.32 14.2 15.11 13.61 14.88 13.53C14.66 13.45 14.5 13.41 14.34 13.65C14.18 13.89 13.72 14.43 13.58 14.59C13.44 14.75 13.3 14.77 13.06 14.65C12.81 14.52 12.02 14.26 11.08 13.43C10.35 12.78 9.86 11.98 9.72 11.74C9.58 11.49 9.7 11.36 9.82 11.24C9.93 11.13 10.07 10.95 10.19 10.81C10.31 10.67 10.36 10.57 10.44 10.41C10.52 10.25 10.48 10.11 10.42 9.99C10.36 9.87 9.87 8.66 9.66 8.16C9.46 7.68 9.26 7.74 9.11 7.73L8.64 7.72C8.48 7.72 8.21 7.78 7.99 8.02C7.76 8.26 7.15 8.84 7.15 10C7.15 11.16 8 12.28 8.12 12.44C8.24 12.6 9.79 14.99 12.18 16.02C12.75 16.27 13.19 16.41 13.54 16.52C14.11 16.7 14.63 16.68 15.04 16.61C15.5 16.54 16.46 16.03 16.66 15.46C16.86 14.88 16.86 14.4 16.8 14.3C16.74 14.2 16.82 14.45 16.57 14.33Z" />
      </svg>
    </a>
  );
};
