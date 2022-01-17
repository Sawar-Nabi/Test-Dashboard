import React, { Fragment } from "react";
import styled from "styled-components";
import Card from "./Card";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Content = () => {
  return (
    <Section>
      <div className="topSection">
        <div className="analytics">
          <Card
            icon={<AiOutlineDollarCircle />}
            title="Revenue"
            data="$380.00"
          />
          <Card icon={<AiOutlineCar />} title="Rides" data="170" />
          <Card icon={<FiTarget />} title="Aspect Revenue" data="$620.00" />
          <Card icon={<BiUserCircle />} title="Drivers" data="10" />
        </div>
        <div className="faq">
          <div className="faqContent">
            <h2>Q: Lorem, ipsum dolor sit amet?</h2>
            <p>A: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="faqContent">
            <h2>Q: Lorem, ipsum dolor sit amet?</h2>
            <p>A: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="faqContent">
            <h2>Q: Lorem, ipsum dolor sit amet?</h2>
            <p>
              A: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              recusandae tempore sit, nesciunt et numquam.
            </p>
          </div>
        </div>
      </div>
      <div className="bottomSection" style={{ background: "green" }}>
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
};

export default Content;

const Section = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 2rem 8rem 0 18rem;
  gap: 2rem;
  .analytics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
  }

  .topSection {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 0.7rem;

    .faq {
      background-color: #212121;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    h2 {
      font-size: 0.9rem;
      color: #ffa000;
    }
    p {
      font-size: 0.8rem;
      margin: 0.6rem 0;
    }

    .faqContent {
      margin-bottom: 0.6rem;
      border-bottom: 0.1rem solid #343a40;
    }
  }
`;
