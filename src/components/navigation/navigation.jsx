import "./navigation.scss";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/">
          <span>user</span>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
