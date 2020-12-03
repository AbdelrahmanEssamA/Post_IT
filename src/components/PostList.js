import React from "react";
import { Paper, Typography, ButtonBase, Chip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import CategoryFilters from "./CategoryFilters";
import SearchBar from "./SearchBar";
import ReactPlayer from "react-player";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      width: "90%",
      margin: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2),
      width: "50%",
      margin: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    marginBottom: theme.spacing(2),
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "5px",
    border: "2px solid blackS",
  },

  Chip: {
    margin: theme.spacing(2),
  },
  Category: {
    backgroundColor: "#3f51b5",
    padding: "10px",
    borderRadius: "4px",
    color: "white",
  },
  ReactPlayer: {
    borderRadius: "5px",
    marginBottom: theme.spacing(2),
  },
}));
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function ConnectedList() {
  const articles = useSelector((state) => state.articles);
  const classes = useStyles();
  const getPostVideo = (el) => {
    return (
      <ReactPlayer
        className={classes.ReactPlayer}
        width="100%"
        url={el.postVideo}
      />
    );
  };
  const getPhoto = (el) => {
    return (
      <Grid item xs={12}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src={el.postImage} />
        </ButtonBase>
      </Grid>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CategoryFilters />
        <SearchBar />
        {articles.map((el) => {
          if (el.postState === true && el.postStateTag === true) {
            return (
              <Paper className={classes.paper} elevation={9}>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.Category}
                >
                  {el.postCategory}
                </Typography>

                {el.postVideo !== " " ? getPostVideo(el) : " "}

                <Grid container xs={12}>
                  {el.postImage !==
                  "https://www.img-upload.com/images/favicon.png"
                    ? getPhoto(el)
                    : ""}
                  <Grid xs={12}>
                    {el.postTag !== " " ? (
                      <Chip
                        color="secondary"
                        className={classes.Chip}
                        label={el.postTag}
                      />
                    ) : (
                      ""
                    )}
                  </Grid>

                  <Grid item xs={11} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography variant="body3" gutterBottom>
                          {el.postText}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            );
          }
        })}
      </div>
    </ThemeProvider>
  );
}

export default ConnectedList;
