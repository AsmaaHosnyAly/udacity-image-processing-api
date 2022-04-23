import fs from "fs";
import path from "path";
import { Response, Request } from "express";

import { sharpResize, fileExisits } from "../utilities";

const resizeImage = async (req: Request, res: Response): Promise<void> => {
  const { filename, height, width,imgformat } = req.query;

  const h: number | null = height ? parseInt(height as string, 10) : null;
  const w: number | null = width ? parseInt(width as string, 10) : null;
  const f: string = filename as unknown as string;
  const format:string|null=imgformat  as unknown as string;

  try {
    const imageFormats=["jpg","jpeg","png"];
    // for(let imgFormat of imageFormats){
    //   if()
    // }
    const imagePath = `${f}_${w}x_${h}.jpg`;
    const resizePath = `./resizedImages/${f}_${w}x_${h}.jpg`;
    const imagePathExists = await fileExisits(path.join("resizedImages", imagePath));

    // send cached file
    if (imagePathExists) {
      res.sendFile(`/${imagePath}`, { root: path.join("./resizedImages") });
    } else {
      const response = await sharpResize(f, h, w);
      response.toFile(resizePath, (error: Error) => {
        if (error) {
          res.status(403).send({
            message: error.message,
          });
        } else {
          res.sendFile(`/${imagePath}`, { root: path.join("./resizedImages") });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const readThumbnailFullPaths = (req: Request, res: Response): void => {
  const folder = "resizedImages";
  const data = fs.readdirSync(folder);
  const thumbnails = data.map((ele) => {
    return `http://localhost:3005/${ele}`;
  });
  res.status(200).send({
    thumbnails,
  });
};

export default resizeImage;
