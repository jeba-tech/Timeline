
import React from 'react';
import { Paper, Typography, Avatar, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


const getRandomColor = () => {
  const letters = 'CDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const Post = ({ post, user }) => {
  const randomColor = getRandomColor();

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '16px', borderRadius: '10px', backgroundColor: randomColor }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar style={{ backgroundColor: '#3f51b5' }}>
          <AccountCircle />
        </Avatar>
        <Box ml={2}>
          <Typography variant="subtitle1" color="textPrimary" style={{ fontWeight: 'bold' }}>
            {user ? user.name : 'Unknown User'}
          </Typography>
         
        </Box>
      </Box>
      <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
        {post.title}
      </Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Paper>
  );
};

export default Post;
