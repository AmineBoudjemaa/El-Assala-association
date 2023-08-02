import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Statistics from './pages/statistics/Statistics'
import Class from "./pages/studentTable/Class";
import CategoryStatistics from "./pages/categoryStatistics/CategoryStatistics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Statistics />} />
      <Route path=":type">
        <Route index element={<CategoryStatistics />} />
        <Route path=":level" element={<Class />}/>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
