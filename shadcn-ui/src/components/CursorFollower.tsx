import { useEffect, useRef, useState } from 'react';

export default function CursorFollower() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const innerPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: 5 }, () => ({ x: -100, y: -100 }))
  );
  const rafId = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.card-hover') ||
        target.closest('.cursor-pointer');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      // Inner dot - fast follow (lerp 0.25)
      innerPos.current.x += (mousePos.current.x - innerPos.current.x) * 0.25;
      innerPos.current.y += (mousePos.current.y - innerPos.current.y) * 0.25;

      // Outer ring - slower follow (lerp 0.12)
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.12;

      // Trail particles - each follows the previous with decreasing speed
      for (let i = 0; i < trailPositions.current.length; i++) {
        const target = i === 0 ? outerPos.current : trailPositions.current[i - 1];
        const speed = 0.08 - i * 0.012;
        trailPositions.current[i].x += (target.x - trailPositions.current[i].x) * speed;
        trailPositions.current[i].y += (target.y - trailPositions.current[i].y) * speed;

        const trailEl = trailRefs.current[i];
        if (trailEl) {
          trailEl.style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px) translate(-50%, -50%)`;
        }
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${innerPos.current.x}px, ${innerPos.current.y}px) translate(-50%, -50%)`;
      }

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x}px, ${outerPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className="cursor-follower-container"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Trail particles */}
      {trailPositions.current.map((_, i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="cursor-trail"
          style={{
            width: `${6 - i}px`,
            height: `${6 - i}px`,
            opacity: 0.3 - i * 0.05,
            background: `radial-gradient(circle, rgba(0, 122, 255, ${0.6 - i * 0.1}) 0%, rgba(88, 86, 214, ${0.4 - i * 0.07}) 100%)`,
          }}
        />
      ))}

      {/* Outer ring - glow effect */}
      <div
        ref={outerRef}
        className={`cursor-outer ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
      />

      {/* Inner dot */}
      <div
        ref={innerRef}
        className={`cursor-inner ${isHovering ? 'cursor-inner-hover' : ''} ${isClicking ? 'cursor-inner-click' : ''}`}
      />
    </div>
  );
}