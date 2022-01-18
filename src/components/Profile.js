import styled from "styled-components";
import { Card_style } from "./ReusableCode";
import profile from '../media/profile.jpeg';

const Profile = () => {
    return (
        <Section>
           <div className="profile">
                <div className="profile_pic">
                    <img src={profile} alt="" />
                </div>
                <div className="content">
                    <h3>Muneeb Bhat</h3>
                    <p>Admin</p>
                </div>
           </div>
        </Section>
    )
}

export default Profile

const Section = styled.section`
    ${Card_style}
    text-align:center;
    .profile{
        display:grid;
        place-items:center;
        gap:0.4rem;
        .profile_pic{
            height: 8rem;
            width:8rem;
            border-radius:20rem;    
            border: 0.3rem solid #343a40;
            img{
                max-height: inherit;
                max-width:inherit;
                height: 100%;
                width:100%;
                border-radius: inherit;
                object-fit:cover;
            }
        }

        .content{
            p{
                color:  #dedede;
                font-size: 0.8rem;
            }
        }
    }
`;

