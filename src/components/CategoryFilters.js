import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { filterArticles } from "../actions/FilterArticles";
import { removeFilter } from "../actions/RemoveFilter";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(4),
    },
  },
  AppBar: {
    backgroundColor: "white",
    color: "black",
  },
}));

function CategoryFilters() {
  const articles = useSelector((state) => state.articles);
  const classes = useStyles();
  const dispatchCategory = useDispatch();
  const dispatchRemoveCategory = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function changeCategory(value) {
    dispatchCategory(filterArticles({ articles, value }));
  }
  function removeCategory() {
    dispatchRemoveCategory(removeFilter({ articles }));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab onClick={removeCategory} label="All" />
          <Tab onClick={() => changeCategory("Social")} label="Social" />
          <Tab onClick={() => changeCategory("Art")} label="Art" />
          <Tab onClick={() => changeCategory("Political")} label="Political" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default CategoryFilters;
