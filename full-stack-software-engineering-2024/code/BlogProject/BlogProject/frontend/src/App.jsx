import React, { useEffect } from "react";
import Applayout from "./Layouts/Applayout";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/Home";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import ProfilePage from "./Pages/Profile";
import PostPage from "./Pages/Post";
import Bookmark from "./Pages/Bookmark";
import Search from "./Pages/Search";
import Posts from "./Pages/Posts";
import Missing from "./Pages/Missing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cookies from "js-cookie";
import RequireAuth from "./Components/RequireAuth";
import useGlobalContext from "./Context/useGlobalContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Applayout />}>
      {/* public routes */}
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/post" element={<Posts />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/posts/:postId" element={<PostPage />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/search" element={<Search />} />
        </Route>
      </Route>

      {/* catch all page */}
      <Route path="*" element={<Missing />} />
    </Route>
  )
);

function App() {
  const { setAuthToken, setIsAuth, isAuth, setAuth } = useGlobalContext();

  useEffect(() => {
    const savedToken = Cookies.get("auth_token");
    const savedUser = localStorage.getItem("auth_user");
    setAuthToken(savedToken);
    setAuth(JSON.parse(savedUser));
    setIsAuth(true);
    console.log("hello user");
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
