// Downloads the Figma icons/decorations into public/assets.
// Usage (any OS, Node 18+):  node download-assets.mjs
// The Figma URLs are temporary (~7 days). If they expire, ask Claude to fetch the design again.
import { mkdir, writeFile } from 'node:fs/promises'

const BASE = 'https://www.figma.com/api/mcp/asset/88e01637-da41-4a97-9dd6-4e60fc26324b'
const FILES = [
  ['sparkle.svg', '2cb06.svg'],
  ['p1.svg', '27160.svg'],
  ['p2.svg', '45aa5.svg'],
  ['p3.svg', '80fbc.svg'],
  ['p4.svg', '4eeb5.svg'],
  ['p5.svg', 'cac90.svg'],
  ['p6.svg', '95afe.svg'],
  ['check.svg', '79e4d.svg'],
  ['tick-a.svg', 'cabb4.svg'],
  ['tick-b.svg', '94b16.svg'],
  ['quote.svg', '3ef78.svg'],
  ['arrow-a.svg', 'edec4.svg'],
  ['arrow-b.svg', 'e0f53.svg'],
  ['more.svg', '8a6b5.svg'],
  ['linkedin.svg', '9df28.svg'],
  ['instagram.svg', '2e277.svg'],
  ['x.svg', '01e5a.svg'],
  ['whatsapp.svg', '4d87a.svg'],
  ['deco-a.svg', 'b8c8a.svg'],
  ['deco-b.svg', '268d7.svg'],
  ['deco-c.svg', '8107b.svg'],
  ['deco-d.svg', 'a3f87.svg'],
]

await mkdir('public/assets', { recursive: true })
let ok = 0
for (const [name, remote] of FILES) {
  try {
    const res = await fetch(`${BASE}/${remote}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await writeFile(`public/assets/${name}`, Buffer.from(await res.arrayBuffer()))
    ok++
    console.log('ok  ', name)
  } catch (e) {
    console.log('FAIL', name, '-', e.message)
  }
}
console.log(`\nDone: ${ok}/${FILES.length} files`)
