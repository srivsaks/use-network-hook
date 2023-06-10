import "./styles.css";
import useNetwork from "./useNetwork";

export default function App() {
  const network = useNetwork();
  // console.log(network);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <>{network.online}</>
    </div>
  );
}
