"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CenterFocusStrong } from '@mui/icons-material';
import { maxHeaderSize } from 'http';
import { maxWidth } from '@mui/system';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff9f2', boxShadow: 2, borderBottom:'#243a69 solid thick' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', gap: 2, justifyContent:'space-between', width:'100%' }}>
            <Button color="inherit" sx={{ color: '#333' }}>Sản phẩm</Button>
            <Button color="inherit" sx={{ color: '#333' }}>Dịch vụ</Button>
            <Button color="inherit" sx={{ color: '#333' }}>Workshop</Button>
            <Button color="inherit" sx={{ color: '#333' }}>Về Lành</Button>
            <Typography  sx={{ color: '#333' }}>
                <img
                  src="../logo.png"
                />
            </Typography>
            <Button color="inherit" sx={{ color: '#333' }}>Đăng nhập</Button>
            <Button color="inherit" sx={{ color: '#333' }}>Liên hệ</Button>
            <Button color="inherit" sx={{ color: '#333' }}>Giỏ hàng</Button>
            <Button color="inherit" sx={{ color: '#333' }}>
            <img
                  src="https://img.pikbest.com/element_our/20230223/bg/0a41b1c83a9f2.png!sw800"
                  style={{maxWidth:'30px'}}
                />
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
  );
}
export default ResponsiveAppBar;

