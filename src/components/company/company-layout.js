import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { CompanyNavbar } from "./company-navbar";
import { CompanySidebar } from "./company-sidebar";

const CompanyLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const CompanyLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <CompanyLayoutRoot>
      <CompanyNavbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <CompanySidebar
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
      {children}
    </CompanyLayoutRoot>
  );
};

CompanyLayout.propTypes = {
  children: PropTypes.node,
};
