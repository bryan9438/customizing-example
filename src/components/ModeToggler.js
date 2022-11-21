const ModeToggler = () => {

let darkModeOn = false;
const darkMode = <h1>Dark Mode is on</h1>
const lightMode = <h1>Light Mode is on</h1>

const clickHandler = () => {
  darkModeOn = !darkModeOn;
  if (darkModeOn === true) {
    console.log('Dark Mode is on')
  } else {
    console.log('Light Mode is on')
  };
};

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
        <button onClick={clickHandler}>
          Click Me!
        </button>
    </div>
  );
};

export default ModeToggler;
