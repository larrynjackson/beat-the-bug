import React, { useEffect } from 'react';

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
  drawTool: string;
  appCanvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
};

export function Playback({
  width,
  height,
  points,
  fcolor,
  ocolor,
  drawTool,
  appCanvasRef,
}: PlaybackProps) {
  useEffect(() => {
    function onDraw() {
      var ctx = appCanvasRef.current!.getContext('2d');

      if (points == null || (points[0].x === 0 && points[0].y === 0)) {
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
      var ctx = appCanvasRef.current!.getContext('2d');

      ctx!.fillStyle = fcolor;

      var point = points[0];

      ctx!.beginPath();
      ctx!.moveTo(point.x!, point.y!);

      for (var i = 1; i < points.length; ++i) {
        point = points[i];
        ctx!.lineTo(point.x!, point.y!);
      }

      ctx!.closePath();
      ctx!.fill();
    }

    onDraw();
    if (drawTool === 'hand' || drawTool === 'poly') {
      fillPolygon();
    }
  });

  return <div></div>;
}
