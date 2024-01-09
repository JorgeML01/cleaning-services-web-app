import * as React from "react";

function CheckCircle(...props) {
  return (
    <svg
      width="38px"
      height="38px"
      viewBox="0 0 64 70"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx={32} cy={32} r={30} fill="#06B2B4" />
      <path fill="#184474" d="M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z" />
    </svg>
  );
}

export default CheckCircle;
