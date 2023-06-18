import dts from "rollup-plugin-dts";

const currentDate = new Date(),
    options = { year: "numeric", month: "long", day: "numeric" },
    formattedDate = currentDate.toLocaleDateString("en-US", options),
    banner = `/**
 * **Dynamic Colors** from KPVERSE
 *
 * Updated on ${formattedDate}.
 *
 * Copyright © 2023-present, Kartavya Patel. All rights reserved.
 *
 * @author Kartavya Patel <patelka2211@gmail.com>
 *
 * @license {@link https://github.com/patelka2211/dynamic-colors/blob/main/LICENSE MIT}
 */`;

export default [
    process.env.type === "esm" && {
        input: "./lib/index.js",
        output: {
            file: "index.js",
            format: "es",
        },
    },
    process.env.type === "esm" && {
        input: "./src/index.ts",
        output: {
            file: "index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
    process.env.type === "iife" && {
        input: "./index.js",
        output: {
            file: "./DynamicColors.js",
            format: "iife",
            name: "DynamicColors",
            banner: banner,
        },
    },
].filter(Boolean);
