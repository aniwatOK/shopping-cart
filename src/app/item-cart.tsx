import { Grid, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

interface ItemCartProps {
  itemname: string;
  itemPrice: number;
  image: string;
  handleIncremantal: (itemPrice: number) => void;
  handleDecremental: (itemPrice: number) => void;
}

const ItemCart: React.FC<ItemCartProps> = ({ itemname, itemPrice, image, handleIncremantal, handleDecremental }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    handleIncremantal(itemPrice);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handleDecremental(itemPrice);
    }
  };

  return (
    <Grid container spacing={1} alignItems="center" sx={{ border: '1px solid #ccc', borderRadius: 1, p: 1, mb: 1 }}>
      <Grid item xs={3}>
        <img src={image} alt={itemname} style={{ width: '80%', borderRadius: 4 }} />
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={0.5}>
          <Typography variant="body1" fontSize="0.9rem">{itemname}</Typography>
          <Typography variant="body2" color="text.secondary">
            {itemPrice.toLocaleString()} THB
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction="row" spacing={0.5} justifyContent="flex-end" alignItems="center">
          <IconButton size="small" color="secondary" onClick={decrementQuantity} disabled={quantity === 0}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2">{quantity}</Typography>
          <IconButton size="small" color="primary" onClick={incrementQuantity}>
            <AddIcon fontSize="small" />
          </IconButton>
          {/* แสดงราคารวมของสินค้าที่กด */}
          <Typography variant="body2" sx={{ ml: 1 }}>
            {(quantity * itemPrice).toLocaleString()} THB
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ItemCart;
