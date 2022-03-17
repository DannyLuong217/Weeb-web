import NavLogo from '../asset/logo.svg';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbardetail">
        <div className="Navbar_Logo">
          <img src={NavLogo} alt="ImageTitle" />
        </div>
        <div className="Navbar_Detail">
          <div className="MarginCenterProp">
            <div className="NavbarMenu">
              <ul className="ListItemMenu">
                <li className="ItemMenu">Về chúng tôi</li>
                <li className="ItemMenu">Dự án</li>
                <li className="ItemMenu">Dịch vụ</li>
              </ul>
              <button className="ButtonContactNavMenu">LIÊN HỆ</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
