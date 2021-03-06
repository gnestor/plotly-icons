import React from 'react';
const PlotOhlcIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M6.688 2.688h2.625v26.625h-2.625zM9.313 14.688h5.375v2.625h-5.375zM1.313 22.688h5.375v2.625h-5.375zM21.313 2.688h2.688v26.625h-2.688zM16 6.688h5.313v2.625h-5.313zM24 17.313h5.313v2.688h-5.313z" />
    </svg>
  );
};
export default PlotOhlcIcon;
