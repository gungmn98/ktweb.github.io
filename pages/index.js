import React from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import KakaoLink from "components/KakaoLink/KakaoLink";
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
      <KakaoLink />

      <Footer />
    </div>
  );
}
