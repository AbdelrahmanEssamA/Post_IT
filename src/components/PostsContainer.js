import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostList from "./PostList";
import Form from "./Form";
//import CategoryFilters from "./CategoryFilters";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    alignItems: "center",
  },
}));

function PostsContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Form />
      </div>

      <Grid container spacing={3}>
        <PostList />
      </Grid>
    </div>
  );
}

export default PostsContainer;
