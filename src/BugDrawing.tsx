const HEAD = (
  <div
    style={{
      width: '55px',
      height: '55px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '120px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '100px',
      height: '130px',
      borderRadius: '100%',
      backgroundColor: 'black',
      border: '10px solid black',
      position: 'absolute',
      top: '120px',
      right: '95px',
    }}
  />
);

// const BODY = (
//   <div
//     style={{
//       width: '10px',
//       height: '100px',
//       background: 'black',
//       position: 'absolute',
//       top: '120px',
//       right: 0,
//     }}
//   />
// );

const RIGHT_ARM = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '50px',
      rotate: '-30deg',
      transformOrigin: 'left botton',
    }}
  />
);

const RIGHT_HAND = (
  <div
    style={{
      width: '15px',
      height: '30px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '110px',
      right: '35px',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '170px',
      rotate: '30deg',
      transformOrigin: 'right botton',
    }}
  />
);

const LEFT_HAND = (
  <div
    style={{
      width: '15px',
      height: '30px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '110px',
      right: '250px',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '110px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '260px',
      right: '50px',
      rotate: '60deg',
      transformOrigin: 'left botton',
    }}
  />
);

const RIGHT_FOOT = (
  <div
    style={{
      width: '25px',
      height: '50px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '285px',
      right: '45px',
      rotate: '55deg',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '110px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '260px',
      right: '140px',
      rotate: '-60deg',
      transformOrigin: 'right botton',
    }}
  />
);

const LEFT_FOOT = (
  <div
    style={{
      width: '25px',
      height: '50px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '285px',
      right: '220px',
      rotate: '145deg',
    }}
  />
);

export const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
  RIGHT_HAND,
  LEFT_HAND,
  RIGHT_FOOT,
  LEFT_FOOT,
];

type BugDrawingProps = {
  numberOfGuesses: number;
};

export default function BugDrawing({ numberOfGuesses }: BugDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div style={{ textAlign: 'center', fontSize: '2rem' }}>Bug Box</div>
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '0px',
        }}
      />

      <div style={{ height: '10px', width: '350px', background: 'black' }} />
    </div>
  );
}
