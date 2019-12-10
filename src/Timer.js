// import React, { useState, useEffect } from 'react';

// const IntervalExample = () => {
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(timer => timer + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {timer}
//         <div>
//             <button className="clock-reset" onClick={() => setTimer(0)}>Reset Clock</button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default IntervalExample;