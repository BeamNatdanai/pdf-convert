import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
// import pdf from "pdf-poppler";
import pdf from 'pdf-poppler';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {

  // const file = path.join(__dirname, "/../assets/pdfs/ant-design-logo.pdf");
  // const file = path.join(__dirname, "/../assets/pdfs/pdf24_images_merged.pdf");
  // const file = path.join(__dirname, "/../assets/pdfs/kme_m4_RE.pdf");
  const file = path.join(__dirname, "/../assets/pdfs/sample-hotel-inthai.pdf");
  const store = path.join(__dirname, "/../assets/save");

  // res.send("Express + TypeScript Server");


  // let file = 'C:\\tmp\\convertme.pdf'

  let opts = {
    format: 'jpeg',
    out_dir: path.dirname(file),
    out_prefix: path.basename(file, path.extname(file)),
    page: null
  }

  pdf.convert(file, opts)
    .then(
      res.send("success")
    )
    .catch(
      console.error("error")
    )
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});