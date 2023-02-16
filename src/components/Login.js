import React from "react";
import style from "styled-components";

function Login() {
  return (
    <Container>
      <ContentAction>
        <CALogoOne src="/images/cta-logo-one.svg"></CALogoOne>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Hello, I am sheraz raees khan. Software Engineer from Pakistan. I Love
          Coding. My expertise in react-native, react, node, mongodb, and Next.
        </Description>
        <CALogoOne src="/images/cta-logo-two.png"></CALogoOne>
      </ContentAction>
    </Container>
  );
}

export default Login;

const Container = style.div`
min-height:calc(100vh -70px);
positon:relative;
display :flex;
justify-content:center;
align-items:center;
&:before{
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-image: url("/images/login-background.jpg");
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    z-index:-1;
}
`;

const ContentAction = style.div`
max-width:650px;
padding: 80px 40px;
width:70%;
display:flex;
flex-direction:column;
`;
const CALogoOne = style.img``;

const SignUp = style.a`
width:100%;
background-color:#0063e5;
padding:17px 0;
font-size:18px;
border-radius:4px;
text-align:center;
font-weight:bold;
cursor:pointer;
font-family: Arial, Helvetica, sans-serif;
transition: all 250ms;
letter-spacing:1.5px;
&:hover{

    background-color:#0483ee;
}
`;
const Description = style.p`
font-size:13px;
text-align:center;
letting-space:1.5px;
line-height:1.5;
`;
