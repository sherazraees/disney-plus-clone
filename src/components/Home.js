import React from "react";
import style from "styled-components";
import Imageslider from "./Imageslider";
import Viewers from "./Viewers";
function Home() {
  return (
    <Container>
      <Imageslider />
      <Viewers />
    </Container>
  );
}

export default Home;

const Container = style.div`
min-height:calc(100vh -70px);
padding: 0 calc(3.5vw +5px);
absolute:relative;
overflow:hidden;
&:before{
  background:url("/images/home-background.png") center center / cover 
  no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
`;
