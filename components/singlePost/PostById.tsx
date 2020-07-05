import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import { deletePosts } from "../../lib/operations/postsOperation.js";
import Loader from "../loader/Loader.js";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function PostById() {
  const post = useSelector(state => state.post);
  const { title, body, id } = post;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleDelete = () => {
    dispatch(deletePosts(id));
    router.push("/");
  };

  return (
    <>
      {title ? (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                x
              </Avatar>
            }
            title={title}
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {body && body.substring(0, 80) + "..."}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ) : (
        <Loader />
      )}
    </>
  );
}
