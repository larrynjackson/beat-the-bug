import { useRef } from 'react';
import { Playback } from './Playback';
import { HoboAntData } from '../data/HoboAntData';

export const HOBOANT_PARTS = 8;

type points = {
  x: number;
  y: number;
};
type scene = {
  key: number;
  color: string;
  outColor: string;
  points: points[];
  drawTool: string;
};

type sceneList = {
  scene: scene[];
};

type HoboAntDraw2Props = {
  numberOfGuesses: number;
};

export default function HoboAntDraw2({ numberOfGuesses }: HoboAntDraw2Props) {
  const appCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasWidth = 700;
  const canvasHeight = 500;

  const canvasStyle = {
    border: '1px solid black',
  };

  const finalList: sceneList = HoboAntData[numberOfGuesses];

  return (
    <div style={{ position: 'relative' }}>
      {finalList.scene.map((scene) => {
        return (
          <Playback
            width={canvasWidth}
            height={canvasHeight}
            points={scene.points}
            fcolor={scene.color}
            ocolor={scene.outColor}
            drawTool={scene.drawTool}
            appCanvasRef={appCanvasRef}
          />
        );
      })}

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
