import fs from "fs";

export const fileExisits = async (filePath: string): Promise<boolean> => {
  const response = await fs.existsSync(filePath);
  return response;
};
