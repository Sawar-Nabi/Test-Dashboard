import React, { Fragment } from "react";
import styled from "styled-components";
import { BiTaxi } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <Section color={props.color}>
        <div className="brandingWithNav">
          <div className="branding">
            <BiTaxi />
            <h2 className="brandingTxt">MY RIDE</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="/">Total Rides</a>
              </li>
              <li>
                <a href="/">Drivers</a>
              </li>
              <li>
                <a href="/">Total Passangers</a>
              </li>
              <li>
                <a href="/">Revenue</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logout">
          <a href="/">
            Logout <HiOutlineLogout />
          </a>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Sidebar;

const Section = styled.section`
  background: ${(props) => props.color};
  width: 15rem;
  height: 100vh;
  position: fixed;

  .brandingWithNav {
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .branding {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      padding: 1rem 0;

      svg {
        color: #ffa000;
        font-size: 2rem;
      }

      .brandingTxt {
        font-family: 'Permanent Marker', cursive !important;
        color: #fff;
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
      }
    }
    nav {
      ul {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1.5rem;
        list-style: none;
        padding: 2rem;

        li {
          transition: 0.3s all linear;
          width: 100%;
          height: 2.5rem;

          a {
            width: 100%;
            height: 2.5rem;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0 .5rem;
            border-radius: 4rem;
            letter-spacing: 0.1rem;
            &:hover {
              color: #212121;
              background: #ffa000;
            }
          }
        }
      }
    }
  }

  .logout {
    display: flex;
    justify-content: flex-end;
    padding: 0 1.3rem;

    a {
      color: #fff;
      font-size: 0.9rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.3rem;

      svg {
        color: #ffa000;
        font-size: 1.5rem;
        transition: 0.3s all linear;
      }
      &:hover > svg {
        transform: translate(0.5rem);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
