export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift before:absolute before:inset-x-0 before:top-0 before:h-0 before:bg-gold before:transition-all before:duration-200 hover:before:h-[3px] ${className}`}
    >
      {children}
    </div>
  );
};
