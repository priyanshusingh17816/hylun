"use client";

import { useEffect, useState } from "react";

const messages = [
  "FREE SHIPPING ON ORDERS ABOVE ₹1999",
  "ANTI-TARNISH JEWELLERY",
  "7 DAY EASY RETURNS",
  "CASH ON DELIVERY AVAILABLE",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sage text-white text-center py-3 uppercase tracking-[0.2em] text-sm overflow-hidden">
      <p
        className={`transition-all duration-1000 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
        }`}
      >
        {messages[index]}
      </p>
    </div>
  );
}