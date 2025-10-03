import React from "react";

const Input = (props) => {
  const { myValue, setMyValue } = props;
  const handleValueFunc = (e) => {
    setMyValue(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleValueFunc} value={myValue} />
    </div>
  );
};

export default Input;
