import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Timeline from './components/Timeline';
import { Container, CircularProgress, Typography } from '@mui/material';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostsAndUsers = async () => {
      try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    getPostsAndUsers();
  }, []);

  if (loading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom style={{ margin: '20px 0', color: '#3f51b5' }}>
        Forum Timeline
      </Typography>
      <Timeline posts={posts} users={users} />
    </Container>
  );
};

export default App;
