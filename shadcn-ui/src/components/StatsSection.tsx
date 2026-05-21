import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 30, suffix: '+', label: 'Clienti attivi' },
  { target: 20, suffix: '+', label: 'Anni di esperienza' },
  { target: 2400, suffix: '+', label: 'Ticket risolti' },
  { target: 99, suffix: '%', label: 'Uptime garantito' },
];

function useCounterAnimation(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);

  return value;
}

function StatCard({ target, suffix, label, started, delay }: { target: number; suffix: string; label: string; started: boolean; delay: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const value = useCounterAnimation(target, 2000, active);

  return (
    <div className="text-center p-8 rounded-3xl glass-effect reveal-on-scroll">
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
        {value}{suffix}
      </div>
      <div className="text-gray-400 text-lg font-medium">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
