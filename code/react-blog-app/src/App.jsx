import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import UserProfile from "./components/UserProfile";
import "./App.css";

const App = () => {
  const posts = [
    {
      image: "/assets/bussines.webp",
      title: "It Depends - The Business Side of Script Formatting",
      summary: "Learn the intricacies of script formatting in the business world.",
      authorImg: "/assets/auser-1.jpg",
      authorName: "Danny",
      date: "Jun 25, 2024",
    },
    {
      image: "/assets/lonely.webp",
      title: "The Empire of Scripts: A Historical Perspective",
      summary: "An exploration of scripts' impact on cultural evolution.",
      authorImg: "/assets/auser-2.jpg",
      authorName: "Samira",
      date: "Jul 10, 2024",
    },
    {
      image: "/assets/poem.webp",
      title: "Code Your Dreams: Programming for Beginners",
      summary: "Discover the world of programming with tips for beginners.",
      authorImg: "/assets/auser-3.jpg",
      authorName: "Alex",
      date: "Aug 15, 2024",
    },
    {
      image: "/assets/script.webp",
      title: "Design Thinking: Innovation in Action",
      summary: "How design thinking transforms ideas into practical solutions.",
      authorImg: "/assets/auser-4.jpg",
      authorName: "Taylor",
      date: "Sep 5, 2024",
    },
    {
      image: "/assets/library.webp",
      title: "The Art of Storytelling: Writing Compelling Scripts",
      summary: "Master the art of storytelling to captivate any audience.",
      authorImg: "/assets/auser-5.jpg",
      authorName: "Jordan",
      date: "Oct 20, 2024",
    },
    {
      image: "/assets/poem.webp",
      title: "Creative Scripts: Finding Your Unique Voice",
      summary: "Express your unique voice through creative scriptwriting.",
      authorImg: "/assets/auser-6.jpg",
      authorName: "Riley",
      date: "Nov 2, 2024",
    },
    {
      image: "/assets/poem.webp",
      title: "Technology in Scriptwriting: Tools and Techniques",
      summary: "Enhance your scripts using the latest technologies.",
      authorImg: "/assets/user-3.jpg",
      authorName: "Morgan",
      date: "Dec 1, 2024",
    },
    {
      image: "/assets/lonely.webp",
      title: "Stay Motivated: Tips for Aspiring Writers",
      summary: "Learn how to stay inspired and motivated in your writing journey.",
      authorImg: "/assets/auser-1.jpg",
      authorName: "Pat",
      date: "Dec 15, 2024",
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="blog mx-10">
              {posts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          }
        />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
