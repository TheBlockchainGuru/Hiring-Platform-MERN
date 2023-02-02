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
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";

export const MyAccount = (props) => {
  return (
    <Box sx={{ width: "100%", my: 5 }}>
      <Typography variant="h5" sx={{ my: 5 }}>
        My Account
      </Typography>
      <Box sx={{ backgroundColor: "background.paper", p: 5 }}>
        <Box sx={{ maxWidth: "500px" }}>
          <UserCircleIcon sx={{ fontSize: "100px" }} />
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="First Name"
              sx={{ flex: 1 }}
            ></TextField>{" "}
            <TextField
              variant="outlined"
              label="Last Name"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Email Address"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Phone Number"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>
          <Stack flexDirection="row" sx={{ mt: 3 }}>
            <Button variant="contained">Update settings</Button>
          </Stack>
          <Typography variant="h6" sx={{ my: 5 }}>
            Password
          </Typography>
          <Divider />
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Current password"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>{" "}
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="New password"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>{" "}
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Confirm password"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>
          <Stack flexDirection="row" sx={{ mt: 3 }}>
            <Button variant="contained">Change Password</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
