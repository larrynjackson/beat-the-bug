import React, { useEffect, useRef } from 'react';

const canvasStyle = {
  border: '1px solid black',
};

export type point = {
  x: number | undefined;
  y: number | undefined;
};

type PlaybackProps = {
  width: number;
  height: number;
  points: point[];
  fcolor: string;
  ocolor: string;
};

export function Playback({
  width,
  height,
  points,
  fcolor,
  ocolor,
}: PlaybackProps) {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    function onDraw() {
      if (!canvasRef.current) return;
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current;

      if (points[0].x === 0 && points[0].y === 0) {
        ctx!.clearRect(0, 0, width, height);
        return;
      }

      ctx!.beginPath();
      for (let i = 0; i < points.length - 1; i++) {
        let prevPoint = points[i];
        let point = points[i + 1];
        drawPolygonLine(prevPoint, point, ctx!);
      }
      ctx!.closePath();
      ctx!.lineWidth = 5;
      ctx!.strokeStyle = ocolor;
      ctx!.stroke();
    }

    function drawPolygonLine(
      start: point,
      end: point,
      ctx: CanvasRenderingContext2D
    ) {
      start = start ?? end;
      ctx.moveTo(start.x!, start.y!);
      ctx.lineTo(end.x!, end.y!);
    }

    function fillPolygon() {
      if (!canvasRef.current) return;
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current;

      ctx!.fillStyle = fcolor; // all css colors are accepted by this property

      var point = points[0];

      ctx!.beginPath();
      ctx!.moveTo(point.x!, point.y!); // point 1

      for (var i = 1; i < points.length; ++i) {
        point = points[i];
        ctx!.lineTo(point.x!, point.y!);
      }

      ctx!.closePath(); // go back to point 1
      ctx!.fill();
    }

    onDraw();
    fillPolygon();
  });

  return (
    <div>
      <div>
        <canvas
          style={canvasStyle}
          ref={canvasRef}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
