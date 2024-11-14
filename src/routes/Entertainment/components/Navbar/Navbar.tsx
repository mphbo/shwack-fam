import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styles from "./navbar.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Team", "Email"];

interface NavBarProps {
  refs: {
    eventsRef: React.MutableRefObject<HTMLDivElement | null>;
    emailRef: React.MutableRefObject<HTMLDivElement | null>;
    peopleRef: React.MutableRefObject<HTMLDivElement | null>;
  };
}

function Navbar({ refs: { eventsRef, emailRef, peopleRef } }: NavBarProps) {
  const trigger = useScrollTrigger({
    target: undefined,
  });

  const navigate = useNavigate();

  const handleClick = (page: string) => {
    page === "Team"
      ? peopleRef?.current?.scrollIntoView({ behavior: "smooth" })
      : page === "Email"
      ? emailRef?.current?.scrollIntoView({ behavior: "smooth" })
      : navigate("/");
  };

  const accordionDetails = pages.map((page) => (
    <AccordionDetails className={styles.accordionDetails}>
      <div>
        <Link onClick={() => handleClick(page)} className={styles.link}>
          {page}
        </Link>
      </div>
    </AccordionDetails>
  ));

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={styles.appBar} position="fixed">
        <Container disableGutters>
          <Toolbar className={styles.navbar} disableGutters>
            {/* Desktop */}
            {/* <ChangeHistoryIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                ml: 6,
              }}
            /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>

            {/* Mobile */}
            <Box
              // @ts-ignore
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Accordion className={styles.accordion}>
                <AccordionSummary
                  className={styles.accordionSummary}
                  expandIcon={
                    <ExpandMore sx={{ color: "black", fontSize: 28 }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className={styles.title}>
                    {/* <ChangeHistoryIcon
                      sx={{
                        display: { xs: "flex", md: "none" },
                        mr: 2,
                        mb: 0.3,
                        fontSize: 30,
                      }}
                    /> */}
                    <img src="/sfe-small.svg" alt="shwack fam logo small" />
                  </div>
                </AccordionSummary>
                {accordionDetails}
              </Accordion>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleClick(page)}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
export default Navbar;
