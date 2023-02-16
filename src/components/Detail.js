import React from "react";
import style from "styled-components";
const image =
  "https://images.pexels.com/photos/10215306/pexels-photo-10215306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const image1 =
  "https://www.pngall.com/wp-content/uploads/12/Walt-Disney-Logo-PNG-Picture.png";
function Detail() {
  return (
    <Container>
      <Background>
        <img src={image}></img>
      </Background>
      <ImageTitile>
        <img src={image1}></img>
      </ImageTitile>
      <Control>
        <PlayButton>
          <img src="/images/play-icon-black.png"></img>
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png"></img>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png"></img>
        </GroupButton>
      </Control>
      <SubTitile>2018 .7m .Family, Fantasy, Kids, Animation</SubTitile>
      <Description>
        Once there was a Lion in the jungle who used to kill 2-3 animals daily
        for his meal. All animals went to him to tell, that daily one of them
        will come to him for his meal.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = style.div`
min-height:calc(100vh -70px);
padding: 0 calc(3.5vw +5px);
position:relative;
`;

const Background = style.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
z-index:-1;
opacity:0.8;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`;

const ImageTitile = style.div`
height:30vh;
width:30vw;
min-height: 170px;
min-width:200px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`;

const Control = style.div`
display:flex;
align-items:center;
margin:30px;
`;

const PlayButton = style.div`
display:flex;
align-items:center;
background-color:white;
color:black;
padding:20px;
border-radius:5px;
height:56px;
font-size:15px;
margin-right:8px;
letter-space:1.8px;
cursor:pointer;
text-transform:uppercase;
&:hover{
background-color:rgba(198,198,198);

}
`;

const TrailerButton = style(PlayButton)`
background-color:rgba(0,0,0,0.3);
border: 1px solid rgba(249,249,249);
color:rgba(249,249,249);
`;

const AddButton = style(TrailerButton)`
height:45px;
width:45px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(0,0,0,0.3);

span{
    font-size:18px;
}
`;
const GroupButton = style(AddButton)`
background-color:rgba(0,0,0);

`;

const SubTitile = style.div`
margin:30px 30px 0;
font-size:14px;
min-height:20px;
`;
const Description = style.div`
margin:10px 30px;
font-size:18px;
`;
