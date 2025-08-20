import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import styles from "../people.module.scss";
import { useState } from "react";
import { IPerson } from "../constants/people";
import Socials from "../../Socials";

function Person(props: IPerson) {
  const { name, image, title, learnMore, socials } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Card
        sx={{
          minWidth: 345,
          background: "linear-gradient(to bottom right, #51daff, #2b6eb0)",
          color: "black",
        }}
      >
        <CardMedia component="img" image={image} sx={{ height: 350 }} />
        <CardContent sx={{ padding: "16px 16px 0 16px" }}>
          <Typography>{name}</Typography>
          <Typography>{title}</Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            height: 64,
            alignItems: "flex-end",
          }}
        >
          <Button
            sx={{ color: "white", padding: 0 }}
            size="medium"
            onClick={() => setOpen(true)}
          >
            Learn More
          </Button>
          {socials && <Socials socials={socials} footer people />}
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={() => setOpen(false)}
        sx={{
          backgroundImage: `url(${learnMore?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.learnmore}>
          <div className={styles.innercontent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {learnMore?.text}
            </Typography>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Person;
