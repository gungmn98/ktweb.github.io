/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, GitHub, Book } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="intro"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
          <Apps className={classes.icons} /> 소개
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://cpro95.tistory.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Book className={classes.icons} /> 블로그 방문
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/cpro95/kakao-cpro95.git"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <GitHub className={classes.icons} /> Github
        </Button>
      </ListItem>
    </List>
  );
}
