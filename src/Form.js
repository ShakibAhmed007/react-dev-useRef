import React, { useEffect, useRef } from 'react';
import Input from './Input';

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // component did load
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter something" />
      <br />
      <input type="text" placeholder="enter something 1" />
      <br />
      <p> Reusable input with forward ref, just pass ref=ref</p>
      <Input type="text" placeholder="enter something 3" />
    </div>
  );
};

export default Form;
