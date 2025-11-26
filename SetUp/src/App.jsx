import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App







// import { useEffect, useRef, useState } from 'react';

// // Main App component to demonstrate the dynamic text animation
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 font-inter text-white">
//       <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8">
//         <span className="text-gray-300">"Hi, I'm </span>
//         <span className="text-blue-400">Elisc</span>
//       </h1>

//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-blue-300 ">
//         <DynamicHeadline
//           staticText="Creative"
//           animatedWords={["Designer", "Coder", "Player"]}
//           animationType="rotate" // Can be 'rotate', 'fade', 'slide'
//         />
//       </h2>

//       <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-8">
//         Based in Florida
//       </p>
//     </div>

  
//   );
// }

// DynamicHeadline component to handle the animated text
// function DynamicHeadline({ staticText, animatedWords, animationType = 'fade', intervalTime = 1500 }) {
//   // We use a state to track the index of the word array
//   const [index, setIndex] = useState(0);

//   // This state controls the word currently being displayed
//   const [currentAnimatedWord, setCurrentAnimatedWord] = useState(animatedWords[0]);
  
//   // This state controls the CSS classes for the transition (entering vs. exiting)
//   const [isEntering, setIsEntering] = useState(true);

//   // A ref to store the timeout ID so we can clear it if the component unmounts
//   const transitionTimeoutRef = useRef(null);

//   // This effect cycles through the words based on the intervalTime
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // First, trigger the exit animation by setting isEntering to false
//       setIsEntering(false);

//       // We need to wait for the transition to finish before changing the word
//       // The duration of our transitions is 300ms, so we use a timeout slightly longer
//       transitionTimeoutRef.current = setTimeout(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
//       }, 350); // Give a little buffer for the transition to complete

//     }, intervalTime);

//     // Cleanup function to clear both the interval and the timeout
//     return () => {
//       clearInterval(interval);
//       clearTimeout(transitionTimeoutRef.current);
//     };
//   }, [animatedWords, intervalTime]);

//   // This effect updates the word and starts the entering animation when the index changes
//   useEffect(() => {
//     setCurrentAnimatedWord(animatedWords[index]);
//     setIsEntering(true); // Trigger the enter animation
//   }, [index, animatedWords]);

//   // Helper function to get the CSS classes for the animation based on type and state
//   const getAnimationClasses = (type, isEntering) => {
//     // Base classes for all transitions
//     const baseClasses = "transition-all duration-300 ease-in-out";

//     // Define classes for each animation type
//     const animationVariants = {
//       // Fade animation classes
//       fade: {
//         entering: "opacity-100",
//         exiting: "opacity-0",
//         initial: "opacity-0",
//       },
//       // Slide animation classes
//       slide: {
//         entering: "opacity-100 translate-y-0",
//         exiting: "opacity-0 -translate-y-full",
//         initial: "opacity-0 translate-y-full",
//       },
//       // Rotate animation classes (requires a parent with perspective)
//       rotate: {
//         entering: "opacity-100 rotate-x-0",
//         exiting: "opacity-0 rotate-x-90",
//         initial: "opacity-0 -rotate-x-90",
//       }
//     };

//     const variant = animationVariants[type] || animationVariants['fade'];
//     const stateClass = isEntering ? variant.entering : variant.exiting;
    
//     // Combine initial state with the current state for a smooth transition
//     return `${baseClasses} ${stateClass} ${!isEntering && variant.initial}`;
//   };

//   return (
//     <span className="inline-flex items-center" style={{ perspective: '1000px' }}>
//       <span className="mr-2">{staticText}</span> {/* Static part */}
//       <span
//         key={currentAnimatedWord} // Key is used to force a re-render and re-apply transition classes
//         className={`inline-block whitespace-nowrap ${getAnimationClasses(animationType, isEntering)}`}
//       >
//         {currentAnimatedWord}
//       </span>
//     </span>
//   );
// }


