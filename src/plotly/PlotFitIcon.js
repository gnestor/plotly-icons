import React from 'react';
const PlotFitIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M1.313 19.313c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.438-1.188-2.625-2.688-2.625s-2.688 1.188-2.688 2.625zM9.313 8c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM25.313 12.688c0 1.438 1.188 2.625 2.688 2.625s2.688-1.188 2.688-2.625c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM17.313 24c0 1.5 1.188 2.688 2.688 2.688s2.688-1.188 2.688-2.688c0-1.5-1.188-2.688-2.688-2.688s-2.688 1.188-2.688 2.688zM32 22.688l-32-9.375v-4l32 9.375z" />
    </svg>
  );
};
export default PlotFitIcon;
