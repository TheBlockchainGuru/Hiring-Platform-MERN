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
import { CompanyHired } from "../../components/company/company-hired";
import { gtm } from "../../lib/gtm";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hired = () => {
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
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          textAlign: "center",
          borderBottom: "2px solid #EBECEE",
        }}
      >
        <Box
          sx={{ py: { xs: 2, sm: 0 }, display: "flex", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ color: "#A9AAAE" }}>
            All Candidates
          </Typography>
          <ArrowForwardIosIcon fontSize="small" sx={{ mx: 2 }} />
          <Typography variant="h5">Hired</Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <CompanyHired />
      </Container>
    </>
  );
};

Hired.getLayout = (page) => <CompanyLayout>{page}</CompanyLayout>;

export default Hired;
