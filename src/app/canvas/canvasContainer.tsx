"use client"
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { CanvasPresenter } from './canvasPresenter';

export const CanvasContainer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState<string>('');

  const getCanvasContext = useCallback(() => {
    if (!canvasRef?.current) return null;

    return canvasRef.current.getContext('2d');
  }, []);

  // Initial
  useEffect(() => {
    // const canvasElem = document.querySelector('canvas');
    // if (!canvasElem) return;
  }, []);

  // Text
  useEffect(() => {
    const ctx = getCanvasContext();
    if (!ctx) return;
    ctx.fillText(text, 8, 8);
    ctx.save();
  }, [getCanvasContext, text]);
  const onChangeText = useCallback((v: string) => {
    setText(v);
  }, []);

  return (
    <div>
      <CanvasPresenter
        canvasRef={canvasRef}
        onChangeText={onChangeText}
      />
    </div>
  )
}
