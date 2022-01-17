import styled from "styled-components";
const Card = ({ icon, title, data }) => {
  return (
    <Section>
      <div className="cardIcon">{icon}</div>
      <div className="cardContent">
        <p>{title}</p>
        <h1>{data}</h1>
      </div>
    </Section>
  );
};

export default Card;

const Section = styled.section`
  background-color: #212121 !important;
  border-radius: 0.5rem;
  display: flex;
  .cardIcon {
    max-width: 30%;
    width: 100%;
    display: grid;
    place-items: center;
    svg {
      font-size: 3rem;
      color: #ffa000;
    }
  }
  .cardContent {
    max-width: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      padding: 0;
      margin: 0;
      color: #343a40;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

// const Card = styled.css`
//      background-color: #212121 !important;
// `;
