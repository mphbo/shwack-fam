import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import styles from "./entertainment.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";
import Bio from "./components/Bio";
import People from "./components/People";
import Email from "./components/Email";
import { Container } from "@mui/material";
import BottomNavbar from "./components/BottomNavbar";
import { motion } from "framer-motion";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

function Entertainment() {
  const audio = useRef<null | HTMLAudioElement>(null);

  const introRef = useRef<null | HTMLDivElement>(null);
  const eventsRef = useRef<null | HTMLDivElement>(null);
  const peopleRef = useRef<null | HTMLDivElement>(null);
  const bioRef = useRef<null | HTMLDivElement>(null);
  const soundcloudRef = useRef<null | HTMLDivElement>(null);
  const emailRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    audio.current = new Audio("/candy-shop.mp3");
  }, []);

  return (
    <div className={styles.page}>
      <Container disableGutters>
        <Navbar refs={{ eventsRef, emailRef, peopleRef }} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <div ref={eventsRef} className={styles.introSection}>
            <Intro />
          </div>
          <div ref={bioRef} className={styles.bioSection}>
            <Bio />
          </div>
          <div ref={peopleRef} className={styles.bioSection}>
            <People />
          </div>
          <div ref={soundcloudRef} className={styles.soundcloudSection}>
            <SoundCloudWidget audio={audio} />
          </div>
          <div ref={emailRef} className={styles.emailSection}>
            <Email />
          </div>
          <div className={styles.contactSection}>
            <Contact />
          </div>
          {/* Components not being used, but kept here so not forgotten when adding new stuff */}
          {/* <div className={styles.sideScrollSection}>
            <SideScroll />
          </div> */}
          {/* <div className={styles.socialsSection}>
            <Socials />
          </div> */}
          {/* <div ref={eventsRef} className={styles.eventsSection}>
            <Events />
          </div> */}
        </motion.main>
        <BottomNavbar audio={audio} />
      </Container>
    </div>
  );
}

export default Entertainment;
