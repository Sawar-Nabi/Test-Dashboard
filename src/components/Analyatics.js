import styled from "styled-components"
import { AiOutlineDollarCircle, AiOutlineSecurityScan } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { AiOutlineCar } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Card_style } from "./ReusableCode";


const Analyatics = () => {
    return (
        <Section>
            <div className="analytic">
                <div className="a_icon">
                    <AiOutlineDollarCircle/>
                </div>
                <div className="a_content">
                    <p>Earnings</p>
                    <h2>$330.50</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="a_icon">
                    <FiTarget/>
                </div>
                <div className="a_content">
                    <p>Total Revenue</p>
                    <h2>$899.90</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="a_icon">
                    <AiOutlineCar/>
                </div>
                <div className="a_content">
                    <p>Total Rides</p>
                    <h2>256</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="a_icon">
                    <BiUserCircle/>
                </div>
                <div className="a_content">
                    <p>Users</p>
                    <h2>146</h2>
                </div>
            </div>
        </Section>
    )
}

export default Analyatics

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:0.5rem;
    .analytic{
       ${Card_style};
       display:grid;
       grid-template-columns: 1fr 2fr;
       align-items: center;
       transition: 0.5s ease-in-out;
       svg{
           font-size:3rem;
       }

       .a_content{
           p{
               font-size:0.8rem;
            //    color: #dedede;
           }
       }

       :hover{
           background: #ffa000;
           color: #212121 !important;
       }
    }
`; 
