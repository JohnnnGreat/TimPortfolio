import { navigations } from "../../data";
const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper flex">
        <h1 className="header-logo">Timothy Zinwota</h1>
        <nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="close"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <ul>
            {navigations.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.navTag}</a>
              </li>
            ))}
            <li>
              <a></a>
            </li>
          </ul>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="menu"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
