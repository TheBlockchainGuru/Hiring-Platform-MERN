import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";

import {
  Typography,
  RadioGroup,
  Radio,
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
import CheckIcon from "@mui/icons-material/Check";
export const Plan = (props) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", my: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 5 }}>
        <Typography variant="h5">Choose your plan</Typography>
      </Box>
      <Stack
        flexDirection="row"
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 5,
            borderRight: "1px solid " + theme.palette.divider,
          }}
        >
          <Typography variant="h5" sx={{ my: 5 }}>
            CHANGE PLAN
          </Typography>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="pay"
            name="radio-buttons-group"
          >
            <Box
              sx={{
                backgroundColor: "background.default",
                p: 3,
                borderRadius: 1,
                my: 3,
              }}
            >
              <FormControlLabel
                value="pay"
                control={<Radio />}
                label="PAY & GO"
              />
              <Typography variant="h4">$228</Typography>
              <Typography variant="h5">Billed Annually</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "background.default",
                p: 3,
                borderRadius: 1,
                my: 3,
              }}
            >
              <FormControlLabel
                value="enterprise"
                control={<Radio />}
                label="ENTERPRISE"
              />
              <Typography variant="h4">Custom</Typography>
              <Typography variant="h5">Billed Annually</Typography>
            </Box>
          </RadioGroup>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              p: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4">Enterprise plan</Typography>
            <Button variant="contained">Talk To Sales</Button>
          </Box>
          <Divider />
          <Box sx={{ p: 5 }}>
            <Stack flexDirection="row">
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Custom Open Assessments
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon />
                  <Typography sx={{ my: 1, ml: 2 }}>
                    Assessment limits
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon />
                  <Typography sx={{ my: 1, ml: 2 }}>
                    Custom Team Seats
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon />
                  <Typography sx={{ my: 1, ml: 2 }}>
                    Unlimited candidates
                  </Typography>
                </Box>
              </Box>{" "}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                  Anti Cheating features
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon />
                  <Typography sx={{ my: 1, ml: 2 }}>
                    Candidate geolocation tracking
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon />
                  <Typography sx={{ my: 1, ml: 2 }}>
                    Plagiarism checker
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon />
                  <Typography sx={{ my: 1, ml: 2 }}>
                    Question randomization
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
