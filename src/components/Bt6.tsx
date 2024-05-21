import React, { useState } from 'react';

const Count = () => {
  // Tạo state để lưu trữ số đếm
  const [count, setCount] = useState(0);

  // Hàm tăng số đếm lên 1
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Hàm giảm số đếm đi 1
  const decrementCount = () => {
    setCount(count - 1);
  };

  // Hàm đặt lại số đếm về 0
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Đếm số: {count}</h1>
      <button onClick={incrementCount}>Tăng</button>
      <button onClick={decrementCount}>Giảm</button>
      <button onClick={resetCount}>Đặt lại</button>
    </div>
  );
}

export default Count;
