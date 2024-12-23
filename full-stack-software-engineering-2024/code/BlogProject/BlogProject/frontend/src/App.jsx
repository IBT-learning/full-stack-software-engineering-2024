import React, { useEffect } from "react";
import Applayout from "./AppLayouts/Applayout";
import HomePage from "./AppPages/HomePage";
import RegisterPage from "./AppPages/RegisterPage";
import LoginPage from "./AppPages/LoginPage";
import ProfilePage from "./AppPages/ProfilePage";
import PostPage from "./AppPages/PostPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cookies from "js-cookie";
import RequireAuth from "./AppComponents/RequireAuth";
import useGlobalContext from "./Context/useGlobalContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Applayout />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route path="/post/:postId" element={<PostPage />} />
      </Route>
    </Route>
  )
);

function App() {
  const { setAuthToken, setIsAuth, isAuth } = useGlobalContext();

  useEffect(() => {
    const saved = Cookies.get("auth_token");
    setAuthToken(saved);
    setIsAuth(true);
  }, [isAuth]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
