import React, { useState } from 'react';

const Bt2 = () => {
  // Tạo state với giá trị khởi tạo là một đối tượng product
  const [product, setProduct] = useState({
    id: 1,
    name: "Sản phẩm mẫu",
    price: 100,
    quantity: 5
  });

  return (
    <div>
      {/* Hiển thị tên sản phẩm từ state ra ngoài giao diện */}
      <h1>Tên sản phẩm: {product.name}</h1>
    </div>
  );
}

export default Bt2;
