"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);

  const handleIncremental = (itemPrice: number) => {
    setTotal(prevTotal => prevTotal + itemPrice);
  };

  const handleDecremental = (itemPrice: number) => {
    setTotal(prevTotal => Math.max(prevTotal - itemPrice, 0));
  };

  const myItems = [
    { itemname: "iPhone 15", price: 32900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone15-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169045" },
    { itemname: "iPhone 15 Pro", price: 41900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150" },
    { itemname: "iPhone 15 Pro Max", price: 48900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone15promax-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1710800172673" },
    { itemname: "iPad Pro", price: 29900, image: "https://media-cdn.bnn.in.th/246815/iPad_Pro_Cellular_12-9_in_6th_Gen_Silver_5G_2-square_medium.jpg" },
    { itemname: "iPad Air", price: 19900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-11inch-purple-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5UjdnTllvQSs2VjJMMEVKeU1kRXJYZVZwT1FGTU1ZNXpqbVgxMkFYMDRBZUxVaWNUd29RdG8vSlIySW9adFNvamYxcjBVRyswWG14bEI4WVZBcUIybEZUbXZDUEFNMHJ3VmVDQ1EwZDdqWXR3PT0=&traceId=1" },
    { itemname: "iPad", price: 14900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-pink-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=OVJOVlhQelp3cUxDNnpBK0hFNFYrQUxaUVVtOUhUT0c2NzZRUllPeEJTeUI4d29DQnBYMTJ6bGFLQXl4VjVYYmJWU3RPOURZS0RCaG1weXBRYytNTENhUThSUC84VzArL0cyckNrL25wa0VEaXdsQXhSUVJEK2lURHg1RU5ZZUNvSmRod0k3RElNU3NpNVhFUHFEalpRPT0=&traceId=1" },
    { itemname: "iPad mini", price: 17900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti3ilTDKaxf1jwkpPvjZpD0o18tKPqKb2wA&s" },
    { itemname: "MacBook Air", price: 37900, image: "https://www.istudio.store/cdn/shop/files/macbook-air-m1-space-gray-001.jpg?v=1706069830" },
    { itemname: "MacBook Pro", price: 42900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200" },
    { itemname: "iMac", price: 39900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618" },
    { itemname: "Mac mini", price: 24900, image: "https://original.co.th/wp-content/uploads/2021/01/macmini-m1.jpg" },
    { itemname: "Mac Studio", price: 49900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143" }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      {myItems &&
        myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            image={item.image}
            handleIncremantal={() => handleIncremental(item.price)}
            handleDecremental={() => handleDecremental(item.price)}
          />
        ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{total.toLocaleString()} THB</Typography>
      </Stack>
    </div>
  );
}
