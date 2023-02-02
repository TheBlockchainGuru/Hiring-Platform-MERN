import NextLink from "next/link";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MainLayout } from "../../components/main-layout";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "../../icons/check-circle-outlined";
import { Users as UsersIcon } from "../../icons/users";
import { Star as StarIcon } from "../../icons/star";
import { Template as TemplateIcon } from "../../icons/template";

const About = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "background.paper",
        pt: 6,
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" variant="h1">
          About US
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ py: 3 }}>
          Gather objective data on applicants and employees, identify top candidates, easily conduct structured interviews — all with Hire Success.
        </Typography>
      </Container>
    </Box>
  );
};

About.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default About;
