import React, { useState } from 'react';

const Bt1 = () => {
  // Tạo state với giá trị khởi tạo là tên của bạn
  const [name, setName] = useState("Nguyễn Văn A");

  return (
    <div>
      {/* Hiển thị tên từ state ra ngoài giao diện */}
      <h1>Họ và tên {name}</h1>
    </div>
  );
}

export default Bt1;
