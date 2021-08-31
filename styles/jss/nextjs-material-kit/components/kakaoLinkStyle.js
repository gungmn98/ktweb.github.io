import { container, title } from "styles/jss/nextjs-material-kit.js";

const kakaoLinkStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  section: {
    padding: "70px 0",
    background: "#FFFFFF",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    // color: "#999",
    textAlign: "center",
    marginTop: "30px",
    color: "black",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "30px",
    marginLeft: "30px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  input: {
    display: "none",
  },
  button: {
    margin : "2px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
};

export default kakaoLinkStyle;
