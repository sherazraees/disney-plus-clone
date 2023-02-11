import React from "react";
import style from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = style.div`
margin-top:30px;
display:flex;
`;

const Wrap = style.div`
border-radius:10px;
border:3px solid rgba(249,249,249,0.1);
box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
margin:20px;
cursor:pointer;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    transform:scale(1.05);
    border-color:rgba(249,249,249,.8);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;

}
`;
