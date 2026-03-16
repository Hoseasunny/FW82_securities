import { useEffect, useState } from "react";

const notifications = [
  "John from Nairobi just requested a quote",
  "Amina from Mombasa booked a security assessment",
  "Kevin from Kisumu subscribed to updates"
];

export const SocialProof = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed left-6 bottom-6 z-30 hidden rounded-xl border border-white/10 bg-white px-4 py-3 text-xs text-ink shadow-soft lg:block">
      {notifications[index]}
    </div>
  );
};
