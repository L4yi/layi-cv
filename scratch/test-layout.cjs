const fs = require('fs');
let code = fs.readFileSync('scripts/generate-resume.cjs', 'utf8');

// Insert log at drawSectionHeader
code = code.replace(/function drawSectionHeader\(title\) \{/g, `function drawSectionHeader(title) {
  console.log('>>> Section:', title, 'Page:', doc.internal.getCurrentPageInfo().pageNumber, 'y:', y);`);

// Insert log at checkPageBreak
code = code.replace(/doc\.addPage\(\);/g, `doc.addPage();
  console.log('*** PAGE BREAK! New Page:', doc.internal.getCurrentPageInfo().pageNumber);`);

// Insert log at experience items
code = code.replace(/experiences\.forEach\(exp => \{/g, `experiences.forEach(exp => {
  console.log('  Job:', exp.company, 'Page:', doc.internal.getCurrentPageInfo().pageNumber, 'y:', y);`);

eval(code);
