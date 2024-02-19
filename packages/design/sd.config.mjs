import StyleDictionaryModule from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

const StyleDictionary = StyleDictionaryModule.extend(
    makeSdTailwindConfig({
        type: "all",
        buildPath: "./",
        source: ["./tokens/**/*.json"],
        tailwind: { content: ["./src/**/*.{vue,js,ts,jsx,tsx}"] },
        formatType: "cjs",
    })
);

StyleDictionary.buildAllPlatforms();
