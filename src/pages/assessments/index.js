import { useEffect, useState } from "react";
import Head from "next/head";
import { Divider, Button, Menu, MenuItem, Typography, OutlinedInput, InputAdornment, Container, Grid, Link } from "@mui/material";
import { MainLayout } from "../../components/main-layout";
import { CompanyLibraryAssessmentCard } from "../../components/company/company-libraryassessment-card";
import { gtm } from "../../lib/gtm";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
const Assessments = () => {
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
  const popularAssessments = [
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
  ];
  const allAssessments = [
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
    {
      id: "5e887faca2b7a1ddce01221a",
      title: "Recruiter",
      category: "Vervoe in Human Resources",
      description: "A Recruiter is responsible for all aspects of recruiting from client management, candidate sourcing, and engagement and...",
      skills: ["TYPING", "SEO"],
    },
  ];
  const assessmentTypes = ["ALL", "SALES", "ACCOUNTING AND FINANCE", "ADMIN AND OFFICE", "CUSTOMER SERVICE", "GENERAL SKILLS"];
  const popularSkills = ["SEO", "English", "Teamwork", "Marketing Strategy", "Time Management", "Adaptability"];
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
          Assessment Library
        </Typography>
        <Box sx={{ display: "flex" }}>
          <OutlinedInput
            placeholder="Search by role or skill"
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: "center",
          }}
        >
          {assessmentTypes.map((ele, index) => {
            return (
              <Button variant="outlined" key={index} sx={{ mx: 1, my: { xs: 1, sm: "none" }, borderRadius: "50px" }}>
                {ele}
              </Button>
            );
          })}
        </Box>{" "}
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ mr: 1 }}>
            {" "}
            Popular Skills
          </Typography>
          {popularSkills.map((ele, index) => {
            return (
              <Button variant="outlined" key={index} sx={{ mx: 1, my: { xs: 1, sm: "none" }, borderRadius: "50px" }}>
                {ele}
              </Button>
            );
          })}
        </Box>
        <Box>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Popular Assessments
          </Typography>
          <Grid container spacing={3}>
            {popularAssessments.map((ele, index) => (
              <Grid item key={index} md={3} sm={6} xs={12}>
                <CompanyLibraryAssessmentCard info={ele} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            All Assessments
          </Typography>
          <Grid container spacing={3}>
            {allAssessments.map((ele, index) => (
              <Grid item key={index} md={3} sm={6} xs={12}>
                <CompanyLibraryAssessmentCard info={ele} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

Assessments.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Assessments;
