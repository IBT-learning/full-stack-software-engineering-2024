import React from "react";
import BlogCard from "./BlogCard";
//import "./UserProfile.css";

const UserProfile = () => {
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
          image: "/assets/couple.webp",
          title: "The Empire of Scripts: A Historical Perspective",
          summary: "An exploration of scripts' impact on cultural evolution.",
          authorImg: "/assets/user-2.avif",
          authorName: "Samira",
          date: "Jul 10, 2024",
        },
        {
          image: "/assets/lonely.webp",
          title: "Code Your Dreams: Programming for Beginners",
          summary: "Discover the world of programming with tips for beginners.",
          authorImg: "/assets/user-3.jpg",
          authorName: "Alex",
          date: "Aug 15, 2024",
        },
        {
          image: "/assets/poem.webp",
          title: "Design Thinking: Innovation in Action",
          summary: "How design thinking transforms ideas into practical solutions.",
          authorImg: "/assets/user-2.avif",
          authorName: "Taylor",
          date: "Sep 5, 2024",
        },
        {
          image: "/assets/library.webp",
          title: "The Art of Storytelling: Writing Compelling Scripts",
          summary: "Master the art of storytelling to captivate any audience.",
          authorImg: "/assets/auser-1.jpg",
          authorName: "Jordan",
          date: "Oct 20, 2024",
        },
        {
          image: "/assets/banner.webp",
          title: "Creative Scripts: Finding Your Unique Voice",
          summary: "Express your unique voice through creative scriptwriting.",
          authorImg: "/assets/user-3.jpg",
          authorName: "Riley",
          date: "Nov 2, 2024",
        },
        {
          image: "/assets/script.webp",
          title: "Technology in Scriptwriting: Tools and Techniques",
          summary: "Enhance your scripts using the latest technologies.",
          authorImg: "/assets/auser-1.jpg",
          authorName: "Morgan",
          date: "Dec 1, 2024",
        },
        {
          image: "/assets/banner.webp",
          title: "Stay Motivated: Tips for Aspiring Writers",
          summary: "Learn how to stay inspired and motivated in your writing journey.",
          authorImg: "/assets/user-3.jpg",
          authorName: "Pat",
          date: "Dec 15, 2024",
        },
      ];
      
  return (
    <div>
      <div className="user-profile">
        <div className="user-img">
          <img src="/assets/user-3.jpg" alt="Nanny Ray" />
        </div>
        <div className="user-bio">
          <p>Name: Nanny Ray</p>
          <p>Email: Nanny@gmail.com</p>
          <p>Bio: Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </div>
      <h2 className="recent-header">Nanny's recent post</h2>
      <div className="blog mx-10">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
