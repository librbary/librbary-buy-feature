import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllNewArrivals } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import { useEffect } from "react";

function App() {
  const [{ newArrivals }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllNewArrivals().then((data) => {
      dispatch({
        type: actionType.SET_NEW_ARRIVALS,
        newArrivals: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />

          <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
