import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/CartDrawer";

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: "none" }} className="overlay">
        <Drawer />
      </div>

      <Header />
      <div className="content">
        <div className="header_search">
          <h1>Все Аксессуары</h1>
          <div className="search-block">
            <img src="/img/search.png" alt="search" width={20} height={18} />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
