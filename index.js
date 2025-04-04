// const audioClips = [
//   {
//     keyCode: 81,
//     keyTrigger: "Q",
//     id: "Heater-1",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
//   },
//   {
//     keyCode: 87,
//     keyTrigger: "W",
//     id: "Heater-2",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
//   },
//   {
//     keyCode: 69,
//     keyTrigger: "E",
//     id: "Heater-3",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
//   },
//   {
//     keyCode: 65,
//     keyTrigger: "A",
//     id: "Heater-4",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
//   },
//   {
//     keyCode: 83,
//     keyTrigger: "S",
//     id: "Clap",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
//   },
//   {
//     keyCode: 68,
//     keyTrigger: "D",
//     id: "Open-HH",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
//   },
//   {
//     keyCode: 90,
//     keyTrigger: "Z",
//     id: "Kick-n'-Hat",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
//   },
//   {
//     keyCode: 88,
//     keyTrigger: "X",
//     id: "Kick",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
//   },
//   {
//     keyCode: 67,
//     keyTrigger: "C",
//     id: "Closed-HH",
//     url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
//   },
// ];

// function App() {
//   const [volume, setVolume] = React.useState(1);
//   const [display, setDisplay] = React.useState("") 
//   return (
//     <>
//       <div className="bg-info min-vh-100 text-white">
     
//         <div className="display">
//           <p className="p-4 bg-warning text-black">{display}</p>
//         </div>
//         <br />
//         <h1>Drum Machine</h1>
//         {audioClips.map((clip) => (
//           <Pad className="drum-pad" key={clip.id} clip={clip} volume={volume}  setDisplay={setDisplay} />
//         ))}

//         <br />
//         <h4>Volume</h4>
//         <input
//           type="range"
//           step="0.01"
//           onChange ={(e) => setVolume(e.target.value)}
//           value={volume}
//           max="1"
//           min="0"
//           className="w-50"
//         />

        
//       </div>

      

//     </>
//   );
// }

// function Pad({ clip , volume, setDisplay
// }) {
//   const [active, setActive] = React.useState(false);

//   React.useEffect(() => {
//     document.addEventListener("keydown", handleKeyPress);
//     return () => {
//       document.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   const handleKeyPress = (e) => {
//     if (e.keyCode === clip.keyCode) {
//       playSound();
//     }
//   };

//   const playSound = () => {
//     const audioTag = document.getElementById(clip.keyTrigger);
//     setActive(true);
//     if (audioTag) {
//       audioTag.volume = volume
//       audioTag.currentTime = 0;
//       setDisplay(clip.id); 
//       audioTag.play();
//       setTimeout(() => setActive(false), 200);
//     } else {
//       console.error(`Audio element with ID "${clip.keyTrigger}" not found.`);
//     }
//   };

//   return (
//     <div
//       onClick={playSound}
//       className={`btn btn-secondary p-4 m-3 ${active && "btn-warning"}`}
//     >
//       <audio className="clip" id={clip.keyTrigger} src={clip.url} />
//       {clip.keyTrigger}
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("drum-machine"));
const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [volume, setVolume] = React.useState(1);
  const [display, setDisplay] = React.useState("") 
  return (
    <div id="drum-machine" className="bg-info min-vh-100 text-white d-flex flex-column align-items-center justify-content-center">
      <div id="display" className="bg-warning text-black p-4 mb-3 rounded">
        {display}
      </div>
      <h1>Drum Machine</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {audioClips.map((clip) => (
          <Pad key={clip.id} clip={clip} volume={volume}  setDisplay={setDisplay} className="drum-pad"/>
        ))}
      </div>
      <br />
      <div className="mt-4">
        <h4>Volume</h4>
        <input
          type="range"
          step="0.01"
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
          max="1"
          min="0"
          className="w-50"
        />
      </div>
    </div>
  );
}

function Pad({ clip , volume, setDisplay
}) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    if (audioTag) {
      audioTag.volume = volume
      audioTag.currentTime = 0;
      setDisplay(clip.id); 
      audioTag.play();
      setTimeout(() => setActive(false), 200);
    } else {
      console.error(`Audio element with ID "${clip.keyTrigger}" not found.`);
    }
  };

  return (
    <div
    id={clip.id} // Added the unique id here
      onClick={playSound}
      className={`drum-pad btn btn-secondary p-4 m-3 ${active ? "btn-warning" : ""}`}
    >
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));