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
import Class from "./pages/class/Class";
import AddClassForm from "./pages/addClass.js/AddClassForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Statistics />} />
      <Route path="addClass" element={<AddClassForm />} />
      <Route path=":type">
        <Route index element={<CategoryStatistics />} />
        <Route path=":level">
          <Route index element={<Classes />} />
          <Route path=":clas" element={<Class />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
