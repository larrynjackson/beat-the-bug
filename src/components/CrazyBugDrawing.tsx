import { Playback, point } from './Playback';
import {
  bugBody,
  leftEar,
  rightEar,
  leftHand,
  rightHand,
  leftFoot,
  rightFoot,
  leftEyeOne,
  leftEyeTwo,
  leftEyeThree,
  rightEyeOne,
  rightEyeTwo,
  rightEyeThree,
  mouth,
  teeth,
} from '../data/CrazyBugData';

export const CRAZYBUG_PARTS = 15;

type CrazyBugDrawingProps = {
  numberOfGuesses: number;
};

export default function CrazyBugDrawing({
  numberOfGuesses,
}: CrazyBugDrawingProps) {
  let parts = [];
  parts.push([{ x: 0, y: 0 }]); //0
  parts.push(bugBody); //1
  parts.push(leftEar);
  parts.push(rightEar);
  parts.push(leftEyeOne); //4
  parts.push(leftEyeTwo);
  parts.push(leftEyeThree);
  parts.push(rightEyeOne);
  parts.push(rightEyeTwo); //8
  parts.push(rightEyeThree);
  parts.push(leftHand);
  parts.push(rightHand); //11
  parts.push(leftFoot);
  parts.push(rightFoot);
  parts.push(mouth); //14
  parts.push(teeth);

  let color: string = 'white';
  let ocolor: string = 'brown';
  if (numberOfGuesses === 1) color = 'brown';
  if (numberOfGuesses === 2) color = 'blue';
  if (numberOfGuesses === 3) color = 'green'; //#013838
  if (numberOfGuesses > 3) ocolor = 'lightgray';
  if (numberOfGuesses === 4) color = 'lightgray';
  if (numberOfGuesses === 5) color = 'black';
  if (numberOfGuesses === 6) color = 'blue';
  if (numberOfGuesses === 7) color = 'lightgray';
  if (numberOfGuesses === 8) color = 'black';
  if (numberOfGuesses === 9) color = 'green';

  if (numberOfGuesses === 10) color = 'blue';
  if (numberOfGuesses === 11) color = 'green';

  if (numberOfGuesses === 12) color = 'blue';
  if (numberOfGuesses === 13) color = 'green';

  if (numberOfGuesses === 14) ocolor = 'darkgray';
  if (numberOfGuesses === 14) color = 'darkgray';

  if (numberOfGuesses === 15) ocolor = 'lightgray;';
  if (numberOfGuesses === 15) color = '#013838';

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
