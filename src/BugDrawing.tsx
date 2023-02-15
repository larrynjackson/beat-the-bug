const RIGHT_ANTANI = (
  <div
    style={{
      width: '30px',
      height: '1px',
      background: 'black',
      position: 'absolute',
      top: '65px',
      right: '135px',
      rotate: '-80deg',
      transformOrigin: 'left botton',
    }}
  />
);

const LEFT_ANTANI = (
  <div
    style={{
      width: '30px',
      height: '1px',
      background: 'black',
      position: 'absolute',
      top: '65px',
      right: '155px',
      rotate: '-105deg',
      transformOrigin: 'left botton',
    }}
  />
);

const HEAD = (
  <div
    style={{
      width: '25px',
      height: '35px',
      borderRadius: '100%',
      backgroundColor: 'black',
      border: '10px solid black',
      position: 'absolute',
      top: '70px',
      right: '135px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '100px',
      height: '180px',
      borderRadius: '100%',
      backgroundColor: 'red',
      border: '10px solid black',
      position: 'absolute',
      top: '120px',
      right: '95px',
      zIndex: 100,
    }}
  />
);

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

const RIGHT_MIDDLE_ARM = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '200px',
      right: '50px',
      rotate: '-15deg',
      transformOrigin: 'left botton',
    }}
  />
);

const RIGHT_MIDDLE_HAND = (
  <div
    style={{
      width: '15px',
      height: '30px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '170px',
      right: '30px',
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

const LEFT_MIDDLE_ARM = (
  <div
    style={{
      width: '90px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '200px',
      right: '170px',
      rotate: '15deg',
      transformOrigin: 'right botton',
    }}
  />
);

const LEFT_MIDDLE_HAND = (
  <div
    style={{
      width: '15px',
      height: '30px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '170px',
      right: '255px',
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
      rotate: '20deg',
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
      top: '255px',
      right: '20px',
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
      rotate: '-20deg',
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
      top: '255px',
      right: '245px',
      rotate: '145deg',
    }}
  />
);

export const BODY_PARTS = [
  RIGHT_ANTANI,
  LEFT_ANTANI,
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  LEFT_MIDDLE_ARM,
  RIGHT_MIDDLE_ARM,
  RIGHT_LEG,
  LEFT_LEG,
  LEFT_HAND,
  RIGHT_HAND,
  RIGHT_MIDDLE_HAND,
  LEFT_MIDDLE_HAND,
  LEFT_FOOT,
  RIGHT_FOOT,
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
