import React, { cloneElement } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      {React.Children.map(props.children, (props.children, (el) =>{
        // eslint-disable-next-line no-undef
        return cloneElement(child, props)
      }))}
    </div>
  );
};
