import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { createPost } from "../../lib/operations/postsOperation";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }),
);

const initialState = {
  title: "",
  body: "",
};

export default function CreateForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = useState(initialState);

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;
    console.log(name, value);
    setValue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value.title.length || !value.body.length) {
      NotificationManager.warning("Fields must contain something");
      return;
    } else {
      dispatch(createPost(value));
      setValue(initialState);
      NotificationManager.success("Good job, you might have created a post");
    }
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Title"
            multiline
            rowsMax={1}
            value={value.title}
            name={"title"}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Content"
            multiline
            rows={4}
            name={"body"}
            value={value.body}
            defaultValue="Default Value"
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>
        <Button
          variant="outlined"
          onClick={handleSubmit}
          style={{ width: "100%" }}>
          SUBMIT
        </Button>
      </form>
      <NotificationContainer />
    </div>
  );
}
