import React, { useRef, useEffect } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Make canvas fill parent container instead of whole window
    const parent = canvas.parentElement;
    const setCanvasSize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    setCanvasSize();

    // Resize listener
    window.addEventListener("resize", setCanvasSize);

    // Particle variables
    const particles = [];
    const particleCount = 60;
    const maxDistance = 120;
    let mouse = { x: null, y: null };

    // Mouse events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.draw();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }

    function drawLines() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.shadowColor = "#00f0ff";
            ctx.shadowBlur = 8;
            ctx.strokeStyle = "rgba(0,240,255,0.5)";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        // Pointer linking
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = particles[a].x - mouse.x;
          const dyMouse = particles[a].y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,255,255,0.8)";
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,1)"; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update());
      drawLines();
      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.6,
        pointerEvents: "none",
      }}
    />
  );
}
