import React from 'react';
import Post from './Post';
import { Timeline as MuiTimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const Timeline = ({ posts, users }) => {
  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  const getUserById = (id) => {
    return users.find(user => user.id === id);
  };

  return (
    <MuiTimeline position="alternate" style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
      {sortedPosts.map(post => {
        const user = getUserById(post.userId);
        return (
          <TimelineItem key={post.id}>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: '#3f51b5' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Post post={post} user={user} />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;
