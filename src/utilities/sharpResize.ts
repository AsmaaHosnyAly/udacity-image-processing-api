import sharp, { Sharp } from "sharp";

export const sharpResize = async (
  f: string | null,
  h: number | null,
  w: number | null
): Promise<Sharp> => {
  const buffer = `assets/images/${f}.jpg`;
  const image = await sharp(buffer);
  const resizedimage = await image.resize(w, h);
  return resizedimage;
};

export default sharpResize;
