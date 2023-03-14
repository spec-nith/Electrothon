import styled from "styled-components";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CARD = styled.div`
  border-radius: 20px;
  position: relative;
  width:320px;
  margin-top: calc(8rem + 5vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #6A6A6A;
  background : linear-gradient(to bottom, rgba(255,255,255,0.1) ,  transparent)
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;


const Card = ({ props }) => {
  return (
    <CARD>
      <Image img={props.image} width="200" height="200" />
      <div className="px-4 flex justify-center flex-col items-center text-white text-center -mt-20 h-60 m-auto">
        <p className="text-lg lg:text-xl">{props.desc}</p>
        <p className="mb-4 text-3xl mt-2">{props.name}</p>
        <div>
          <div
            className={
              "flex flex-row justify-center my-2 h-full align-center"
            }
          >
            {props.linkedin ? (
              <a
                href={props.linkedin}
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-3xl text-white hover:text-[#0A66C2] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faLinkedinIn}
                />
              </a>
            ) : (
              ""
            )}
            {props.insta ? (
              <a href={props.insta} rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon
                  className="text-3xl text-white hover:text-[#d62976] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faInstagram}
                />
              </a>
            ) : (
              ""
            )}
            {props.facebook ? (
              <a
                href={props.facebook}
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-3xl text-white hover:text-[#3b5998] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faFacebook}
                />
              </a>
            ) : (
              ""
            )}
            {props.twitter ? (
              <a href={props.twitter} rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon
                  className="text-3xl text-white hover:text-[#00acee] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faTwitter}
                />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </CARD>
  );
};

export default Card;
