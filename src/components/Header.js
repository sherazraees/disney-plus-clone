import React from "react";
import style from "styled-components";
const image = "https://avatars.githubusercontent.com/u/40537284?s=400&v=4";
function Header() {
  return (
    <Navbar>
      <Logo src="images/logo.svg"></Logo>
      <NavMenu>
        <a>
          <img src="images/home-icon.svg"></img>
          <span>Home</span>
        </a>
        <a>
          <img src="images/search-icon.svg"></img>
          <span>Search</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg"></img>
          <span>Watchlist</span>
        </a>
        <a>
          <img src="images/original-icon.svg"></img>
          <span>originals</span>
        </a>
        <a>
          <img src="images/movie-icon.svg"></img>
          <span>movies</span>
        </a>
        <a>
          <img src="images/series-icon.svg"></img>
          <span>series</span>
        </a>
      </NavMenu>
      <UserImage src={image} />
    </Navbar>
  );
}

export default Header;

const Navbar = style.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 35px;
overflow-x:hidden;

`;

const Logo = style.img`
// height:0px;
width:80px;
padding:0 15px;
`;

const NavMenu = style.div`
display:flex;
flex:1;
margin-left:25px;
cursor:pointer;
a{
    display:flex;
    align-items:center;
    padding:0 12px;


    img{
        height:20px;
    }
    
    span{
        font-size:13px;
        letter-spacing:1.49px;
        padding-top:2px;
        padding-left:2px;
        text-transform: uppercase;
        position:relative;
    
        &:after{
            content:"";
            background:white;
            height:2px;
            left:0;
            right:0;
            bottom:-6px;
            position:absolute;
            opacity:0;
            transform:scaleX(0.5)
            transition: all 250ms ease-out;
        }
    
        }
        &:hover{
           span:after{
            opacity:1;
            transform:scaleX(1)
        }
    }
}


`;

const UserImage = style.img`
border-radius:50%;
width:50px;
hieght:50px;
`;
