const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul className="list-type">
        <li><a href="/">{props.first}</a></li>
        <li><a href="/">{props.second}</a></li>
        <li><a href="/">{props.third}</a></li>
        <li><a href="/">{props.fourth}</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
