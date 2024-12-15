import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button, Container } from '@mui/material';

const MostSoldProducts = () => {
  // Sample product data
  const products = [
    { id: 1, title: 'Product 1', image: 'https://via.placeholder.com/300x200?text=Product+1', description: 'Description of product 1' },
    { id: 2, title: 'Product 2', image: 'https://via.placeholder.com/300x200?text=Product+2', description: 'Description of product 2' },
    { id: 3, title: 'Product 3', image: 'https://via.placeholder.com/300x200?text=Product+3', description: 'Description of product 3' },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left side: Small text */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
              Sản phẩm
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                Bán chạy
            </Typography>

          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4} justifyContent="center">
            {products.map((product) => (
                <Grid item xs={12} sm={4} key={product.id}>
                <Card sx={{backgroundColor:'transparent', display: 'flex', 
                    flexDirection: 'column', alignItems: 'start', justifyItems:'start',
                    boxShadow:'none', height:'50vh'}}>
                    <CardMedia
                    component="img"
                    height="100%"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover', height:'100%', overflow:'auto' }}
                    />
                    <Typography variant="h6" sx={{ mt: 0, fontWeight: 'bold', color: '#333' }}>
                    {product.title}
                    </Typography>
                </Card>
                </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MostSoldProducts;
