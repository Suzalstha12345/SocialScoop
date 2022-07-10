
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainSection/Main';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
      <Main />
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
