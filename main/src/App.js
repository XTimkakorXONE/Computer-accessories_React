import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/CartDrawer";

const arr = [
  {
    title: "Hyperx cloud II Wirelles",
    price: "10 512",
    img: "/img/headphones1.webp",
  },
  {
    title: "Mucai 24D 240Hz",
    price: "18 000",
    img: "/img/monitor.webp",
  },
  {
    title: "logitech g pro x superlight",
    price: "10 000",
    img: "/img/logitech.jpg",
  },
  {
    title: "HyperX Alloy Origins 60",
    price: "6499",
    img: "/img/HXAO60.webp",
  },
];

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
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              img={obj.img}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
