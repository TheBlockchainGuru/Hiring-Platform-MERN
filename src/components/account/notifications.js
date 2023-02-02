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

export const Notifications = (props) => {
  return (
    <Box sx={{ width: "100%", my: 5 }}>
      <Typography variant="h5" sx={{ my: 5 }}>
        Email Notifications
      </Typography>
      <Box sx={{ backgroundColor: "background.paper", p: 5 }}>
        <Box>
          <Box sx={{ mt: 3 }}>
            <Typography>
              Notifications allow your administrators to have global updates to
              account activity and daily assessment summaries.
            </Typography>
            <Typography>
              Individual notifications can be turned off at the assessment
              level.
            </Typography>
          </Box>{" "}
          <Divider />
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Daily digest"
            />
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <FormControlLabel
              control={<Switch />}
              label="Stay up to date with product news"
            />
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Subscribe to blog articles"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
