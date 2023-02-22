import { Playback, point } from './Playback';
import {
  leftWing,
  rightWing,
  lowHead,
  topLegGrp,
  leftLegMid,
  rightLegMid,
  leftLegBot,
  rightLegBot,
  spotGrpA,
  spotGrpB,
  spotGrpD,
  spotFour,
  spotFive,
  hiHeadParts,
  hiEyeParts,
  lowEyeParts,
} from '../data/LadyBugData';

export const LADYBUG_PARTS = 16;

type LadyBugDrawingProps = {
  numberOfGuesses: number;
};

export default function LadyBugDrawing({
  numberOfGuesses,
}: LadyBugDrawingProps) {
  let parts = [];
  parts.push([{ x: 0, y: 0 }]); //0
  parts.push(hiHeadParts); //1 black
  parts.push(hiEyeParts); //2 white

  parts.push(lowHead); //3 #013838
  parts.push(lowEyeParts); //4 lightgray

  parts.push(leftWing); //5 red
  parts.push(rightWing); //6 red

  parts.push(spotGrpA); //7
  parts.push(spotFour);
  parts.push(spotFive);

  parts.push(spotGrpB); //10
  parts.push(spotGrpD);

  parts.push(topLegGrp); //12
  parts.push(leftLegMid);
  parts.push(rightLegMid);
  parts.push(leftLegBot);
  parts.push(rightLegBot);

  let color: string = 'white';
  let ocolor: string = 'gray';
  if (numberOfGuesses === 1) color = 'black';
  if (numberOfGuesses === 2) color = 'white';
  if (numberOfGuesses === 3) color = '#013838';
  if (numberOfGuesses === 4) color = 'lightgray';
  if (numberOfGuesses === 5) color = 'red';
  if (numberOfGuesses === 6) color = 'red';
  if (numberOfGuesses >= 7) color = 'black';
  if (numberOfGuesses === 7) ocolor = 'black';
  if (numberOfGuesses >= 8) ocolor = 'red';

  if (numberOfGuesses === 12) ocolor = 'black';
  if (numberOfGuesses > 12) ocolor = 'gray';

  let sendParts: point[] = parts[numberOfGuesses];

  return (
    <div style={{ position: 'relative' }}>
      <Playback
        width={700}
        height={500}
        points={sendParts}
        fcolor={color}
        ocolor={ocolor}
      />

      <div style={{ textAlign: 'center', fontSize: '2rem' }}>Bug Box</div>
    </div>
  );
}
