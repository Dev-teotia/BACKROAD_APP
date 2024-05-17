
import { MenuItems, socialMediaIcons } from "../data";
const Footer = () => {
  return (
    <li>
      <footer className="section footer">
        <ul className="footer-links">
          {MenuItems.map((menu) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <a href={menu.link} className="footer-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="footer-icons">
          {socialMediaIcons.map((icons) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <a href={icons.link} className="footer-icon">
                <i className={icons.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </li>
  );
};

export default Footer;