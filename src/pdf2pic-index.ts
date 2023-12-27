import express, { Express, Request, Response } from "express"
import path from "path"
import dotenv from "dotenv"
import { fromPath } from "pdf2pic";

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {

  const file = path.join(__dirname, "/../assets/pdfs/kme_m4_RE.pdf")
  // console.log(path.dirname(file))
  // console.log(path.basename(file, path.extname(file)))

  const options = {
    // density: 100,
    saveFilename: path.basename(file, path.extname(file)),
    // saveFilename: 'kme_m4_RE',
    savePath: path.dirname(file),
    // savePath: '../assets/pdfs',
    format: "png",
    // width: 600,
    height: 2048
  };

  const convert = fromPath(file, options);
  // const convert = fromPath('../assets/pdfs/kme_m4_RE.pdf', options);
  const pageToConvertAsImage = 1;

  // try {
  // const resolve = await convert(pageToConvertAsImage, { responseType: "image" })
  await convert(pageToConvertAsImage, { responseType: "image" })
    .then(resolve => {
      console.log(resolve);
    })
  res.send("success")
  // } catch (error) {
  //   res.send(error)
  // }

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
});