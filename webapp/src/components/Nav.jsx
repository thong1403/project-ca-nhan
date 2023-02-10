import "./css/Nav.css";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-top">
      <div className="container-title">
        <span>
          <b className="title-product">SẢN PHẨM</b>
        </span>
        <span>
          <b className="title-product">BỘ SƯU TẬP</b>
        </span>
        <span>
          <b className="title-product">GIỚI THIỆU</b>
        </span>
        <span>
          <b className="title-product">CỬA HÀNG</b>
        </span>
        <button id="login"><Link to="/login">LOGIN</Link> </button>
        <button id="register"><Link to='/register'>REGISTER</Link> </button>
      </div>
    </div>
  );
}

export default Nav;
