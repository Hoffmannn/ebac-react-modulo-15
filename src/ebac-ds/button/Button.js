import React from "react";
import "./Button.css";

function Button({ onClick, mh, mv, ml, mr, mt, mb, p, ...props }) {
  const mhorizontal = mh ? `mh${mh}` : "";
  const mvertical = mv ? `mv${mv}` : "";
  const mleft = ml ? `ml${ml}` : "";
  const mright = mr ? `mr${mr}` : "";
  const mtop = mt ? `mt${mt}` : "";
  const mbottom = mb ? `mb${mb}` : "";

  const padding = p ? `pa${p}` : "pa2";

  return (
    <button
      onClick={onClick}
      className={`bg-lightest-blue button ${mhorizontal} ${mvertical} ${mleft} ${mright} ${mtop} ${mbottom} ${padding}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
