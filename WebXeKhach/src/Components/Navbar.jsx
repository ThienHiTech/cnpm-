import React from 'react'
import '../assets/Css/Navbar.css'
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="navbar-left">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/">Lịch trình</a></li>
            <li><a href="/">Tra cứu vé</a></li>
            <li><a href="/">Hóa đơn</a></li>
            <li><a href="/">Về chúng tôi</a></li>
        </ul>
        <div className="logo-container">
            <img src={logo} alt="Xe Dai Nam" className="logo" />
        </div>
        <div className="loginbtn">
            <button>Đăng Nhập</button>
            <button>Đăng ký</button>
        </div>
        </nav>

)
}

export default Navbar