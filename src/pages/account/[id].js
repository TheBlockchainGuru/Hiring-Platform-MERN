import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Divider,
  Tabs,
  Tab,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  OutlinedInput,
  InputAdornment,
  Container,
  Grid,
  Link,
} from "@mui/material";
import PropTypes from "prop-types";

import { CompanyLayout } from "../../components/company/company-layout";
import { MyAccount } from "../../components/account/my-account";
import { CompanyAccount } from "../../components/account/company-account";
import { Notifications } from "../../components/account/notifications";
import { Billing } from "../../components/account/billing";
import { Team } from "../../components/account/team";
import { Plan } from "../../components/account/plan";
import { gtm } from "../../lib/gtm";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Router, { useRouter } from "next/router";
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
        <Container maxWidth="xl">
          <Box>{children}</Box>
        </Container>
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

const Account = () => {
  const router = useRouter();
  const arr = [
    { title: "My Account", link: "my-account" },
    { title: "Company Account", link: "company-account" },
    { title: "Notifications", link: "notifications" },
    { title: "Team", link: "team" },
    { title: "Current Plan and Billing Details", link: "billing" },
    { title: "Plan Types", link: "plan" },
    // { title: "Integrations", link: "integrations" },
  ];
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (arr.findIndex((ele) => ele.link == router.query.id) > -1)
      setValue(arr.findIndex((ele) => ele.link == router.query.id));
  }, [router.query.id]);
  return (
    <>
      <Box>
        <Typography variant="h5" sx={{ p: 3 }}>
          Account Details
        </Typography>
        <Tabs
          value={value}
          aria-label="basic tabs example"
          sx={{
            ml: 3,
            // borderBottom: "1px solid #EBECEE",
          }}
        >
          {arr.map((ele, index) => {
            return (
              <Tab
                key={index}
                label={
                  <Box sx={{ alignItems: "center", display: "flex" }}>
                    <Typography sx={{ ml: 1 }}> {ele.title}</Typography>
                  </Box>
                }
                onClick={() => {
                  Router.push("/account/" + ele.link);
                }}
                {...a11yProps({ index })}
              />
            );
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyAccount />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyAccount />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Notifications />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Team />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Billing />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Plan />
      </TabPanel>
    </>
  );
};

Account.getLayout = (page) => <CompanyLayout>{page}</CompanyLayout>;

export default Account;
