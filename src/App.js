import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Statistics from './pages/statistics/Statistics'
import Classes from "./pages/classes/Classes";
import CategoryStatistics from "./pages/categoryStatistics/CategoryStatistics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Statistics />} />
      <Route path=":type">
        <Route index element={<CategoryStatistics />} />
        <Route path=":level" element={<Classes />}>
        {/* <Route path=":class" element={<Classes />}/> */}
      </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
