const fs = require('fs');
fs.writeFileSync('dist/index.d.ts', fs.readFileSync('packages/index.d.ts'));
