import { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = Array.from({ length: 130 }, (_, index) => ({
      x: Math.sin(index * 127.1) * 0.5 + 0.5,
      y: Math.sin(index * 311.7) * 0.5 + 0.5,
      z: (index % 17) / 17,
      phase: index * 0.37,
      radius: 0.7 + (index % 4) * 0.25
    }));
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time = 0) => {
      frame = 0;
      if (document.hidden || (!reducedMotion && time - lastFrame < 32)) {
        if (!document.hidden && !reducedMotion) frame = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;
      context.clearRect(0, 0, width, height);
      const mobile = width < 700;
      const active = mobile ? particles.slice(0, 70) : particles;
      const orbit = reducedMotion ? 0 : time * 0.00008;
      const projected = active.map((particle) => {
        const depth = 0.58 + particle.z * 0.42;
        const angle = orbit + particle.phase * 0.012;
        const centeredX = particle.x - 0.5;
        const centeredY = particle.y - 0.5;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);
        return {
          x: width * (0.5 + (centeredX * cosine - centeredY * sine) * depth + pointerX * 0.035),
          y: height * (0.5 + (centeredX * sine + centeredY * cosine) * depth + pointerY * 0.035),
          radius: particle.radius * depth,
          alpha: 0.13 + depth * 0.17
        };
      });

      for (let first = 0; first < projected.length; first += 1) {
        const point = projected[first];
        for (let second = first + 1; second < projected.length; second += 1) {
          const next = projected[second];
          const dx = point.x - next.x;
          const dy = point.y - next.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 112) continue;
          context.strokeStyle = `rgba(83, 122, 210, ${(1 - distance / 112) * 0.12})`;
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }
        context.beginPath();
        context.fillStyle = `rgba(74, 126, 220, ${point.alpha})`;
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const handlePointer = (event) => {
      pointerX = (event.clientX / Math.max(width, 1) - 0.5) * 2;
      pointerY = (event.clientY / Math.max(height, 1) - 0.5) * 2;
    };
    const handleOrientation = (event) => {
      tiltX = Math.max(-1, Math.min(1, (event.gamma || 0) / 45));
      tiltY = Math.max(-1, Math.min(1, (event.beta || 0) / 60));
      pointerX = tiltX;
      pointerY = tiltY;
    };
    const handleVisibility = () => {
      if (document.hidden) window.cancelAnimationFrame(frame);
      else if (!reducedMotion) frame = window.requestAnimationFrame(draw);
      else draw();
    };
    const handleResize = () => {
      resize();
      if (reducedMotion) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("deviceorientation", handleOrientation, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("deviceorientation", handleOrientation);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
};