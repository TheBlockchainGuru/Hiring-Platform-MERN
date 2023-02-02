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
import { ScriptInsights } from "../../components/script/insights";
import { gtm } from "../../lib/gtm";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Router from "next/router";

const Insights = () => {
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
  ];
  return (
    <>
      <Box
        sx={{
          px: 3,
          borderBottom: "2px solid #EBECEE",
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ color: "#A9AAAE" }}>
              Personal Assistant
            </Typography>
            <Button variant="contained" size="small" sx={{ ml: 2 }}>
              open
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" size="small" sx={{ mx: 1 }}>
              Preview
            </Button>
            <Button variant="outlined" size="small" sx={{ mx: 1 }}>
              Candidate
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
              onClick={() => {
                Router.push("/scripts/edit");
              }}
            >
              CREATE
            </Button>{" "}
            <Button
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
              onClick={() => {
                Router.push("/scripts/invite");
              }}
            >
              INVITE
            </Button>{" "}
            <Button
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
              onClick={() => {
                Router.push("/scripts/select");
              }}
            >
              SELECT
            </Button>{" "}
            <Button
              variant="contained"
              size="small"
              sx={{ mr: 2 }}
              onClick={() => {
                Router.push("/scripts/insights");
              }}
            >
              INSIGHTS
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" size="small" sx={{ mx: 1 }}>
              Settings
            </Button>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <ScriptInsights />
      </Container>
    </>
  );
};

Insights.getLayout = (page) => <CompanyLayout>{page}</CompanyLayout>;

export default Insights;
