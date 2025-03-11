import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Entertainment from "./routes/Entertainment";
import Landing from "./routes/Landing";
import { AnimatePresence, motion } from "framer-motion";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const AnimatedPage = ({ children }: any) => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AnimatedPage>
        <Landing />
      </AnimatedPage>
    ),
  },
  {
    path: "/entertainment",
    element: <Entertainment />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", // Your primary color
    },
    secondary: {
      main: "#51daff", // Your secondary color
    },
    background: {
      default: "#fff", // Global background color
    },
    text: {
      primary: "#fff", // Default text color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
