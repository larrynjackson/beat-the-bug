import { useRef } from 'react';
import { Playback } from './Playback';
import { GoofyBugData } from '../data/GoofyBugData2';

export const GOOFYBUG_PARTS = 12;

type GoofyBugDraw2Props = {
  numberOfGuesses: number;
};

export default function GoofyBugDraw2({ numberOfGuesses }: GoofyBugDraw2Props) {
  let points = GoofyBugData[numberOfGuesses].points;
  let color = GoofyBugData[numberOfGuesses].color;
  let ocolor = GoofyBugData[numberOfGuesses].outColor;
  let drawTool = GoofyBugData[numberOfGuesses].drawTool;

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
