import ContentPage from "./components/ContentPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Appcontent">
        <Sidebar />
        <ContentPage />
      </div>
    </div>
  );
}

export default App;
