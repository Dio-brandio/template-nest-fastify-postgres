import { build } from 'esbuild';
const { nodeExternalsPlugin } = require('esbuild-node-externals');


build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  outfile: 'dist2/main.js',
  plugins: [nodeExternalsPlugin()],
  sourcemap: true,
  external: ['node_modules','@nestjs/microservices', '@nestjs/websockets', 'fastify-swagger'], // add more if needed
  tsconfig: 'tsconfig.json',
  minify: true,
  define:{ "process.env.NODE_ENV": "\"prod\"" }
}).catch(() => process.exit(1));
