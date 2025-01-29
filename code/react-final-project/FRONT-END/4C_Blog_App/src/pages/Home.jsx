import { useState, useEffect, useContext } from "react"
import { UserContext } from "../Context"

function Home() {
  const { token } = useContext(UserContext)
  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    // because this endpoint requires user authentication
    // we must include the token under the "authorization" header
    // we'll only even attempt to hit this enpoint if there's a token
    if (token) {
      fetch("http://localhost:4000/4C/posts/recent", {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((allRecentPosts) => setRecentPosts(allRecentPosts))
        .catch((err) => console.error(err))
    }
  }, [token])

  return (
    <>
      <div className="bio">
        <h4 className="about-title">Welcome to 4C</h4>
        <p className="about">
          4C is inspired by my love for natural hair and the journey it
          represents. Over time, I grew averse to braiding—mainly because of the
          constant pulling and my dislike of people touching my head. So, in
          2019, I decided to embark on my natural hair journey. At the time, my
          hair was unhealthy, dry, and prone to breakage. Fast forward to today,
          my hair has transformed—it's longer, healthier, and fuller. My crown
          is flourishing, though I am still working towards my hair goals. It's
          been an amazing journey of growth, mistakes, and learning, with plenty
          of fun along the way.
        </p>
        <p className="about">
          I must say, maintaining natural hair is not for the faint-hearted!
          It's a commitment that requires love, patience, and an appreciation
          for the unique beauty of your own hair. Do it because you enjoy
          nurturing your natural hair and celebrating its beauty—not to follow
          someone else's path. Otherwise... you just might give up!
        </p>
        <h5 className="tag">At 4C, we are: Natural Sisters...</h5>
        <p className="tag">Are you a 4C natural hair girlie?</p>
        <p className="tag">Welcome to my space, created just for you...</p>
        <h5 className="tag">Where your crown will reach its full potential!</h5>
        <p className="about">
          4C hair is beautifully unique and comes with its own set of
          complexities. Understanding its depth is the first step toward helping
          it thrive. At 4C, we believe Black girlies deserve to rock their
          crowns with confidence—that is the heart of why 4C exists.
        </p>
        <p className="about">
          Whether you're here to learn how to help your crown flourish or to be
          part of this empowering community celebrating Black girl magic, you're
          in the right place. Sit tight, because so many goodies are coming your
          way!
        </p>
      </div>
      <div>
        <h3 className="recent-posts-title">RECENT POSTS</h3>
        <div className="recent-posts">
          {recentPosts.map((post) => (
            <>
              <h4 className="recent-post-title">{post.posttitle}</h4>
              <p>{post.postbody}</p>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

//  TODO: find the key for each div key={recentPosts.map((post) => post.postbody)}
