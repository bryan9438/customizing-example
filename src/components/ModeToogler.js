const ModeToogleer = () => {
  let darkModeOn = true;

  const darkMode = <div className="dark-mode"></div>

  const lightMode = <div className="light-mode"></div>

  const clickHandler = () => {
    darkModeOn =  !darkModeOn;
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={clickHandler}>
        Click Me!
      </button>
    </div>
  );
};

export default ModeToogleer;
