'use client';

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  const content = items.map((item, i) => (
    <span
      key={i}
      className="mono-tag whitespace-nowrap"
    >
      {item}
    </span>
  ));

  return (
    <div className="overflow-hidden py-8 w-full">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {/* Duplicate for seamless loop */}
        {content}
      </div>
    </div>
  );
}
