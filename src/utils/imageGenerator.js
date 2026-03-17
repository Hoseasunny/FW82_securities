export const buildImageSet = (label, prompt, fileBase = "", sizes = [400, 800, 1200]) => {
  if (fileBase) {
    const base = `/images/${fileBase}`;
    const lastSize = sizes[sizes.length - 1];
    return {
      src: `${base}-${lastSize}.webp`,
      srcSet: sizes.map((size) => `${base}-${size}.webp ${size}w`).join(", "),
      prompt
    };
  }

  return {
    src: "",
    srcSet: "",
    prompt
  };
};
