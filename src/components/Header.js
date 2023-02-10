import transitions from "@material-ui/core/styles/transitions";
import React, { useState } from "react";
import style from "styled-components";
const image = "https://cdn-icons-png.flaticon.com/512/2516/2516745.png";
const crossIcon = "https://cdn-icons-png.flaticon.com/512/2723/2723639.png";

function Header() {
  const [openNav, setNav] = useState(false);

  const isOpenNav = () => {
    setNav(!openNav);
  };
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"></img>
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={isOpenNav} src={image}></CustomMenu>
      </RightMenu>
      <BurgerNav show={openNav}>
        <CloseWrapper>
          <CustomClose onClick={isOpenNav} src={crossIcon}></CustomClose>
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Using Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">CyberTrack</a>
        </li>
        <li>
          <a href="#">Raodaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = style.div`
min-height:60px;
display:flex;
align-items:center;
position:fixed;
padding:0 20px;
left:0;
right:0;
top:0;
justify-content:space-between;
z-index:10;
`;

const Menu = style.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flexwrap:nowrap;
}

@media (max-width:786px){
  display:none;
}
`;

const RightMenu = style.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px
}`;

const CustomMenu = style.img`
cursor:pointer;
height:20px;
width:20px;
`;

const BurgerNav = style.div`
position:fixed;
top:0;
bottom:0;
right:0;
width:300px;
background-color:white;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.2s ease-in;
li{
  padding:10px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}

a{
  font-weight:600
}
`;

const CustomClose = style.img`
height:30px;
width:30px;
cursor:pointer;
`;

const CloseWrapper = style.div`
display:flex;
justify-content:flex-end;
`;
