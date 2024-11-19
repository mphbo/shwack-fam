export interface IPerson {
  name: string;
  title: string;
  image: string;
  learnMore?: {
    text: JSX.Element;
    image: string;
  };
  socials?: {
    instragram?: string;
    tiktok?: string;
    facebook?: string;
    spotify?: string;
    soundCloud?: string;
    linkTree?: string;
  };
}

export const people: IPerson[] = [
  {
    name: "Dark Arkade (Larry Tate)",
    title: "Organizer / Music Producer",
    image: "/dark-arkade.png",
    learnMore: {
      text: (
        <p>
          The Dark Arkade is not a person, it is not a being. The Dark Arkade is
          the walls around us, the floor we stand on, the sky above us and the
          earth below. It is the world we live in whether you believe it or
          not... Welcome to THE DARK ARKADE 🕹
        </p>
      ),
      image: "/dark-arkade2.png",
    },
  },
  {
    name: "Miner Joe (Nichole Cooke)",
    title: "Organizer / DJ",
    image: "/miner-joe.png",
    learnMore: {
      text: (
        <>
          <p>
            Miner Joe is a sonic treasure hunter who digs deep to unearth the
            freshest beats and gems of electronic music. With a passion for
            rhythm that started in her childhood bedroom, Joe transformed her
            love for music into an electrifying adventure behind the decks.
          </p>
          <p>
            Miner Joe has captivated audiences with her unique blend of sounds
            and positive energy. Her sets are a journey through weaving together
            pulsating basslines and ethereal melodies that keep dance floors
            moving until dawn. Known for her cute and sassy energetic
            performances, and magnetic stage presence, Joe has quickly became a
            crowd favourite.
          </p>
          <p>
            Join her on this electrifying journey and experience the magic of
            her music. The adventure starts now!
          </p>
        </>
      ),
      image: "/miner-joe2.png",
    },
  },
  {
    name: "Jammie (Annie Williams, James Burford)",
    title: "Organizer / DJ Group",
    image: "/jammie.png",
    learnMore: {
      text: (
        <p>
          Beyond anything else, music is about moments. The goosebumps you feel,
          the bass in your bones, the secret smiles on the dancefloor. That’s
          what Jammie is all about. A fusing of magical, musical joy, stowed
          away in the hearts of every partygoer, yearning to awaken at the press
          of a button.
        </p>
      ),
      image: "/jammie2.png",
    },
  },
  {
    name: "Bass Windu (Chris Williams)",
    title: "Organizer / Music Producer",
    image: "/bass-windu.png",
    learnMore: {
      text: (
        <p>
          BASS WINDU is a bass music producer from Edmonton, Alberta. With
          blends of heavy bass and punchy drum patterns, he creates a raw and
          hypnotic experience that takes inspiration from Sci-Fi and Fantasy.
          Making his live debut, expect to hear a wide range of original music,
          and remixes.
        </p>
      ),
      image: "/bass-windu2.png",
    },
  },
  {
    name: "Dead City (Dylan Palin)",
    title: "Organizer / Music Producer",
    image: "/dead-city.png",
    learnMore: {
      text: (
        <p>
          Hailing from Edmonton, Alberta, Dead City is a producer and DJ with
          over 12 years in the underground music scene. Specializing in UKG,
          bassline, DnB, dubstep, glitch hop, and beyond, his sound is dark,
          dirty, and experimental, pushing the boundaries of genre conventions.
          With a passion for the underground, Dead City has self-released
          numerous tracks and collaborated with fellow artists, including an
          official release with Westcove Recordings. He’s also part of the
          driving force behind Greg-o-Land, an annual festival honoring his late
          friend, fostering community and creativity in the local scene.
        </p>
      ),
      image: "/dead-city2.png",
    },
  },
  {
    name: "Jacob Profitt",
    title: "Organizer",
    image: "/jacob-profitt.png",
    learnMore: {
      text: (
        <p>
          asdf asdf asdf as dfa sdf askdjfaskld fakljsdf askldjf alksdjfa
          slkdf;ja lskdfja ;lksdj falk;sdjf ;laksjd fklasjd flk;ajsd fkla
          jsdkl;fj askldfja;lksdjflkasdjflkajsdf
        </p>
      ),
      image: "/jacob-profitt2.png",
    },
  },
];
