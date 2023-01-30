import PropTypes from "prop-types";
import NextLink from "next/link";
import { useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonBase,
  Container,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import Router from "next/router";
import { Menu as MenuIcon } from "../../icons/menu";
import { Logo } from "../logo";
import { CompanyAccountPopover } from "./company-account-popover";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
import { useRouter } from "next/router";

export const CompanyNavbar = (props) => {
  const router = useRouter();
  const { onOpenSidebar } = props;
  const AccountButton = () => {
    const anchorRef = useRef(null);
    const [openPopover, setOpenPopover] = useState(false);
    // To get the user from the authContext, you can use
    // `const { user } = useAuth();`

    const handleOpenPopover = () => {
      setOpenPopover(true);
    };

    const handleClosePopover = () => {
      setOpenPopover(false);
    };

    return (
      <>
        <Box
          component={ButtonBase}
          onClick={handleOpenPopover}
          ref={anchorRef}
          sx={{
            alignItems: "center",
            display: "flex",
            ml: 2,
          }}
        >
          <UserCircleIcon />
        </Box>
        <CompanyAccountPopover
          anchorEl={anchorRef.current}
          onClose={handleClosePopover}
          open={openPopover}
        />
      </>
    );
  };
  const arr = [
    { link: "/company", title: "My Assessments" },
    { link: "/company/assessment-library", title: "Assessment Library" },
    { link: "/company/hired", title: "Hired" },
  ];
  const checkPath = (path) => {
    return path === router.pathname;
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="100%">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <NextLink href="/" passHref>
            <a>
              <Logo
                sx={{
                  display: {
                    md: "inline",
                    xs: "none",
                  },
                  height: 40,
                  width: 40,
                }}
              />
            </a>
          </NextLink>
          {arr.map((ele, index) => {
            let flag = checkPath(ele.link);
            return (
              <NextLink key={index} href={ele.link} passHref>
                <Link
                  color={flag ? "textPrimary" : "textSecondary"}
                  underline="none"
                  variant="subtitle2"
                  sx={{ mx: 2 }}
                  key={index}
                >
                  {ele.title}
                </Link>
              </NextLink>
            );
          })}{" "}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <Button
              onClick={() => Router.push("/company")}
              size="medium"
              color="inherit"
              sx={{ mx: 1, border: "1px solid grey" }}
              variant="outlined"
            >
              Create Assessment
            </Button>
            <Button
              onClick={() => Router.push("/company")}
              size="medium"
              sx={{ mx: 1 }}
              variant="outlined"
            >
              Upgrade Plan
            </Button>
            <AccountButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

CompanyNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
