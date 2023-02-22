import { Playback, point } from './Playback';
import {
  part0,
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  part11,
} from '../data/GoofyBugData';

export const GOOFYBUG_PARTS = 12;

type GoofyBugDrawingProps = {
  numberOfGuesses: number;
};

export default function GoofyBugDrawing({
  numberOfGuesses,
}: GoofyBugDrawingProps) {
  let parts = [];
  parts.push([{ x: 0, y: 0 }]); //0

  parts.push(part8); //inside mouth black   1
  parts.push(part9); //top teeth white      2
  parts.push(part10); //bottom teeth white  3
  parts.push(part6); //left body darkgreen  4
  parts.push(part7); //right body darkgreen 5
  parts.push(part0); //left eye1 lightgray  6
  parts.push(part1); //left eye2 green      7
  parts.push(part2); //left eye3 black      8
  parts.push(part3); //right eye1 lightgray 9
  parts.push(part4); //right eye2 green     10
  parts.push(part5); //right eye3 black     11
  parts.push(part11); //tongue red          12

  let color: string = 'white';

  let ocolor: string = 'gray';
  if (numberOfGuesses === 1) color = 'black';
  if (numberOfGuesses === 2) color = 'white';
  if (numberOfGuesses === 3) color = 'white'; //#013838

  if (numberOfGuesses === 4) ocolor = 'darkgreen';
  if (numberOfGuesses === 4) color = 'darkgreen';

  if (numberOfGuesses === 5) ocolor = 'darkgreen';
  if (numberOfGuesses === 5) color = 'darkgreen';

  if (numberOfGuesses === 6) color = 'lightgray';
  if (numberOfGuesses === 7) color = 'yellow';
  if (numberOfGuesses === 8) color = 'black';
  if (numberOfGuesses === 9) color = 'lightgray';
  if (numberOfGuesses === 10) color = 'yellow';
  if (numberOfGuesses === 11) color = 'black';

  if (numberOfGuesses === 12) ocolor = 'red';
  if (numberOfGuesses === 12) color = 'red';

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
