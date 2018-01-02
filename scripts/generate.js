//https://github.com/levrik/mdi-react/blob/master/scripts/generate.js
const fs = require('fs');
const pathRegex = /\sd="(.*)"/;

const svgFiles = fs.readdirSync(`${__dirname}/../src/svg`);
for (let svgFile of svgFiles) {
  const name = svgFile
    .split(/-/g)
    .map(part => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('')
    .slice(0, -4);

  const content = fs.readFileSync(`${__dirname}/../src/svg/${svgFile}`);
  const pathMatches = pathRegex.exec(content);
  const path = pathMatches && pathMatches[1];
  // Skip on empty path
  if (!path) continue;

  const fileContent = `import React from 'react';
const ${name}Icon = ({ width = 24, height = 24, viewBox = '0 0 24 24', className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += \` \${className}\`;
  return (
    <svg {...props} width={width} height={height} viewBox={viewBox} className={classes}>
      <path d="${path}" />
    </svg>
  );
};
export default ${name}Icon;
`;

  fs.writeFileSync(`${__dirname}/../src/plotly/${name}Icon.js`, fileContent);
}