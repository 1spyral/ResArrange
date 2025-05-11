import { build } from "esbuild"

await build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    platform: "node",
    outfile: "./dist/index.js",
    target: ["node22"],
    external: [
        "path",
        "express",
        "fs",
        "fs/promises",
        "http",
        "https",
        "stream",
        "stream/promises",
        "zlib",
        "url",
        "mariadb",
        "better-sqlite3",
        "libsql",
        "tedious",
        "mysql",
        "mysql2",
        "oracledb",
        "pg-query-stream",
        "sqlite3"
    ],
    format: "esm"
})
