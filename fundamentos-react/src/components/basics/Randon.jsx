import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  const { min, max } = props;
  const nrandon = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Number randon</h2>
      <p>
        <strong> min value: </strong> {min}
      </p>
      <p>
        <strong> max value: </strong> {max}
      </p>
      <p>
        <strong> value selected : </strong> {nrandon}
      </p>
    </div>
  );
};
