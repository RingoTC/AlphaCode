import React from 'react';

interface HighlightBoxProps {
  top: number | null;
  left: number | null;
  width: number | null;
  height: number | null;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ top, left, width, height }) => {
  if (top === null || left === null || width === null || height === null) return null;

  // Explicitly type the style object as React.CSSProperties
  const style: React.CSSProperties = {
    position: 'absolute',
    top: top - 2,
    left: left - 2,
    width: width + 4,
    height: height + 4,
    boxShadow: '0 0 0 2px blue',
    background: 'rgba(173, 216, 230, 0.3)',
    zIndex: 1000,
    pointerEvents: 'none',
    boxSizing: 'border-box'
  };

  return <div className="border border-dashed" style={style} />;
};

export default HighlightBox;
