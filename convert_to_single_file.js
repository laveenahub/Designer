const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/CraftConnectCaseStudy.jsx');
const cssPath = path.join(__dirname, 'src/CraftConnectCaseStudy.css');

const cssContent = fs.readFileSync(cssPath, 'utf8');
let jsxContent = fs.readFileSync(jsxPath, 'utf8');

// Remove the CSS import
jsxContent = jsxContent.replace("import './CraftConnectCaseStudy.css';\n", "");

// Insert the <style> block right after <div className="craft-connect-page">
const styleBlock = `      <style dangerouslySetInnerHTML={{ __html: \`\n${cssContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\n\` }} />\n`;
jsxContent = jsxContent.replace('<div className="craft-connect-page">', '<div className="craft-connect-page">\n' + styleBlock);

fs.writeFileSync(jsxPath, jsxContent);
// Remove the CSS file
fs.unlinkSync(cssPath);
console.log("Successfully combined everything into CraftConnectCaseStudy.jsx!");
