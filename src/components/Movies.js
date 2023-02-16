import React from "react";
import style from "styled-components";
const img1 = "https://wallpaperaccess.com/full/329583.jpg";

export default function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <img src={img1} alt="Image 1" />
        <img src={img1} alt="Image 1" />
        <img src={img1} alt="Image 1" />
        <img src={img1} alt="Image 1" />
      </Content>

      <Content>
        <img src={img1} alt="Image 1" />
        <img src={img1} alt="Image 1" />
        <img src={img1} alt="Image 1" />
        <img src={img1} alt="Image 1" />
      </Content>
    </Container>
  );
}

const Container = style.div`
margin:20px;
`;

const Content = style.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
margin-bottom:30px;
img{
  object-fit:cover;
  width: 22%;
  height: 150px;
  border-radius:10px;
border:3px solid rgba(249,249,249,0.1);
box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
}

img:hover{
  transform:scale(1.05);
  border-color:rgba(249,249,249,.8);
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;

}
`;
const Wrap = style.div`
margin:10px;
    img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`;
