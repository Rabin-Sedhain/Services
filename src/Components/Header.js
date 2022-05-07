import React from "react";
import "./Header.css";

const Header = (props) => {
  //To show the props concept

  const handleScroll = (id) => {
    const docs = document.getElementById(id);
    docs.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header1">
      <header>
        <div className="header-body container mt-5">
          <div className="row">
            <div className="content caption-content caption-dark">
              <h1>SERVICES</h1>
              <p>
                At <span>NAXA,</span> we work on <span>ideas;</span> that can
                provide <span>simple solutions</span> to
                <span> complex problems</span>.
              </p>
              <p>
                We work as a team to generate, explore, build and validate
                ideas. We also contextualize innovations around the world to
                find the best fitting solutions to local problems.
              </p>
            </div>
            <nav className="navbar d-flex justify-content-around shadow p-3 mb-5 bg-body rounded list-wrap is-bg is-shadow is-flex mt-5">
              {props.data.map((val, i) => {
                return (
                  <button onClick={(e) => handleScroll(val.id)} key={i}>
                    {val.title}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
