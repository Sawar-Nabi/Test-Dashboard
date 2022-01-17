import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <React.Fragment>
      <Section>
        <div className="navTitle">
          <h4>
            Welcome to <span>My Taxi Dashboard</span>
          </h4>
          <h2>All Data and Analytics Of Your Ride</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Navbar;

const Section = styled.section`
  padding: 5rem 8rem 0 18rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid yellow;
  .navTitle {
    letter-spacing: 0.2rem;
    line-height: 2rem;

    h4 {
      span {
        font-family: 'Permanent Marker', cursive;
        color: #ffa000;
      }
    }
    h2 {
      text-transform: lowercase;
      &::first-letter {
        text-transform: uppercase;
        font-size: 2rem;
      }
    }
  }
  /* search div */
  .search {
    input {
      width: 16rem;
      height: 2rem;
      padding: 0.8rem;
      font-size: 1rem;
      outline: 1px solid #ffa000;
      border-radius: 2.5rem;
      border: none;
    }
  }
`;
