import React from 'react';

const Input = (props, ref) => {
  const { type, placeholder } = props;
  return <input ref={ref} type={type} placeholder={placeholder} />;
};
const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
