import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Divider,
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
import { CompanyLayout } from "../../components/company/company-layout";
import { CompanyMyassessmentCard } from "../../components/company/company-myassessments-card";
import { gtm } from "../../lib/gtm";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
const Home = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const assistants = [
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      candidates: 1,
      completion: 1,
      hires: 1,
      date: "25 Jan, 2023",
    },
  ];
  return (
    <>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          textAlign: "center",
          borderBottom: "2px solid #EBECEE",
        }}
      >
        <Typography variant="h5" sx={{ py: { xs: 2, sm: 0 } }}>
          My Assessments
        </Typography>
        <Box sx={{ display: "flex" }}>
          <OutlinedInput
            placeholder="Search"
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <Box>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{ mx: 2 }}
            >
              <TuneIcon />
              &nbsp;Filter
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
              <MenuItem onClick={handleClose}>Open</MenuItem>
              <MenuItem onClick={handleClose}>Closed</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ py: { xs: 2, sm: 0 } }}>
            All Assessments ({assistants.length})
          </Typography>
          <Typography variant="h6" sx={{ py: { xs: 2, sm: 0 } }}>
            You are using 1 out of {assistants.length} Open Assessment on the
            Free Trial Plan.
            <Link href="#">&nbsp;Upgrade Plan</Link>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {assistants.map((ele, index) => (
            <Grid item key={index} md={3} sm={6} xs={12}>
              <CompanyMyassessmentCard info={ele} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

Home.getLayout = (page) => <CompanyLayout>{page}</CompanyLayout>;

export default Home;
