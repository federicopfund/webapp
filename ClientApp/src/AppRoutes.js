import { About } from "./components/About";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Service } from "./components/Service";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/service',
    element: <Service />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
