import Header from "./components/Header";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Navi />
      <Main />
      <Welcome />
      <Sidebar />
      <Footer />
    </div>
  );
}