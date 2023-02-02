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

export const Team = (props) => {
  return (
    <Box sx={{ width: "100%", my: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 5 }}>
        <Typography variant="h5">Email Notifications</Typography>
        <Button variant="contained">Invite Team Members</Button>
      </Box>
      <Box sx={{ backgroundColor: "background.paper", p: 5 }}>
        <Box>
          <Box sx={{ mb: 3, display: "flex" }}>
            <Typography>Active(1)</Typography>
            <Typography sx={{ ml: 2 }}>Pending(0)</Typography>
          </Box>{" "}
          <Table sx={{ my: 2 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>User@mail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};
