const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul className="list-type">
        <li>{props.first}</li>
        <li>{props.second}</li>
        <li>{props.third}</li>
        <li>{props.fourth}</li>
      </ul>
    </nav>
  );
};

export default Nav;
