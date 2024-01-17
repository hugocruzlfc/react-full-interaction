import { Route, Routes } from "react-router-dom";
import {
  Admin,
  Editor,
  Home,
  Layout,
  LinkPage,
  Login,
  Lounge,
  Missing,
  Register,
  RequireAuth,
  Unauthorized,
} from "./components";
import { Roles } from "./types";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {/* public routes */}
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="register"
          element={<Register />}
        />
        <Route
          path="linkpage"
          element={<LinkPage />}
        />
        <Route
          path="unauthorized"
          element={<Unauthorized />}
        />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[Roles.USER]} />}>
          <Route
            path="/"
            element={<Home />}
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[Roles.EDITOR]} />}>
          <Route
            path="editor"
            element={<Editor />}
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[Roles.ADMIN]} />}>
          <Route
            path="admin"
            element={<Admin />}
          />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[Roles.EDITOR, Roles.ADMIN]} />}
        >
          <Route
            path="lounge"
            element={<Lounge />}
          />
        </Route>

        {/* catch all */}
        <Route
          path="*"
          element={<Missing />}
        />
      </Route>
    </Routes>
  );
}

export default App;
