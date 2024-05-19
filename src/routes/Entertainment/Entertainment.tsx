import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import styles from "./entertainment.module.scss";
import SoundCloudWidget from "./components/SoundCloudWidget";
import Bio from "./components/Bio";
import Email from "./components/Email";
import { Container } from "@mui/material";
import Socials from "./components/Socials";
import BottomNavbar from "./components/BottomNavbar";
import { motion } from "framer-motion";
import SideScroll from "./components/SideScroll";
import Intro from "./components/Intro";
import Events from "./components/Events";

function Entertainment() {
  const audio = useRef<null | HTMLAudioElement>(null);

  const introRef = useRef<null | HTMLDivElement>(null);
  const eventsRef = useRef<null | HTMLDivElement>(null);
  const bioRef = useRef<null | HTMLDivElement>(null);
  const soundcloudRef = useRef<null | HTMLDivElement>(null);
  const emailRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    audio.current = new Audio("/id-v4.mp3");
  }, []);

  return (
    <div className={styles.page}>
      <Container disableGutters>
        <Navbar refs={{ eventsRef, emailRef }} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <div ref={eventsRef} className={styles.introSection}>
            <Intro />
          </div>
          {/* <div className={styles.socialsSection}>
            <Socials />
          </div> */}
          {/* <div ref={eventsRef} className={styles.eventsSection}>
            <Events />
          </div> */}
          <div ref={bioRef} className={styles.bioSection}>
            <Bio />
          </div>
          {/* <div ref={soundcloudRef} className={styles.soundcloudSection}>
            <SoundCloudWidget audio={audio} />
          </div> */}
          {/* <div className={styles.sideScrollSection}>
            <SideScroll />
          </div> */}
          <div ref={emailRef} className={styles.emailSection}>
            <Email />
          </div>
        </motion.main>
        {/* <BottomNavbar audio={audio} /> */}
      </Container>
    </div>
  );
}

export default Entertainment;
