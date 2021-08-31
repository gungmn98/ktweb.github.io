import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import WebIcon from "@material-ui/icons/Web";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/introPageStyle.js";

const useStyles = makeStyles(styles);

export default function Intro(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter responsive>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>카카오톡 웹 버전은?</h1>
              <h4>
                카카오톡 PC 버전이 무거운 분들과 또는 회사에서 카카오톡 PC
                버전이 설치가 안되는 분들을 위해
                <br />
                간단히 웹상에서 카카오톡과 소통할 수 있는 웹앱입니다.
                <br />
                한번에 200자까지만 전송되며, 이미지와 함께 송부할 때는 100자까지
                가능합니다.
              </h4>
              <br />
              <Button
                color="success"
                size="lg"
                href="https://cpro95.tistory.com/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                튜토리얼 보기
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer align="center" justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title2}>사용 된 기술</h2>
                <h5 className={classes.description2}>
                  카카오톡 웹 버전은
                  <br />
                  카카오 디벨로퍼 API에서 제공하는 KakaoLink SDK,
                  <br />
                  NextJS와 Material-UI를 이용한 프로트엔드,
                  <br />
                  Netlify.com의 웹 호스팅을 이용해서 만들었습니다.
                </h5>
              </GridItem>
            </GridContainer>
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="카카오 디벨로퍼 API"
                    description=""
                    icon={Chat}
                    iconColor="info"
                    vertical
                  >
                    Kakao.Link.sendDefault(params) 함수를 사용하여 카카오톡에
                    메시지를 전달합니다.
                    <br />
                    이미지가 있으면 'feed' objectType을 이용하고 이미지가 없으면
                    단순히 'text' objectType을 이용합니다.
                    <br />
                    이미지는 imageUrl에 전달하면 됩니다.
                  </InfoArea>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="NextJS + Material-UI"
                    description=""
                    icon={VerifiedUser}
                    iconColor="success"
                    vertical
                  >
                    NextJS는 React를 이용한 정적 사이트를 만들 수 있으며, 이로
                    인해 보다 빠른 React 페이지를 구현할 수 있습니다.
                    <br />
                    UI쪽은 Material-UI를 사용했습니다. 가장 깔끔하고 기존
                    프로젝트에서도 사용해서 익숙하기 때문입니다.
                  </InfoArea>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Netlify.com"
                    description=""
                    icon={WebIcon}
                    iconColor="danger"
                    vertical
                  >
                    정적 사이트 무료 웹호스팅 서비스 중에 가장 좋다고 생각하는
                    Netlify에 호스팅 했습니다.
                    <br />
                    Github.io 또는 Vercel.com 또한 이용할 수 있습니다.
                  </InfoArea>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
