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
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import Missing from "./Pages/Missing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cookies from "js-cookie";
import RequireAuth from "./Components/Auth/RequireAuth.jsx";
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
          <Route path="/profile/:userid" element={<ProfilePage />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/createpost" element={<CreatePost />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/post/edit/:postId" element={<EditPost />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/post/delete/:postID" element={<HomePage />} />
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
  const { setAuthToken, setAuth } = useGlobalContext();

  useEffect(() => {
    const savedToken = Cookies.get("auth_token", {
      sameSite: "None",
      secure: true,
      expires: 2,
    });
    const savedUser = localStorage.getItem("auth_user");
    setAuthToken(savedToken);
    setAuth(JSON.parse(savedUser));
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
