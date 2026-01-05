export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded font-semibold transition';
  const variantStyles = variant === 'primary'
    ? 'bg-[#913F4A] text-white hover:bg-[#7A2D38]'
    : 'bg-transparent border-2 border-[#913F4A] text-[#913F4A] hover:bg-[#913F4A] hover:text-white';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
