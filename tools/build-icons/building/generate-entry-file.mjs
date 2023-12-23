import camelCase from "camelcase";
import { basename } from "node:path";
import { writeFileSync } from "node:fs";
import { readSvgDirectory } from "../../../scripts/helpers.mjs";

const generateEntryFile = ({
  iconsOutputDirectory,
  filenameExtention,
  entryWithFilenameExtention = false
}) => {
  const svgs = readSvgDirectory();
  const entryCode = svgs
    .map((svg) => {
      const fileName = basename(svg, ".svg");
      const componentName = camelCase(fileName, { pascalCase: true });
      return `export { default as ${componentName}} from "./${
        fileName + (entryWithFilenameExtention ? "." + filenameExtention : "")
      }";`;
    })
    .join("\n");

  writeFileSync(`${iconsOutputDirectory}/index.ts`, entryCode, "utf-8");
};

export default generateEntryFile;
