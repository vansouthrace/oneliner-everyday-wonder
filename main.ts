import fs from 'node:fs';
import path from 'node:path';
const entry = 'The lift doors opened on a stranger humming my grandmother\'s song, and for three floors the whole building felt like it was keeping a secret with me.';
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry, 'utf8');
