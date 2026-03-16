export const Card = ({ className = "", children }) => {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
};
