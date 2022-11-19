// const Btn = () => {
//   const clickHandler = () => {
//     console.log('clicked');
//   }
//   return (
//     <button onClick={clickHandler}>
//       Click Me
//     </button>
//   );
// };

// export default Btn;

// const Btn = () => {
//   const clickHandler = () => {
//     console.log('mouseOver');
//   }
//   return (
//     <button onMouseOver={clickHandler}>
//       Click Me
//     </button>
//   );
// };

// export default Btn;


const Btn = () => {
  const clickHandler = () => {
    console.log('clicked!');
  }
  return (
    <button classID="js-btn" onClick={clickHandler}>
      Click Me!
    </button>
  );
};

export default Btn;

