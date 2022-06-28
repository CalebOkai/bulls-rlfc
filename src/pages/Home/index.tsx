import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";

import Styles from "./styles";
import { paths } from "../../App";
import { importImages } from "../../utils/images";
import logo from "../../assets/png/bull.png";
import coverImg from "../../assets/png/home.jpg";



interface NvLnk {
  name: string;
  path: string;
}
const Home = () => {
  const [signInModal, setSignInModal] = useState<boolean>(false);
  const [unrelenting, setUnrelenting] = useState<string[]>([]);


  useEffect(() => {
    setUnrelenting(importImages(require.context(
      "../../assets/png/unrelenting",
      false,
      /\.(png|jpe?g|svg)$/
    )));
  }, [])





  return (
    <Styles className="root-page">
      <header className="root-header">
        <NavLink
          to={paths.HOME}
          id="logo"
        >
          <img src={logo} alt="" />
        </NavLink>
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

        {/* Massive Side Steps */}
        <section id="MSS">
          <h2>
            What started as a group of young lads getting to know a new sport, <br />
            was not as exhilarating as it panned out to be...
          </h2>
          <div id="textFlipped">
            <div className="massive">
              <span>MASSIVE</span>
            </div>
            <div className="side-steps">
              SIDE <span>STEPS</span>
            </div>
          </div>
        </section>

        {/* Massive Side */}
        {/* <section id="Unrelenting">
          
          <h2>
            What started as a group of young lads getting to know a new sport, was not as exhilarating as it panned out to be...
            </h2>
          <ul className="list-images">
            {unrelenting.map((image, index) =>
              <li
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  transform: `translate(calc(${index} * 3rem), calc(${index} * 3rem))`,
                }} />
            )}
          </ul>
          <div id="textFlipped">
            <div className="massive">
              MASSIVE
            </div>
            <div className="side-steps">
              SIDE STEPS
            </div>
          </div>


        </section>
 */}

      </div>
    </Styles>
  );
}


export default Home;