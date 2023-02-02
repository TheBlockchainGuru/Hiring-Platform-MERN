import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, Button, Menu, MenuItem, TextField } from "@mui/material/";
import Box from "@mui/material/Box";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Divider, Stack } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { useEffect } from "react";

export const ScriptEdit = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [string, setString] = useState("Show All");
  const [selected, setSelected] = useState({
    title: "",
    name: "",
    category: "",
    content: ``,
  });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setString(e.target.innerText);
    setAnchorEl(null);
  };
  const arr = [
    {
      title: "Q1",
      name: "Question 1",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
    {
      title: "Q2",
      name: "Question 2",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
    {
      title: "Q3",
      name: "Question 3",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
    {
      title: "Q4",
      name: "Question 4",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
    {
      title: "Q5",
      name: "Question 5",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
    {
      title: "Q6",
      name: "Question 6",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
    {
      title: "Q7",
      name: "Question 7",
      category: "CALENDAR MANAGEMENT",
      content: `You are working for the General Manager of a global company who needs to have a conference call with her counterpart in New York. Your manager cannot work past 7pm any night this week due to other commitments.

      Write an email to the GM in New York inviting them to a meeting, including the date and proposed time (in both time zones). You can be as creative as you like with details.`,
    },
  ];
  useEffect(() => {
    setSelected(arr[0]);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        my: 5,
      }}
    >
      <Stack flexDirection={{ sm: "row", xs: "column" }}>
        <Box flex={1} sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Assessment Questions
          </Typography>
          <Divider />
          <Box sx={{ textAlign: "right", my: 2 }}>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
            >
              {string}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Show All</MenuItem>
              <MenuItem onClick={handleClose}>Calendar Management</MenuItem>
              <MenuItem onClick={handleClose}>Comunication Skills</MenuItem>
              <MenuItem onClick={handleClose}>Personal Assistant</MenuItem>
              <MenuItem onClick={handleClose}>Organization</MenuItem>
            </Menu>
          </Box>
          <Box maxHeight="800px" sx={{ overflowY: "scroll" }}>
            {arr.map((ele, index) => {
              return (
                <Box
                  key={index}
                  onClick={() => {
                    setSelected(ele);
                  }}
                  sx={{
                    my: 1,
                    backgroundColor: "background.default",
                    p: 2,
                    borderRadius: 1,
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Button variant="contained" size="small">
                      {ele.title}
                    </Button>
                    <Typography
                      sx={{
                        ml: 1,
                        pt: "7px",
                        textOverflow: "ellipsis",
                        display: "block",
                        overflow: "hidden",
                        maxWidth: "150px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ele.category}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        ml: 1,
                        pt: "7px",
                        textOverflow: "ellipsis",
                        display: "block",
                        overflow: "hidden",
                        maxWidth: "210px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ele.content}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box flex={{ sm: 2, xs: 1, md: 3 }} sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            {selected.name}
          </Typography>
          <Typography sx={{ my: 5 }}>{selected.content}</Typography>
          <TextField
            fullWidth
            name="message"
            placeholder="Type your answer here...."
            required
            multiline
            rows={6}
          />
        </Box>
      </Stack>
    </Box>
  );
};
