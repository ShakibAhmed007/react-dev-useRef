import React, { useEffect, useRef } from 'react';

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // component did load
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter something" />
      <br/>
      <input type="text" placeholder="enter something 1" />
      <br/>
      <input type="text" placeholder="enter something 2" />
    </div>
  );
};

export default Form;
