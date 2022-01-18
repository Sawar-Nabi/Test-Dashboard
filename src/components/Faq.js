import styled from "styled-components"
import { Card_style } from "./ReusableCode";

const Faq = () => {
    return (
        <Section>
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
      </Section>
    )
}

export default Faq

const Section = styled.section`
    ${Card_style};
    .faqContent{
        border-bottom: 0.1rem solid #495057;
        padding: 0.5rem 0;
        h2{
            font-size:1rem;
            line-height:1rem;
        }
        p{
            font-size:0.8rem;
            color: #dedede;
        }
    }
`;
