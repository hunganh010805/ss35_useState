import React, { useState } from 'react';

const Form = () => {
  // Tạo state để lưu trữ giá trị từ người dùng nhập vào input
  const [inputValue, setInputValue] = useState('');

  // Hàm xử lý sự kiện khi giá trị của input thay đổi
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Input để người dùng nhập giá trị */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Nhập giá trị"
      />
      <p>Bạn đã nhập: {inputValue}</p>
    </div>
  );
}

export default Form;
