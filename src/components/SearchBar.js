import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { useDispatch } from "react-redux";
import { searchTag } from "../actions/SearchTag";
import { removeSearchTag } from "../actions/RemoveSearchTag";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const articles = useSelector((state) => state.articles);
  const dispatchTag = useDispatch();
  const dispatchRemoveTag = useDispatch();
  const classes = useStyles();
  const [tag, setTag] = useState("");

  function handleSubmit(e) {
    if (tag !== "") {
      e.preventDefault();
      dispatchTag(searchTag({ articles, tag }));
    } else {
      dispatchRemoveTag(removeSearchTag({ articles }));
    }
  }
  function handleTagChange(event) {
    event.preventDefault();
    setTag(event.target.value);
  }
  return (
    <div>
      <Typography align="center" spacing={1}>
        Search with Tag
      </Typography>
      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <InputBase
          value={tag}
          className={classes.input}
          placeholder={tag}
          onChange={handleTagChange}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
