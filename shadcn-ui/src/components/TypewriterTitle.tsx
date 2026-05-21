import { useState, useEffect } from "react";

interface TypewriterTitleProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterTitle({ text, className, speed = 40, delay = 400 }: TypewriterTitleProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse text-blue-400">|</span>
      )}
    </span>
  );
}
