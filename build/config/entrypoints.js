const path = require('path');

const entryPoints = {
    app: path.resolve('./src/app/main.ts'),
    maintwo: path.resolve('./src/main-2.js')
}

exports.default = entryPoints;