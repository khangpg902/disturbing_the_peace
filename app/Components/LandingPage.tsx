import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Grid, Paper, Container } from '@mui/material';
// LandingPage Component
import ImageSlideshow from './ImageSlideshow';
import BrandPersonality from './BrandPersonality'
import MostSoldProducts from './MostProduct';
const LandingPage = () => {
  return (
    <div>
        <ImageSlideshow></ImageSlideshow>
       <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#fff9f2'}}>
        <Container maxWidth="lg" sx={{marginTop: '10vh', marginBottom:'10vh'}}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={8}>
                    <Box
                    sx={{
                        height: '400px', // Set a fixed height for the image box
                        backgroundImage: 'url(https://scontent.xx.fbcdn.net/v/t1.15752-9/462569989_624225406739485_4490923617637851566_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=H6Ipabud3kQQ7kNvgG5zYx-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QF-3bJMNvbUP71BkWY5lSrQJcFjgv8Gxebe7lvCnjF7-w&oe=678680A3)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 2,
                    }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Yippy yippy yippy
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 2, color: '#666' }}>
                        làm gốm hay j đó
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="#learn-more"
                        sx={{
                        marginTop: 3,
                        padding: '12px 24px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        }}
                    >
                        Tìm hiểu thêm
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
     
      <BrandPersonality></BrandPersonality>
      <MostSoldProducts></MostSoldProducts>
    </div>
  );
};

export default LandingPage;
