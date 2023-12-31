import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { Home } from "./pages/Home";
import { ListCategory } from "./pages/Category/ListCategory";
import { EditCategory } from "./pages/Category/EditCategory";
import { NewCategory } from "./pages/Category/NewCategory";
import { Provider } from "./provider/Provider";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import { PrivateLayout } from "./components/PrivateLayout";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/category" element={<ListCategory />} />
            <Route path="/category/new" element={<NewCategory />} />
            <Route path="/category/edit/:id" element={<EditCategory />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" index element={<ErrorPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
