const path = require("path");
const sharp = require("sharp");

const source = process.argv[2];
if (!source) {
  console.error("Usage: node scripts/convert-favicon.cjs <source-path>");
  process.exit(1);
}

const sizes = [32, 64, 96, 180, 192, 512];
const outputDir = path.join(process.cwd(), "public");

const run = async () => {
  await Promise.all(
    sizes.map((size) =>
      sharp(source)
        .resize(size, size, { fit: "cover", position: "centre" })
        .webp({ quality: 92 })
        .toFile(path.join(outputDir, `favicon-${size}.webp`))
    )
  );
  console.log("Favicons generated.");
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
