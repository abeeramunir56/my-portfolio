"use client";
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      zIndex: -1,
      background: '#080a12',
      overflow: 'hidden'
    }}>
      {/* Hero & Header Glow (Top Left) */}
      <div style={{
        position: 'absolute',
        top: '-10%', left: '0%',
        width: '800px', height: '800px',
        background: 'radial-gradient(circle, rgba(26, 31, 53, 0.7) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'slowFloat 20s infinite alternate'
      }} />

      {/* About & Portfolio Mid Glow (Center Right) */}
      <div style={{
        position: 'absolute',
        top: '40%', right: '-10%',
        width: '900px', height: '900px',
        background: 'radial-gradient(circle, rgba(30, 38, 74, 0.5) 0%, transparent 70%)',
        filter: 'blur(120px)',
        animation: 'slowFloatReverse 25s infinite alternate'
      }} />

      {/* Footer Glow (Bottom Left) */}
      <div style={{
        position: 'absolute',
        bottom: '-10%', left: '10%',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(15, 17, 26, 0.6) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'slowFloat 30s infinite alternate-reverse'
      }} />

      <style jsx>{`
        @keyframes slowFloat {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, 50px) scale(1.1); }
        }
        @keyframes slowFloatReverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-120px, -80px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;