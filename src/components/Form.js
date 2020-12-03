import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { addArticle } from "../actions/AddArticle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function FormDialog() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
    PhotoCamera: {
      margin: "auto",
    },
    Grid: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
    TextField: {
      width: "30ch",
    },
    fab: {
      margin: theme.spacing.unit, // You might not need this now
      position: "fixed",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
    },
    formControl: {
      width: "15ch",
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState(" ");
  const [category, setCategory] = React.useState(" ");
  const [image, setImage] = React.useState(
    "https://www.img-upload.com/images/favicon.png"
  );
  const [tag, setTag] = React.useState(" ");
  const [video, setVideo] = React.useState(" ");
  const dispatchArticle = useDispatch();

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setPost({ [event.target.id]: event.target.value });
  };
  const handleChangeTag = (event) => {
    setTag(event.target.value);
  };
  const handleChangeVideo = (event) => {
    setVideo(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setOpen(false);
    event.preventDefault();
    const { postText } = post;
    const postImage = image;
    const postCategory = category;
    const postState = true;
    const postStateTag = true;
    const postTag = tag;
    const postVideo = video;
    dispatchArticle(
      addArticle({
        postText,
        postImage,
        postCategory,
        postState,
        postTag,
        postStateTag,
        postVideo,
      })
    );
    setTag(" ");
    setCategory(" ");
    setPost(" ");
    setVideo(" ");
    setImage("https://www.img-upload.com/images/favicon.png");
  }
  const picHandler = (url) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        let pic = reader.result;
        setImage(pic);
      }
    };
    reader.readAsDataURL(url.target.files[0]);
  };

  const { postText } = { post };
  const { postImage } = { image };
  const { postCategory } = { category };
  const { postTag } = { tag };
  const { postVideo } = { video };
  return (
    <div>
      <Fab color="secondary" className={classes.fab} onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle id="form-dialog-title">Add New Post</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignContent="center" alignItems="center">
            <Grid item spacing={2} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="postCategory"
                  value={postCategory}
                  onChange={handleChangeCategory}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Social"}>Social</MenuItem>
                  <MenuItem value={"Art"}>Art</MenuItem>
                  <MenuItem value={"Political"}>Political</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div className="ImgContainer">
                <Typography variant="subtitle1">Add your Image</Typography>
                <div className="imageHolder">
                  <img src={image} alt="" id="Img" className="profilePic"></img>
                </div>

                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  value={postImage}
                  onChange={picHandler}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera fontSize="large" />
                  </IconButton>
                </label>
              </div>
            </Grid>

            <Grid item xs={7} spacing={2}>
              <TextField
                className={classes.TextField}
                autoFocus
                margin="dense"
                id="postText"
                label="Post"
                fullWidth
                value={postText}
                multiline
                rows={4}
                onChange={handleChange}
              />
              <TextField
                className={classes.TextField}
                autoFocus
                margin="dense"
                id="postTag"
                label="tag"
                value={postTag}
                fullWidth
                onChange={handleChangeTag}
              />
              <TextField
                className={classes.TextField}
                autoFocus
                margin="dense"
                value={postVideo}
                id="postVideo"
                label="Video"
                fullWidth
                onChange={handleChangeVideo}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
