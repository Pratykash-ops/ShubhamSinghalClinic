import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), "public", "assets", "studies");
  try {
    const files = fs.readdirSync(directoryPath);
    // Filter to only include image files
    const imageFiles = files.filter(file => /\.(png|jpe?g|svg|webp|gif)$/i.test(file));
    res.status(200).json({ logos: imageFiles });
  } catch (error) {
    res.status(500).json({ error: "Unable to scan directory" });
  }
}
