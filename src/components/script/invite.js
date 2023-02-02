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

export const ScriptInvite = (props) => {
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
                <MailOutlineIcon />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {" "}
                  Invite
                </Typography>
              </Box>
            }
            {...a11yProps(0)}
            sx={{ width: "200px" }}
          />
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
            {...a11yProps(1)}
            sx={{ width: "200px" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            minHeight: "500px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Email Invite</Typography>
            <NextLink href="/scripts/invite" color="textSecondary" passHref>
              Preview/Edit invitation email
            </NextLink>
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <TourOutlinedIcon />
              &nbsp;&nbsp;&nbsp; See results for up to 5 candidates with your
              Free Trial Plan. to view more
            </Typography>
          </Box>
          <Box>
            <Stack gap={2} flexDirection="row" sx={{ my: 2 }}>
              <TextField
                variant="outlined"
                label="Full Name"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Email"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <Box
                sx={{
                  flex: 1,
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Button disabled variant="contained">
                  <InfoOutlinedIcon /> &nbsp;Phone
                </Button>
              </Box>
            </Stack>
            <Stack gap={2} flexDirection="row" sx={{ my: 2 }}>
              <TextField
                variant="outlined"
                label="Full Name"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Email"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <Box
                sx={{
                  flex: 1,
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Button disabled variant="contained">
                  <InfoOutlinedIcon /> &nbsp;Phone
                </Button>
              </Box>
            </Stack>
            <Stack gap={2} flexDirection="row" sx={{ my: 2 }}>
              <TextField
                variant="outlined"
                label="Full Name"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Email"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <Box
                sx={{
                  flex: 1,
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Button disabled variant="contained">
                  <InfoOutlinedIcon /> &nbsp;Phone
                </Button>
              </Box>
            </Stack>
            <Stack gap={2} flexDirection="row" sx={{ my: 2 }}>
              <TextField
                variant="outlined"
                label="Full Name"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Email"
                size="small"
                sx={{ flex: 3 }}
              ></TextField>
              <Box
                sx={{
                  flex: 1,
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Button disabled variant="contained">
                  <InfoOutlinedIcon /> &nbsp;Phone
                </Button>
              </Box>
            </Stack>
          </Box>
          <Divider />
          <Box sx={{ my: 1 }}>
            <Button sx={{ my: 1 }}>
              <AddOutlinedIcon /> Add more rows
            </Button>
            <Box>
              <Button>
                <AddOutlinedIcon /> Send a test to myself
              </Button>{" "}
              <Button variant="contained">
                <AddOutlinedIcon /> Send invitations
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography variant="h5">Invite Links</Typography>
            <Typography>
              Invite candidates via link through social network or your own
              careers page using trackable and customised links. Anyone with the
              link is able to take the assessment.
            </Typography>
            <Table sx={{ my: 2 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Source</TableCell>
                  <TableCell>Applied</TableCell>
                  <TableCell>Started</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell>Date applied</TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <Button>
              <AddOutlinedIcon /> Add trackable link
            </Button>{" "}
          </Box>
          <Box sx={{ my: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Disable candidate access to application page
                "
              />
            </FormGroup>
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
            <Typography variant="h5">Invite your first candidates</Typography>
            <Typography sx={{ my: 2 }}>
              Candidates that you’ve invited will show up here. You can invite
              more candidates
              <br /> anytime <NextLink href="#">via link </NextLink>
              or <NextLink href="#">via email </NextLink>. Before inviting
              candidates check your{" "}
              <NextLink href="#">invite settings </NextLink>.
            </Typography>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};
