import "./../navbar/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>RAdmin</span>
      </div>
      <div className="icons">
        <div className="user">
          <img src="/about.svg" alt="" />
          <img src="/user-circle.svg" alt="" />
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
