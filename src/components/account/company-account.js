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
import { Button, TextField, Stack, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";

export const CompanyAccount = (props) => {
  const countries = [
    { text: "More than 500", value: "10" },
    { text: "101-500", value: "500" },
    { text: "51-100", value: "100" },
    { text: "10-50", value: "50" },
    { text: "Less than 10", value: "10" },
  ];
  const timezone = [
    { text: "Europe/Moscow", value: "10" },
    { text: "Europe/Monaco", value: "500" },
    { text: "Europe/Minsk", value: "100" },
  ];
  const language = [
    { text: "English", value: "10" },
    { text: "Spanish", value: "500" },
  ];

  return (
    <Box sx={{ width: "100%", my: 5 }}>
      <Typography variant="h5" sx={{ my: 5 }}>
        Company Account
      </Typography>
      <Box sx={{ backgroundColor: "background.paper", p: 5 }}>
        <Box sx={{ maxWidth: "500px" }}>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Company Name"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Headquarters Location"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="Website"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>{" "}
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={countries}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Company Size"
                  name="how-many-people-to-hire"
                />
              )}
              fullWidth
            />
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={timezone}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Company Timezone"
                  name="how-many-people-to-hire"
                />
              )}
              fullWidth
            />
          </Stack>
          <Stack flexDirection="row" gap={3} sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              label="About us"
              sx={{ flex: 1 }}
            ></TextField>{" "}
          </Stack>{" "}
          <Stack flexDirection="column" gap={3} sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ my: 3 }}>
              Candidate display language
            </Typography>
            <Autocomplete
              getOptionLabel={(option) => option.text}
              options={language}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Display Language"
                  name="how-many-people-to-hire"
                />
              )}
              fullWidth
            />
          </Stack>{" "}
          <Stack flexDirection="column" gap={3} sx={{ mt: 3 }}>
            <Button variant="contained">Update settings</Button>
          </Stack>{" "}
        </Box>
      </Box>
    </Box>
  );
};
