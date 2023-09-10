"use client"
import { RefObject } from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

type Props = {
  canvasRef: RefObject<HTMLCanvasElement>;
  onChangeText: (v: string) => void;
};

export const CanvasPresenter = (props: Props) => {
  const { canvasRef, onChangeText } = props;

  return (
    <main>
      <div className={canvasContainer}>
        <canvas
          ref={canvasRef}
          width={400}
          height={280}
          className={canvasStyle}
        />
      </div>
      <form className={formStyle}>
        <input
          placeholder="Type something."
          onChange={(event) => onChangeText(event.currentTarget?.value)}
        />
      </form>
    </main>
  )
}

const canvasContainer = flex({
  display: 'flex',
  justifyContent: 'center',
});
const canvasStyle = css({
  border: '1px solid gray',
});
const formStyle = css({
  mt: 4,
});
