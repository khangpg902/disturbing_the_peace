import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
const BrandPersonality = () => {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          backgroundImage: 'url(https://quantra.vn/wp-content/uploads/2023/08/gom-su-bach-hoa-kutani.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7 )',
          }}
        />
  
        <Container
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
            Triết lý - THƯƠNG HIỆU
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
          Lành chữa lành những món đồ gốm bị vỡ theo phong cách nghệ thuật Kintsugi.
            Không che giấu đi vết nứt, nhưng tạo điểm nhấn thêm cho món đồ gốm. 
            Tôn vinh lê vẻ đẹp không hoàn hảo.
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
            Tìm hiểu thêm
          </Button>
        </Container>
      </Box>
    );
  };
  export default BrandPersonality;
