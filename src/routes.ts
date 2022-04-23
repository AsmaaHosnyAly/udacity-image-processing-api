import express from "express";
import { resizeImage, readThumbnailFullPaths } from "./controller";
import { validateParams } from "./middleware";

const router = express();

// router.get("/api/images", validateParams, resizeImage);
router.get("/api/images/resize", validateParams, resizeImage);
router.get("/api/thumbnails", readThumbnailFullPaths);

export default router;
