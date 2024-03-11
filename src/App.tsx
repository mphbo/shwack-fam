import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Landing from "./routes/Landing";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedPage = ({ children }: any) => {
  return (
    <motion.main
      initial={{ transform: "scale(500%)", rotate: 180, opacity: 0 }}
      animate={{ transform: "scale(100%)", rotate: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
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
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
