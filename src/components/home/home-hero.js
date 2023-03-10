import NextLink from "next/link";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "../../icons/check-circle-outlined";
import { Users as UsersIcon } from "../../icons/users";
import { Star as StarIcon } from "../../icons/star";
import { Template as TemplateIcon } from "../../icons/template";

export const HomeHero = (props) => {
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
        <Typography color="primary" variant="overline">
          Welcome to
        </Typography>
        <Typography align="center" variant="h1">
          Hiring Platform
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ py: 3 }}>
          Gather objective data on applicants and employees, identify top candidates, easily conduct structured interviews — all with Hire Success.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mx: -1,
            mt: 2,
            mb: 6,
            "& > a": {
              m: 1,
            },
          }}
        >
          <NextLink href="/#" passHref>
            <Button component="a" size="large" variant="outlined">
              Request a Demo
            </Button>
          </NextLink>
          <NextLink href="/#" passHref>
            <Button component="a" size="large" variant="contained">
              Try It Free
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};
