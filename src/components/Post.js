import React from 'react';
import styles from '../styles/posts.scss';

// icon image is found under reddit.com/:subreddit/about.json

export const Post = () => {
  return (
      <div className="post-container">
        <div className="subreddit-author-container">
            <div className="subreddit-thumbnail">
                <img src="https://b.thumbs.redditmedia.com/lh3XYdayDnfF474A_Ro9fBWUViOibSr4BoTpx0ETyvg.png" />
            </div>
            <div className="subreddit-author">
                <p>r/nba</p>
                <p>al3xanderr</p>
            </div>
        </div>
        <div className="title-container">
            <div className="title">
                <h3>In the US, states typically pay for prison while counties determine sentencing. A natural experiment whereby the cost burden of juvenile incarceration was placed on counties led to a stark drop in incarceration. This suggests that mass incarceration in the US is in part due to misaligned incentives.</h3>
            </div>
        </div>
        <div className="votes-container">

        </div>
      </div>
  )
};