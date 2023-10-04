import React, { useState } from "react";

export default function SectionTest() {
  const [test, setTest] = useState(false);
  const testHere = (e) => {
    e.preventDefault();
    console.log("section Test -- " + test);
    setTest((prev) => !prev);
  };
  return (
    <div className="section-test">
      <div className="section-test__content">
        <div className={`section-test__content--${test}`}>
          <h1>s</h1>
        </div>
        <button onClick={testHere}>Test</button>
      </div>
    </div>
  );
}
