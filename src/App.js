import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {
  return (
    <div>
      <Sidebar color="#212121" branding="hello" />
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
