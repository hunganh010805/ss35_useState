import React, { useState } from 'react';

const ChangeColor = () => {
  // Tạo state để lưu trữ trạng thái màu chữ
  const [textColor, setTextColor] = useState('black');

  // Hàm để thay đổi màu chữ khi nhấn nút
  const changeColor = () => {
    // Nếu màu chữ hiện tại là 'black', thì đổi sang 'red', ngược lại thì đổi về 'black'
    const newColor = textColor === 'black' ? 'red' : 'black';
    setTextColor(newColor);
  };

  return (
    <div>
      {/* Văn bản với màu chữ được xác định bởi state textColor */}
      <p style={{ color: textColor }}>Nội dung văn bản có màu chữ {textColor}</p>
      
      {/* Nút để thay đổi màu chữ */}
      <button onClick={changeColor}>Thay đổi màu chữ</button>
    </div>
  );
}

export default ChangeColor;
