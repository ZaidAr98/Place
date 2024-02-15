import Layout from "./Layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>HomePage</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>SearchPage</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
