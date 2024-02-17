import Layout from "./Layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./Context/AppContext";
import AddPlace from "./pages/AddPlace";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
function App() {
  const {isLoggedIn} = useAppContext()
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
        {isLoggedIn && (
          <>
            <Route
              path="/add-place"
              element={
                <Layout>
                  <AddPlace />
                </Layout>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
