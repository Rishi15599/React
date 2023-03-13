import logo from './logo.svg';
import './App.css';
import Sign_up from "./Sign_up/Sign_up";
import SideBar from './SideBar/SideBar';
import Contact from './Contact/Contact';
import Sign_in from './Sign_in/Sign_in';

function App() {
  return (
    <div className="App">
     <SideBar />
     <Sign_in />
     <Sign_up  />
     <Contact />

    </div>
  );
}
export default App;
