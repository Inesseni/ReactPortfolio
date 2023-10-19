import logo from "./logo.svg";
import "./App.css";
import Slide from "./components/Slide";
import SliderShow from "./components/SliderShow";
import Header from "./components/Header";
import socialARDatabase from "./SocialARDatabase";
import VRWorks from "./components/VRWorks";

function App() {
  return (
    <div className="App">
      <SliderShow />
      <VRWorks />
      <VRWorks />
      <VRWorks />
    </div>
  );
}

export default App;
