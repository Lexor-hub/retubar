import React from 'react';

/**
 * A purely decorative component that renders a 3D representation of a heat exchanger tube bundle
 * using CSS 3D transforms and animations. This is not a physically accurate model but aims to
 * create a visually appealing, technical background element.
 */
const HeatExchanger3D: React.FC = () => {
  const tubeCount = 24;
  const bundleRadius = 100; // in pixels
  const bundleLength = 400; // in pixels

  return (
    // The perspective container enables the 3D effect for child elements. Increased opacity for visibility.
    <div className="absolute inset-0 flex items-center justify-center perspective-[1200px] overflow-hidden z-0 opacity-50 md:opacity-60">
      {/* This container will have the animation applied to it, rotating the entire bundle. */}
      <div className="w-full h-full relative animate-rotate-bundle" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* This is a central anchor point for all the 3D elements, placed in the middle of the screen. */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* End Plate 1 (Tube Sheet) - Brighter colors */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-slate-500/80 border-2 border-slate-400"
            // Positioned at the back of the bundle along the Z-axis.
            style={{ transform: `translateZ(-${bundleLength / 2}px)` }}
          ></div>

          {/* Tubes Generation */}
          {Array.from({ length: tubeCount }).map((_, i) => {
            // Distribute tubes in two concentric circles for a more realistic look
            const isInnerCircle = i < 8;
            const radius = isInnerCircle ? bundleRadius * 0.5 : bundleRadius;
            const countInCircle = isInnerCircle ? 8 : 16;
            const indexInCircle = isInnerCircle ? i : i - 8;
            const angle = (indexInCircle / countInCircle) * 360;
            
            return (
              <div
                key={i}
                // Brighter tube color
                className="absolute top-0 left-0 w-1.5 bg-slate-300/70"
                style={{
                  height: `${bundleLength}px`,
                  // This sequence orients the bundle horizontally (along the Z-axis)
                  // 1. Center the tube's width.
                  // 2. Move transform origin to the vertical center of the tube element.
                  // 3. Rotate around Z-axis to position tube on the XY plane circle.
                  // 4. Push tube out from center along the new Y-axis.
                  // 5. Rotate the tube itself 90 degrees to align it with the Z-axis.
                  transform: `translateX(-0.1875rem) translateY(-${bundleLength/2}px) rotateZ(${angle}deg) translateY(${radius}px) rotateX(90deg)`,
                }}
              ></div>
            );
          })}

          {/* End Plate 2 (Tube Sheet) - Brighter colors */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-slate-500/80 border-2 border-slate-400"
            // Positioned at the front of the bundle along the Z-axis.
            style={{ transform: `translateZ(${bundleLength / 2}px)` }}
          ></div>

        </div>
      </div>
    </div>
  );
};

export default HeatExchanger3D;