import React from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import IntroPage from "components/IntroPage/IntroPage.js";
import Footer from "components/Footer/Footer.js";

export default function Index(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="카카오톡 웹"
        rightLinks={<HeaderLinks />}
        fixed
        color="kakaoTalk"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <IntroPage />
      <Footer />
    </div>
  );
}
