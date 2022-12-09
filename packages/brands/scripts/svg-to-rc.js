const svgr = require('@svgr/core');

const fs = require('fs');
const path = require('path');


const projectRoot = path.resolve('./');
const libProjectRoot = path.join(projectRoot, 'packages', 'brands');
const svgsDir = path.join(libProjectRoot, 'src', 'svgs');
const componentsDir = path.join(libProjectRoot, 'src', 'components');


const svgFiles = fs.readdirSync(svgsDir);


const generateReactSvgComponent = (svgFileName) => {
  const componentName = path.basename(svgFileName, '.svg');
  const svgFilePath = path.join(svgsDir, svgFileName);
  const outputReactComponentFilePath = path.join(componentsDir, componentName + '.tsx');

  console.log('generating react component for file:', svgFileName);

  const svgCode = fs.readFileSync(svgFilePath);
  const tsCode = svgr.transform.sync(svgCode, {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      typescript: true
    },
    { componentName });

  fs.writeFileSync(outputReactComponentFilePath, tsCode, {
    encoding: 'utf-8'
  });
};

const generateComponentExportsLine = (componentName) =>
  `export { default as ${componentName} } from './components/${componentName}'\n`;

// create `src/index.tsx` content exports `src/components`
const generateIndexFile = () => {
  console.log('generating index file');
  let indexFileContent = '';
  const indexFilePath = path.join(libProjectRoot, 'src', 'index.ts');
  svgFiles.map((svgFileName) => {
    const componentName = path.basename(svgFileName, '.svg');
    const exportLine = generateComponentExportsLine(componentName);
    indexFileContent += exportLine;
  });

  fs.writeFileSync(indexFilePath, indexFileContent, {
    encoding: 'utf-8'
  });
};


svgFiles.map(generateReactSvgComponent);
generateIndexFile();
