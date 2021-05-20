import "./App.css";
import "antd/dist/antd.css";
import CoinsBought from "./components/CoinsBought";
import Trades from "./components/Trades";

function App() {
  return (
    <div>
      <CoinsBought />
      <Trades />
    </div>
  );
}

export default App;
