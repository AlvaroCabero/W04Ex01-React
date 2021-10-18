import { useState } from "react";

const Circle = ({ status }) => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <>
      <div
        className={`circle${selected ? " on" : ""}`}
        status={status}
        onClick={toggleSelected}
      ></div>
    </>
  );
};
export default Circle;
