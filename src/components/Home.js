import React from "react";
import style from "styled-components";
import Imageslider from "./Imageslider";
import Viewers from "./Viewers";
import Movies from "./Movies";

function Home() {
  return (
    <Container>
      <Imageslider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = style.div`
min-height:calc(100vh -70px);
padding: 0 50px;
position:relative;
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
