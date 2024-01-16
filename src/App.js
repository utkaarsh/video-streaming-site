import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter } from "react-router-dom";
import Watchpage from "./components/Watchpage";
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  return (
    <div>
      <Head />
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "results",
        element: <SearchResultContainer />,
      },
    ],
  },
]);
export default App;
