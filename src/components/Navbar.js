import React from "react";
import styled from "styled-components";
import {AiOutlineSearch}  from "react-icons/ai";


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
          <AiOutlineSearch/> 
          <input type="text" placeholder="Search" />
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Navbar;

const Section = styled.section`
  padding: 5rem 5rem 0 18rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
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
    background: #212121;
    padding: 1rem 2rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.4rem;
    svg {
      color: #ffa000;
      font-size: 1.5rem;
      font-weight:bolder;
      margin-right: 0.5rem;
    }
    input {
      background: transparent;
      border: none;
      color: #ffa000;
      font-family: 'Permanent Marker', cursive;
      font-size: 1.3rem;
      padding: 0 0.7rem;
      letter-spacing:0.3rem;
      :focus{
        outline:none;
      }

      &::placeholder{
        color: #ffa000;
      }
    }
  }
`;
