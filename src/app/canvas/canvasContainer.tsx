"use client"
import { useCallback, useEffect, useState } from 'react';
import { CanvasPresenter } from './canvasPresenter';

export const CanvasContainer = () => {
  return (
    <div>
      <CanvasPresenter />
    </div>
  )
}
