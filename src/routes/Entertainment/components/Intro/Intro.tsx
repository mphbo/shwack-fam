import React, { useState } from "react";
import styles from "./intro.module.scss";
import {
  Button,
  Dialog,
  DialogContent,
  Fade,
  Tab,
  Tabs,
  keyframes,
} from "@mui/material";
import EventButton from "./components/EventButton";
import { useNavigate } from "react-router-dom";

type TabId = "upcoming" | "past";

const pulseAnimation = keyframes`
  0% { background-color: #51daff66; }
  10% { background-color: #51daff55; } /* Slightly lighter */
  20% { background-color: #51daff44; } /* Slightly lighter */
  30% { background-color: #51daff33; } /* Slightly lighter */
  40% { background-color: #51daff22; } /* Slightly lighter */
  50% { background-color: #51daff11; } /* Slightly lighter */
  60% { background-color: #51daff22; } /* Slightly lighter */
  70% { background-color: #51daff33; } /* Slightly lighter */
  80% { background-color: #51daff44; } /* Slightly lighter */
  90% { background-color: #51daff55; } /* Slightly lighter */
  100% { background-color: #51daff66; }
`;

const Intro = () => {
  const [tab, setTab] = useState<TabId>("upcoming");
  const [prevTab, setPrevTab] = useState<TabId | "">("");
  const [eventImage, setEventImage] = useState<string>("");
  const [isEventOpen, setIsEventOpen] = useState<boolean>(false);

  const handleChange = (e: React.SyntheticEvent, value: TabId) => {
    setTab(value);
  };

  const handleClick = (url: string, upcoming: boolean = false) => {
    if (upcoming) {
      window.open(url, "_blank");
    } else {
      setIsEventOpen(true);
      setEventImage(url);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <video className={styles.video} muted autoPlay loop>
          <source src="/gregoland.mp4" type="video/mp4" />
        </video>
        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeText}>
            <h1>WELCOME</h1>
            <h1>TO THE FAM</h1>
          </div>
          <Tabs
            value={tab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            variant="fullWidth"
            orientation="vertical"
            className={styles.tabs}
            sx={{
              "& .MuiTabs-indicator": {
                width: "5px", // Adjust thickness here
              },
              "& .MuiTab-root": {
                minHeight: "60px", // Adjust tab height here
                padding: "12px 16px", // Control inner spacing
              },
            }}
          >
            <Tab
              value="upcoming"
              label="Upcoming"
              sx={{
                fontSize: 25,
                alignItems: "start",
                color: "white",
              }}
            />
            <Tab
              value="past"
              label="Past"
              sx={{ fontSize: 25, alignItems: "start", color: "white" }}
            />
          </Tabs>
          <div className={styles.events}>
            <div
              className={
                tab === "upcoming"
                  ? styles.fadeEnter
                  : prevTab === "upcoming"
                  ? styles.fadeExit
                  : ""
              }
            >
              {tab === "upcoming" && (
                <>
                  <h2 className={styles.eventsText}>Upcoming Events:</h2>

                  <EventButton
                    name="Gregoland"
                    description="Nov 7th, 2025"
                    onClick={() =>
                      handleClick(
                        "https://www.eventbrite.com/e/gregoland-tickets-1609285408979",
                        true
                      )
                    }
                    alert
                  />
                </>
              )}
            </div>
            <div
              className={
                tab === "past"
                  ? styles.fadeEnter
                  : prevTab === "past"
                  ? styles.fadeExit
                  : ""
              }
            >
              {tab === "past" && (
                <>
                  <h2 className={styles.eventsText}>Past Events:</h2>
                  <EventButton
                    name="Gregoland - 2024"
                    onClick={() => handleClick("/gregoland.png")}
                  />
                  <EventButton
                    name="May the 24th"
                    description="be with you"
                    onClick={() => handleClick("/may24.png")}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={isEventOpen}
        onClick={() => setIsEventOpen(false)}
        onClose={() => setIsEventOpen(false)}
        className={styles.dialog}
        fullScreen
        TransitionComponent={Fade} // Smooth fade effect
        transitionDuration={500} // Adjust duration for slower or faster fade
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "black", // Ensures background is pure black
          },
          "& .MuiDialogContent-root": {
            backgroundColor: "black",
          },
        }}
      >
        <DialogContent className={styles.dialogContent}>
          <img
            className={styles.eventImage}
            src={eventImage}
            alt="background"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Intro;
