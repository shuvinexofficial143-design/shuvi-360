import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
const read=p=>readFileSync(new URL("../"+p,import.meta.url),"utf8");
test("nine unique service slugs",()=>{const slugs=[...read("src/lib/services.ts").matchAll(/slug:"([^"]+)"/g)].map(m=>m[1]);assert.equal(slugs.length,9);assert.equal(new Set(slugs).size,9)});
test("no example credentials",()=>{for(const line of read(".env.example").split("\n"))if(line.includes("=")&&!line.startsWith("#"))assert.equal(line.split("=")[1],"")});
test("foundation routes exist",()=>{for(const path of ["src/app/page.tsx","src/app/about/page.tsx","src/app/api/health/route.ts","src/app/layout.tsx"])assert.ok(existsSync(new URL("../"+path,import.meta.url)))});
test("development preview excludes indexing",()=>assert.match(read("src/app/layout.tsx"),/index: false/));
