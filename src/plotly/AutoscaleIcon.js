import React from 'react';
const AutoscaleIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" className={classes}>
      <path d="M 4,0L 1,0 L 0,0 l0,1 l0,3 l 1,0 l0-3 l 3,0 L 4,0z M 15,0l-3,0 l0,1 l 3,0 l0,3 l 1,0 l0-3 l0-1 L 15,0 z M 1,15l0-3 L 0,12 l0,3 l0,1 l 1,0 l 3,0 l0-1 L 1,15 z M 15,12l0,3 l-3,0 l0,1 l 3,0 l 1,0 l0-1 l0-3 L 15,12 z M 13,9l-0.008-0.003L 11.5,10.5l-2.5-2.5l 2.5-2.5l 1.471,1.5L 13,7 l0-4 l-4,0 l0,0.030 l 1.5,1.47l-2.5,2.5l-2.5-2.5l 1.5-1.47l0-0.030 L 3,3 l0,4 l0,0l 1.5-1.5l 2.5,2.5l-2.5,2.5L 3,9l0,0l0,4 l 4,0 l0,0l-1.5-1.5l 2.5-2.5l 2.5,2.5l-1.5,1.5l0,0l 4,0 L 13,9 z" />
    </svg>
  );
};
export default AutoscaleIcon;
