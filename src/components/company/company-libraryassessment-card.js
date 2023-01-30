import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import {
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
} from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const CompanyLibraryAssessmentCard = (props) => {
  const { info } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = (value) => {
    setOpenDialog(false);
  };
  return (
    <Card>
      <CardHeader
        action={
          <Box>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{ mx: 2 }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Add to my assessments</MenuItem>
              <MenuItem onClick={handleClose}>View Details</MenuItem>
              <MenuItem onClick={handleClose}>Preview</MenuItem>
            </Menu>
          </Box>
        }
        sx={{ pb: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h5">{info.title}</Typography>
        <Typography>{info.category}</Typography>
        <Typography sx={{ my: 3 }}>{info.description}</Typography>
        <Box>
          {info.skills.map((ele, index) => {
            return (
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                sx={{ borderRadius: "50px", m: 1 }}
                key={index}
              >
                {ele}
              </Button>
            );
          })}
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "right" }}>
        <Button
          variant="container"
          sx={{
            bgcolor: "green",
            color: "white",
            " &:hover": { bgcolor: "#008000ad" },
          }}
          onClick={handleClickOpen}
        >
          Details
        </Button>
        <Dialog
          onClose={handleDialogClose}
          open={openDialog}
          maxWidth="lg"
          fullWidth={true}
        >
          <DialogContent sx={{ p: 5 }}>
            <Grid container spacing={8}>
              <Grid item sm={6} xs={12}>
                <Typography variant="h4">{info.title}</Typography>
                <Box sx={{ mt: 8 }}>
                  <Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    ></Box>
                    <Typography variant="h5">Assessment Details</Typography>
                  </Box>{" "}
                  <Box sx={{ mt: 2 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5">Author</Typography>
                      <Typography variant="h5">Vervoe</Typography>
                    </Box>
                  </Box>{" "}
                  <Box sx={{ mt: 2 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5">Question</Typography>
                      <Typography variant="h5">9</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    <Button variant="outlined">Text</Button>
                  </Box>
                </Box>
                <Box sx={{ mt: 6 }}>
                  <Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5">Skills</Typography>
                      <Typography variant="h5">3</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    {info.skills.map((ele, index) => {
                      return (
                        <Button
                          key={index}
                          variant="outlined"
                          size="small"
                          sx={{ borderRadius: "50px", m: 1, ml: 0 }}
                        >
                          {ele}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: 5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button variant="outlined">Preview Assessment</Button>
                  <Button variant="outlined">Add to Assessment</Button>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Assessment Summary
                  </Typography>
                  <Typography variant="body">
                    A Recruiter is responsible for all aspects of recruiting
                    from client management, candidate sourcing, and engagement
                    and placing candidates into the required roles. There may be
                    a sales element to this role too. A recruiter will identify
                    clients to work with and build their business by placing
                    candidates into roles, or work with internal hiring
                    managers.
                  </Typography>
                </Box>{" "}
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Skills tested in this assessment
                  </Typography>
                  <Typography variant="body">
                    The skills tested in this assessment for a Recruiter
                    determine how the candidate will attract and manage
                    candidates for their active roles, how they manage difficult
                    situations with both clients and candidates, how they
                    communicate written and verbally, and whether they can
                    influence and negotiate with people. Further, it will test
                    if candidates have a recruitment strategy in different
                    markets.
                  </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    What to test with this assessment
                  </Typography>
                  <Typography variant="body">
                    You can expect to learn whether candidates have the ability
                    to negotiate with candidates and clients or stakeholders,
                    have effective candidate sourcing strategies, and have the
                    ability to effectively communicate with clients and
                    candidates in difficult situations.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
};
