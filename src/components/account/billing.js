import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Typography,
  Autocomplete,
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
import { Button, Switch, TextField, Stack, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";

export const Billing = (props) => {
  return (
    <Box sx={{ width: "100%", my: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 5 }}>
        <Typography variant="h5">Subscription Management</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <Box
          sx={{
            p: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6">Current Plan</Typography>
            <Typography variant="h4" sx={{ my: 1 }}>
              Free Trial
            </Typography>
          </Box>
          <Button variant="contained">Change Plan</Button>
        </Box>
        <Divider />
        <Box sx={{ p: 5 }}>
          <Typography variant="h6">Your plan : Free Trial</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>0/1 Active Assessments</Typography>
            <Typography sx={{ mx: 2 }}>Unlimited User Seats</Typography>
            <Typography>5 Candidate Limit</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
