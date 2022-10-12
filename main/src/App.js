function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img
            className="logo"
            width={40}
            height={40}
            src="/img/HDLOGO.jpg"
            alt="LOL"
          />
          <div className="headerInfo">
            <h3>React Headphones</h3>
            <p>Магазин лучшие наушников</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img
              className="basket"
              src="/img/baskete2.png"
              alt="basket_logo"
              width={48}
              height={50}
            />
            <span className="totalPrice">1202 руб.</span>
          </li>
          <li>
            <img
              className="user"
              src="/img/user.png"
              alt="user_logo"
              width={47}
              height={47}
            />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все Наушники</h1>
        <div className="sneakers">
          <div className="card">
            <img
              src="/img/headphones1.webp"
              alt="Hyperx"
              width={133}
              height={123}
            />
            <h5>Hyperx cloud II Wirelles</h5>
            <div className="cardBottom">
              <div className="cost">
                <span>Цена:</span>
                <br></br>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={21} height={21} src="/img/add.png" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/HXAO60.webp" alt="Hyperx" width={133} height={123} />
            <h5>Hyperx cloud II Wirelles</h5>
            <div className="cardBottom">
              <div className="cost">
                <span>Цена:</span>
                <br></br>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={21} height={21} src="/img/add.png" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/logitech.jpg"
              alt="Hyperx"
              width={133}
              height={123}
            />
            <h5>Hyperx cloud II Wirelles</h5>
            <div className="cardBottom">
              <div className="cost">
                <span>Цена:</span>
                <br></br>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={21} height={21} src="/img/add.png" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/monitor.webp"
              alt="Hyperx"
              width={133}
              height={123}
            />
            <h5>Hyperx cloud II Wirelles</h5>
            <div className="cardBottom">
              <div className="cost">
                <span>Цена:</span>
                <br></br>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={21} height={21} src="/img/add.png" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
