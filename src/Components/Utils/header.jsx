import { useLocation } from "react-router-dom";

function NavLink(props) {
  const location = useLocation();
  let link;
  if (props.url === location.pathname) {
    link = (
      <h4
        className="underline"
        onClick={() => {
          window.location.href = props.url;
        }}
      >
        {props.txt}
      </h4>
    );
  } else {
    link = (
      <h4
        onClick={() => {
          window.location.href = props.url;
        }}
      >
        {props.txt}
      </h4>
    );
  }
  return link;
}

export default function header(props) {
  return (
    <div className="header" id="header">
      <div className="container">
        <div className="nav">
          <NavLink className="navlink" txt="Home" url="/" />
          <NavLink txt="Data" url="/data" />
          <NavLink txt="About" url="/about" />
          <NavLink txt="Admin" url="/admin" />
        </div>
      </div>
    </div>
  );
}
