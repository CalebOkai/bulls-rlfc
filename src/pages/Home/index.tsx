import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";

import Styles from "./styles";

import { paths } from "../../App";
import logo from "../../assets/png/bull.png";
import coverImg from "../../assets/png/1.jpg";



interface NvLnk {
  name: string;
  path: string;
}
const Home = () => {
  const [signInModal, setSignInModal] = useState<boolean>(false);

  const navLinks: NvLnk[] = [
    {
      name: "NEWS",
      path: paths.HOME,
    },
    {
      name: "PLAYERS",
      path: paths.HOME,
    },
    {
      name: "CONTACT",
      path: paths.HOME,
    },
    {
      name: "ABOUT",
      path: paths.HOME,
    },
  ]

  return (
    <Styles className="root-page">
      <header className="root-header">
        <NavLink
          to={paths.HOME}
          id="logo"
        >
          <img src={logo} alt="" />
        </NavLink>
        <div className="links">
          {navLinks.map((link) =>
            <NavLink
              to={link.path}
              className="nav-link"
            >
              {link.name}
            </NavLink>
          )}
          <button
            className="button"
          >
            MEMBER SIGN IN
          </button>
        </div>
      </header>

      <div className="root-content">
        {/* Banner */}
        <div id="Banner">
          <div id="bold">
            <h1>
              <div className="x1">
                <div className="primary animate__animated animate__slideInUp">
                  WE.&nbsp;
                </div>
                <div className="secondary animate__animated animate__slideInUp">
                  ARE.
                </div>
              </div>
              <div className="x2">
                <div className="white animate__animated animate__slideInUp">
                  BOLD<p className="x1">.</p>
                </div>
              </div>
            </h1>
            <div className="call-to-action animate__animated animate__fadeIn">
              <p className="bulls-summary">
                Bulls RLFC started out as a group of young lads getting to know a new sport - Rugby.<br />
                What begun as something minuscule is ever growing into an ideal that defines<br />
                the Spirit of the game.<br />
                As a Ghanaian and African Rugby League Team, our main aim is to develop<br />
                Rugby League to its fullest capacity.
              </p>
              <div className="button-row">
                <Link
                  to={paths.HOME}
                  className="button transparent-white"
                >
                  FIXTURES
                </Link>
                <Link
                  to={paths.HOME}
                  className="button transparent-white"
                >
                  MEET THE TEAM
                </Link>
              </div>
            </div>
          </div>
          <div
            id="coverImg"
            style={{ backgroundImage: `url(${coverImg})` }}
          >
            <div className="overlay" />
          </div>
        </div>
      </div>
    </Styles>
  );
}


export default Home;