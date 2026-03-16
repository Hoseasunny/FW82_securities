export const buildImageSet = (label, prompt, fileBase = "") => {
  if (fileBase) {
    return {
      src: `/images/${fileBase}-1200.webp`,
      srcSet: [
        `/images/${fileBase}-400.webp 400w`,
        `/images/${fileBase}-800.webp 800w`,
        `/images/${fileBase}-1200.webp 1200w`
      ].join(", "),
      prompt
    };
  }

  return {
    src: "",
    srcSet: "",
    prompt
  };
};
