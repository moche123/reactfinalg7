/* eslint-disable prettier/prettier */
import "./header.css"

const Header = ({ name = "Carlos" }) => {
  return (
    <div className="header">
      <img
        className="imgHeader"
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        alt=""
      />
      <h2>Hi I'm {name}, a web developer</h2>
    </div>
  )
}

export default Header;
