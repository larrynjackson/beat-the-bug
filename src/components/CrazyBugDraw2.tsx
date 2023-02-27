import { useRef } from 'react';
import { Playback } from './Playback';
import { CrazyBugData } from '../data/CrazyBugData2';

export const CRAZYBUG_PARTS = 15;

type CrazyBugDraw2Props = {
  numberOfGuesses: number;
};

export default function CrazyBugDraw2({ numberOfGuesses }: CrazyBugDraw2Props) {
  let points = CrazyBugData[numberOfGuesses].points;
  let color = CrazyBugData[numberOfGuesses].color;
  let ocolor = CrazyBugData[numberOfGuesses].outColor;
  let drawTool = CrazyBugData[numberOfGuesses].drawTool;

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
