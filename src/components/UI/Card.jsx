export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`glass-card group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
};
