// import styled from "styled-components";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const CARD = styled.div`
//   border-radius: 20px;
//   position: relative;
//   width:320px;
//   margin-top: calc(8rem + 5vw);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 2px solid #6A6A6A;
//   background : linear-gradient(to bottom, rgba(255,255,255,0.1) ,  transparent);
//   @media(max-width: 850px) {
//     width:200px;
//   }
// `;

// const Image = styled.div`
//   width: 200px;
//   height: 200px;
//   transform: translateY(-50%);
//   border-radius: 50%;
//   background-color: red;
//   background: url(${(props) => props.img});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: top;
//   @media(max-width: 850px) {
//     width: 130px;
//     height: 130px;
//   }
// `;


const Card = ({ props }) => {
  return (
    <div className="mt-28 md:mt-20 relative border-2 bg-gradient-to-b w-[15rem] from-[rgba(255,255,255,0.1)] to-['transparent'] border-[#6A6A6A] flex flex-col items-center rounded-xl">
      <div className="relative -translate-y-2/4 overflow-visible">
       <img src={props.image} alt="speakers" className="w-40 h-40 lg:w-42 h-44 object-cover rounded-full"/>
      </div>
      <div className="px-4 flex justify-center flex-col items-center text-white text-center -mt-20 h-60 m-auto">
        <p className="text-lg lg:text-xl">{props.desc}</p>
        <p className="mb-2 md:mb-0 lg:mb-4 text-2xl md:text-xl lg:text-3xl  mt-2">{props.name}</p>
        <div>
          <div
            className={
              "flex flex-row justify-center h-full align-center"
            }
          >
            {props.linkedin ? (
              <a
                href={props.linkedin}
                rel="noreferrer noopenor"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-2xl md:text-xl lg:text-3xl text-white hover:text-[#0A66C2] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faLinkedinIn}
                />
              </a>
            ) : (
              ""
            )}
            {props.insta ? (
              <a href={props.insta} rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-xl lg:text-3xl text-white hover:text-[#d62976] fill-current mx-1 p-1 ease-in-out duration-200"
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
                  className="text-2xl md:text-xl lg:text-3xl text-white hover:text-[#3b5998] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faFacebook}
                />
              </a>
            ) : (
              ""
            )}
            {props.twitter ? (
              <a href={props.twitter} rel="noreferrer noopenor" target="_blank">
                <FontAwesomeIcon
                  className="text-2xl md:text-xl lg:text-3xl text-white hover:text-[#00acee] fill-current mx-1 p-1 ease-in-out duration-200"
                  icon={faTwitter}
                />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
