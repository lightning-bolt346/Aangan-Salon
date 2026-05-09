export function FloralCorner({ position = 'top-left', className = '' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', className?: string }) {
  const getPositionClass = () => {
    switch (position) {
      case 'top-left': return 'top-0 left-0 -translate-x-1/2 -translate-y-1/2';
      case 'top-right': return 'top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-90';
      case 'bottom-right': return 'bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180';
      case 'bottom-left': return 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2 -rotate-90';
    }
  };

  return (
    <div className={`absolute w-32 h-32 opacity-20 pointer-events-none text-muted-maroon z-0 ${getPositionClass()} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C50 27.6142 27.6142 50 0 50" stroke="currentColor" strokeWidth="1" />
        <path d="M50 0C50 27.6142 72.3858 50 100 50" stroke="currentColor" strokeWidth="1" />
        <path d="M50 100C50 72.3858 27.6142 50 0 50" stroke="currentColor" strokeWidth="1" />
        <path d="M50 100C50 72.3858 72.3858 50 100 50" stroke="currentColor" strokeWidth="1" />
        
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50C30 38.9543 38.9543 30 50 30Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        
        <path d="M20 50C20 50 35 45 40 30" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
