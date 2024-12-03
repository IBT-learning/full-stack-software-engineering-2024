import React from "react";
// import "./BlogCard.css";

const BlogCard = ({ image, title, summary, authorImg, authorName, date }) => (
    <div className="post">
        <div className="post-img">
            <img src={image} alt={title} />
        </div>
        <p className="blog-title">{title}</p>
        <p className="blog-summary">{summary}</p>
        <div className="blog-profile">
            <div className="blog-author">
                <div className="author-pic">
                    <img src={authorImg} alt={authorName} />
                </div>
                <p>{authorName}</p>
            </div>
            <p>{date}</p>
        </div>
    </div>
);

export default BlogCard;
