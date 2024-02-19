import Layout from "./Layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./Context/AppContext";
import AddPlace from "./pages/AddPlace";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import MyPlaces from "./pages/MyPlaces";
import EditPlace from "./pages/EditPlace";
=======
>>>>>>> parent of 059dbd0 (get hotels)
=======
>>>>>>> parent of 059dbd0 (get hotels)
=======
>>>>>>> parent of 059dbd0 (get hotels)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> parent of 059dbd0 (get hotels)
=======
>>>>>>> parent of 059dbd0 (get hotels)
=======
>>>>>>> parent of 059dbd0 (get hotels)
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
