import React from 'react';

export const Input = (props) => {

  return (
    <input
      type={props.type}
      className={props.className}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
    />
  );

};
