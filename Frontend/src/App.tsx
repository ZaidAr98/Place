import Layout from "./Layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./Context/AppContext";
import AddPlace from "./pages/AddPlace";
import Detail from "./pages/Detail";
import MyPlaces from "./pages/MyPlaces";
import EditPlace from "./pages/EditPlace";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
function App() {
  const {isLoggedIn} = useAppContext()
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
             <Home/>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
        <Route
          path="/detail/:placeId"
          element={
            <Layout>
              <Detail />
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

            <Route
              path="/my-places"
              element={
                <Layout>
                  <MyPlaces />
                </Layout>
              }
            />
            <Route
              path="/edit-place/:placeId"
              element={
                <Layout>
                  <EditPlace />
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
