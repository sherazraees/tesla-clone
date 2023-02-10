import React from "react";
import Fade from "react-reveal/Fade";
import style from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {title != "Accessories" ? leftBtnText : "Shop Now"}
            </LeftButton>
            {title != "Accessories" && (
              <RightButton>{rightBtnText}</RightButton>
            )}
          </ButtonGroup>
          <DrawArrow src="/images/down-arrow.svg"></DrawArrow>
        </Fade>
      </Buttons>
    </Wrap>
  );
}
export default Section;

const Wrap = style.div`
height:100vh;
width:100vw;
background-size:cover;
background-image: ${(props) => `url('images/${props.bg}')`};
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`;

const ItemText = style.div`
padding-top:15vh;
text-align:center;
`;

const ButtonGroup = style.div`
display:flex;
margin-bottom:30px;
@media (max-width: 768px){
  flex-direction:column;
}
`;

const LeftButton = style.div`
background-color:rgba(0,0,0,.8);
width:250px;
height:40px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
margin:5px;
cursor:pointer;
`;

const RightButton = style(LeftButton)`background-color:white;
opacity:0.8;
color:black;
`;

const DrawArrow = style.img`
height:30px;
width:100%;
animation: animatedDown infinite 3s;
`;

const Buttons = style.div``;
