"use client"; // to specifi component to be on client side
import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Avatar, Menu, MenuItem } from "@mui/material";
import { FaBell, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [productsAnchorEl, setProductsAnchorEl] = useState(null); // [object, state of that object]
  const [signalsAnchorEl, setSignalsAnchorEl] = useState(null);
  const [copyTradeAnchorEl, setCopyTradeAnchorEl] = useState(null); // using state has to client // seting value on DOM

  const handleProductsEnter = (event) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleProductsLeave = () => {
    setProductsAnchorEl(null);
  };

  const handleSignalsEnter = (event) => {
    setSignalsAnchorEl(event.currentTarget);
  };

  const handleSignalsLeave = () => {
    setSignalsAnchorEl(null);
  };

  const handleCopyTradeEnter = (event) => {
    setCopyTradeAnchorEl(event.currentTarget);
  };

  const handleCopyTradeLeave = () => {
    setCopyTradeAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src="/logo.png" alt="Logo" sx={{ mr: 2, width: 40, height: 40 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mr: 4 }}>
            CompendiumFi
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Products Menu */}
          <Box onMouseEnter={handleProductsEnter} onMouseLeave={handleProductsLeave}>
            <Button
              color="inherit"
              aria-controls="products-menu"
              aria-haspopup="true"
              endIcon={<FaChevronDown />}
              sx={{ textTransform: "none", fontWeight: "medium" }}
            >
              Tools
            </Button>
            <Menu
              id="products-menu"
              anchorEl={productsAnchorEl}
              open={Boolean(productsAnchorEl)}
              onClose={handleProductsLeave}
              MenuListProps={{ onMouseLeave: handleProductsLeave }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                  },
                },
              }}
            >
              <MenuItem onClick={() => router.push("/menu-item-1")}>Menu Item 1</MenuItem>
              <MenuItem onClick={() => router.push("/menu-item-2")}>Menu Item 2</MenuItem>
              <MenuItem onClick={() => router.push("/menu-item-3")}>Menu Item 3</MenuItem>
            </Menu>
          </Box>
          {/* Signal Provider Menu */}
          <Box onMouseEnter={handleSignalsEnter} onMouseLeave={handleSignalsLeave}>
            <Button
              color="inherit"
              aria-controls="signals-menu"
              aria-haspopup="true"
              endIcon={<FaChevronDown />}
              sx={{ textTransform: "none", fontWeight: "medium" }}
            >
              Signal Provider
            </Button>
            <Menu
              id="signals-menu"
              anchorEl={signalsAnchorEl}
              open={Boolean(signalsAnchorEl)}
              onClose={handleSignalsLeave}
              MenuListProps={{ onMouseLeave: handleSignalsLeave }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                  },
                },
              }}
            >
              <MenuItem onClick={() => router.push("/signals")}>Dashboard</MenuItem>
              <MenuItem onClick={() => router.push("/signals/item-2")}>Generator</MenuItem>
              <MenuItem onClick={() => router.push("/signals/item-3")}>Invites</MenuItem>
            </Menu>
          </Box>
          <Button
            color="inherit"
            onClick={() => router.push("/trade")}
            sx={{ textTransform: "none", fontWeight: "medium" }}
          >
            Trade
          </Button>
          <Button color="inherit" sx={{ textTransform: "none", fontWeight: "medium" }}>
            Bot Marketplace
          </Button>
          {/* Copy Trade Menu */}
          <Box onMouseEnter={handleCopyTradeEnter} onMouseLeave={handleCopyTradeLeave}>
            <Button
              color="inherit"
              aria-controls="copytrade-menu"
              aria-haspopup="true"
              endIcon={<FaChevronDown />}
              sx={{ textTransform: "none", fontWeight: "medium" }}
            >
              Copy Trade
            </Button>
            <Menu
              id="copytrade-menu"
              anchorEl={copyTradeAnchorEl}
              open={Boolean(copyTradeAnchorEl)}
              onClose={handleCopyTradeLeave}
              MenuListProps={{ onMouseLeave: handleCopyTradeLeave }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                  },
                },
              }}
            >
              <MenuItem onClick={() => router.push("/copytrade")}>Copy Trade Dashboard</MenuItem>
              <MenuItem onClick={() => router.push("/copytrade/item-2")}>Copy Trade Item 2</MenuItem>
              <MenuItem onClick={() => router.push("/copytrade/item-3")}>Copy Trade Item 3</MenuItem>
            </Menu>
          </Box>
          <Button
            color="inherit"
            onClick={() => router.push("/referral")}
            sx={{ textTransform: "none", fontWeight: "medium" }}
          >
            Referral
          </Button>
          <Button
            color="inherit"
            onClick={() => router.push("/pendax-api")}
            sx={{ textTransform: "none", fontWeight: "medium" }}
          >
            PENDAX API
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "https://docs.compendium.finance/")}
            sx={{ textTransform: "none", fontWeight: "medium" }}
          >
            Documentation
          </Button>
          <IconButton color="inherit">
            <FaBell />
          </IconButton>
          {/* <UserDropdown /> */}
          <IconButton color="inherit">
            <FaSignOutAlt />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
