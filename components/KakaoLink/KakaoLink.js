import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import styles from "styles/jss/nextjs-material-kit/components/kakaoLinkStyle";

const useStyles = makeStyles(styles);

export default function KakaoLink() {
  const classes = useStyles();

  useEffect(() => {
    if (!window.Kakao.isInitialized())
      // 사용할 앱의 JavaScript 키를 설정해 주세요.
      window.Kakao.init("1598359c558c0e811105006367eb346d");
  }, []);

  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [localUrl, setLocalUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("files length: " + files.length);
    // console.log("localUrl length:" + localUrl.length);
    // console.log(localUrl);
    if (files.length > 0) {
      // console.log("업로드할 이미지가 있는 경우....");
      var localFiles = files;
      window.Kakao.Link.uploadImage({
        file: localFiles,
      }).then((res) => {
        // console.log("image url : " + res.infos.original.url);
        sendLink(res.infos.original.url);
      });
    } else {
      sendLink(""); // url to blank
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // console.log(e.target.files);
    const imagesLocalUrl = URL.createObjectURL(e.target.files[0]);
    // console.log("localUrl : " + imagesLocalUrl);
    setLocalUrl(imagesLocalUrl);
    setFiles(e.target.files);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setText(e.target.value);
  };

  const sendLink = (imageUrl) => {
    var url = "http://kakaoweb.netlify.app";
    if (imageUrl.length > 0) {
      url = imageUrl;
      // 이미지를 보낼때는 objectType 을 feed로 해야 보낼 수 있다.
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "",
          description: text,
          imageUrl: url,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      });
    } else {
      // 이미지가 없을 때
      // Kakao.Link.sendDefault 의 text 보내기가 버그 픽스가 되었다.
      // 아래처럼 objectType 으로 'text'를 넣으면 최대 200자까지 메시지를 전달할 수 있다.
      window.Kakao.Link.sendDefault({
        objectType: "text",
        text: text,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      });
    }

    // state 초기화
    setText("");
    setFiles([]);
    setLocalUrl("");
  };

  const clean = () => {
    console.log("clean function");
    setText("");
    setFiles([]);
    setLocalUrl("");
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>카카오톡 웹</h2> */}
          <p className={classes.description}>
            카카오톡 웹은 Kakao Developer API와 NextJs, Material-UI로
            만들어졌습니다.
            <br />
            카카오톡 PC 버전 설치 없이 간단한 메시지와 이미지를 전송할 수
            있습니다.
          </p>
          <form>
            <GridContainer>
              <TextField
                id="outlined-full-width"
                label="메시지"
                className={classes.textArea}
                placeholder="한번에 200자까지만 전송 가능 (이미지 첨부할 경우 100자만 가능)"
                fullWidth
                autoFocus
                multiline
                rows="5"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                value={text}
                onChange={(e) => handleChange(e)}
              />
              <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                <Button
                  variant="outlined"
                  color="primary"
                  id="clean"
                  className={classes.button}
                  onClick={(e) => clean()}
                >
                  다시 쓰기
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  id="kakao-link-btn"
                  className={classes.button}
                  onClick={(e) => handleSubmit(e)}
                >
                  카톡 전송
                </Button>
                <input
                  className={classes.input}
                  accept="image/*"
                  id="button-file"
                  // KakaoLink not support multiple file sending yet.
                  // multiple
                  type="file"
                  onChange={(e) => handleUpload(e)}
                />
                <label htmlFor="button-file">
                  <Button
                    variant="outlined"
                    color="primary"
                    component="span"
                    className={classes.button}
                  >
                    이미지 올리기
                  </Button>
                </label>

                {localUrl.length > 0 ? (
                  <div>
                    <Card
                      style={{
                        margin: "30px 12px -50px 12px", // top right bottom left
                      }}
                    >
                      <CardMedia
                        className={classes.media}
                        image={localUrl}
                        title="Uploaded Image"
                      />
                    </Card>
                  </div>
                ) : (
                  <span />
                )}
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
