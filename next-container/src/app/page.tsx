"use client";
import React, { useState, useEffect, useRef, forwardRef, ForwardedRef } from 'react';
import HighlightBox from '@/components/alphacode/HighlightBox';
import Component from './Component';

interface HighlightBoxProps {
  top: number | null;
  left: number | null;
  width: number | null;
  height: number | null;
}

const App: React.FC = () => {
  const [highlightBox, setHighlightBox] = useState<HighlightBoxProps>({ top: null, left: null, width: null, height: null });
  const alphaCodeComponentRef = useRef<HTMLDivElement>(null);

  const findInnermostElementWithId = (element: Element | null): Element | null => {
    let currentElement = element;
    while (currentElement && !currentElement.getAttribute('data-id')) {
      currentElement = currentElement.parentElement;
    }
    return currentElement;
  };

  const handleMouseOver = (event: MouseEvent) => {
    const targetElement = findInnermostElementWithId(event.target as Element);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      setHighlightBox({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  useEffect(() => {
    const alphaCodeComponent = alphaCodeComponentRef.current;
    if (alphaCodeComponent) {
      alphaCodeComponent.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (alphaCodeComponent) {
        alphaCodeComponent.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);

  return (
    <div>
      <div ref={alphaCodeComponentRef} className='p-4'>
      <Component />
      </div>
      <HighlightBox {...highlightBox} />
    </div>
  );
};

export default App;
