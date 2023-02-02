import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NextLink from "next/link";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import { Button, TextField, Stack, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const ScriptSelect = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "background.paper", my: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <Box sx={{ alignItems: "center", display: "flex" }}>
                <PeopleAltOutlinedIcon />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {" "}
                  Candidates
                </Typography>
              </Box>
            }
            {...a11yProps(0)}
            sx={{ width: "200px" }}
          />
          <Tab
            label={
              <Box sx={{ alignItems: "center", display: "flex" }}>
                <BookmarkAddedOutlinedIcon />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {" "}
                  Shortlist
                </Typography>
              </Box>
            }
            {...a11yProps(1)}
            sx={{ width: "200px" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <PeopleAltOutlinedIcon sx={{ fontSize: "80px" }} />
            <Typography variant="h5">No Candidates Invited</Typography>
            <Typography sx={{ my: 2 }}>
              Invite your first candidates&nbsp;&nbsp;
              <NextLink href="#"> here </NextLink>
            </Typography>
          </Box>
        </Box>
      </TabPanel>{" "}
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <PeopleAltOutlinedIcon sx={{ fontSize: "80px" }} />
            <Typography variant="h5">No candidates shortlisted</Typography>
            <Typography sx={{ my: 2 }}>
              Candidates that you’ve shortlisted will show up here. Once
              shortlisted you can <br /> compare their assessment results and
              answers.
            </Typography>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};
