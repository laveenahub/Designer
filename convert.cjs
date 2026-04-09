const fs = require('fs');
const { execSync } = require('child_process');

// Recover the CSS content from the previous commit
const cssContent = execSync('git show HEAD~1:src/CraftConnectCaseStudy.css').toString();

const jsxPath = 'src/CraftConnectCaseStudy.jsx';
let jsxContent = fs.readFileSync(jsxPath, 'utf8');

// Remove the relative import
jsxContent = jsxContent.replace(/import \'\.\/CraftConnectCaseStudy\.css\';\n?/g, '');

// Prepare the embedded style string properly escaping backticks
const escapedCss = cssContent.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const styleBlock = `      <style dangerouslySetInnerHTML={{ __html: \`\n${escapedCss}\n\` }} />\n`;

// Insert the `<style>` block
jsxContent = jsxContent.replace('<div className="craft-connect-page">', '<div className="craft-connect-page">\n' + styleBlock);

fs.writeFileSync(jsxPath, jsxContent);
console.log("Successfully bundled CSS into JS.");
