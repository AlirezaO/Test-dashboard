"use client";
import { Fragment, useState } from "react";

export default function SimpleButton({ text }) {
  const [clickCounter, setClickCounter] = useState(0);

  const onClick = () => {
    switch (text) {
      case "Add":
        setClickCounter(prev => prev + 1);
        break;
      case "Reset":
        console.log("HERE!")
        setClickCounter(0);
        break;
      default:
        console.log("Clicked: ", text);
        break;
    }
  };
console.log("COUNT: ", clickCounter)
  return (
    <Fragment>
      <button onClick={onClick} className="submit-button-class">
        {text}
      </button>
      {clickCounter > 0 && <p className=" text-sm text-gray-600">Clicked {clickCounter} Times!</p>}
      </Fragment>
  );
}
