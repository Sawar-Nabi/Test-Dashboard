import React, { Fragment } from "react";
import styled from "styled-components";
import Analyatics from "./Analyatics";
import Faq from "./Faq";
import Sales from "./Sales";
import Transfers from "./Transfers";
import Profile from "./Profile";
const Content = () => {
  return (
    <Section>
      <div className="grid">
        <div className="row__one">
          <Analyatics/>
          <Faq/>
        </div>
        <div className="row__two">
          <Sales/>
          <Transfers/>
          <Profile/>
        </div>
      </div>
    </Section>
  );
};

export default Content;

const Section = styled.section`
  padding: 2rem 5rem 0 18rem;
  .grid{
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    .row__one{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap:0.5rem;
    }
    .row__two{
      // background:green;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap:0.5rem;
    }
  }
`;
