import "./App.css";
import { Button } from "./components/ui/button";
import { useStore } from "../store/store";

function App() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div className="container mx-auto mt-10 border border-gray-200 rounded-md shadow-md w-[400px]">
      <div className="container mx-auto p-4 space-y-5">
        <h1 className="text-4xl text-center">Counter</h1>
        <div className="flex justify-center space-x-4">
          <Button
            className="border border-green-500 hover:bg-green-500"
            onClick={increment}
          >
            Click me
          </Button>
          <Button
            className="border border-red-500 hover:bg-red-500"
            onClick={decrement}
          >
            Click me
          </Button>
        </div>
        <div className="text-center text-3xl">{count}</div>
      </div>
    </div>
  );
}

export default App;
