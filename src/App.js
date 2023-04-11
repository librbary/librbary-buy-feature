import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <AnimatePresence mode='wait'>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />

          <main className="mt-16 md:mt-24 p-8 w-full">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
