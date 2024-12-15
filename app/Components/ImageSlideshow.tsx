import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const ImageSlideshow = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '80vh', // You can adjust the height here
        backgroundImage: 'url(https://file.hstatic.net/200000296482/article/6-lang-gom-nhat-co-xua-cover_13a0064a2737494cab566a02206bd1dc_1024x1024.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay on the image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)', // Dark overlay
        }}
      />

      {/* Content on top of the image */}
      {/* <Container
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Explore our products and services with amazing visuals.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="#learn-more"
          sx={{
            padding: '12px 24px',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          Learn More
        </Button> */}
      {/* </Container> */}
    </Box>
  );
};


export default ImageSlideshow;

