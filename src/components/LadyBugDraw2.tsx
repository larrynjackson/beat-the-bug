import { useRef } from 'react';
import { Playback } from './Playback';
import { LadyBugData } from '../data/LadyBugData2';

export const LADYBUG_PARTS = 16;

type LadyBugDraw2Props = {
  numberOfGuesses: number;
};

export default function LadyBugDraw2({ numberOfGuesses }: LadyBugDraw2Props) {
  let points = LadyBugData[numberOfGuesses].points;
  let color = LadyBugData[numberOfGuesses].color;
  let ocolor = LadyBugData[numberOfGuesses].outColor;
  let drawTool = LadyBugData[numberOfGuesses].drawTool;

  const appCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasWidth = 700;
  const canvasHeight = 500;

  const canvasStyle = {
    border: '1px solid black',
  };

  return (
    <div style={{ position: 'relative' }}>
      <Playback
        width={canvasWidth}
        height={canvasHeight}
        points={points}
        fcolor={color}
        ocolor={ocolor}
        drawTool={drawTool}
        appCanvasRef={appCanvasRef}
      />

      <div>
        <canvas
          style={canvasStyle}
          ref={appCanvasRef}
          width={canvasWidth}
          height={canvasHeight}
        />
      </div>

      <div style={{ textAlign: 'center', fontSize: '2rem' }}>Bug Box</div>
    </div>
  );
}
