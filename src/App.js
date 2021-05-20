import "./App.css";
import "antd/dist/antd.css";
import CoinsBought from "./Components/CoinsBought";
import Trades from "./Components/Trades";

function App() {
  return (
    <div>
      <CoinsBought />
      <Trades />
    </div>
  );
}

export default App;
