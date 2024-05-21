import React, { useState } from 'react';

const Toggle = () => {
  // Tạo state để lưu trữ trạng thái ẩn/hiện của tiêu đề
  const [isHidden, setIsHidden] = useState(false);

  // Hàm để thay đổi trạng thái ẩn/hiện của tiêu đề
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {/* Tiêu đề sẽ được hiển thị hoặc ẩn tùy thuộc vào giá trị của state isHidden */}
      {!isHidden && <h1>Tiêu đề</h1>}
      
      {/* Nút để thay đổi trạng thái ẩn/hiện của tiêu đề */}
      <button onClick={toggleVisibility}>Ẩn/Hiện tiêu đề</button>
    </div>
  );
}

export default Toggle;
