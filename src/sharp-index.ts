import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import sharp from "sharp";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  
  const file = path.join(__dirname, "/../assets/pdfs/ant-design-logo.pdf");
  // const file = path.join(__dirname, "/../assets/pdfs/pdf24_images_merged.pdf");
  // const file = path.join(__dirname, "/../assets/pdfs/kme_m4_RE.pdf");
  // const file = path.join(__dirname, "/../assets/pdfs/sample-hotel-inthai.pdf");
  const store = path.join(__dirname, "/../assets/save");
  // const file = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf'; // this url works
  // sharp(file)
  // .resize(320, 240)
  // .toFile(`${store}/output.webp`, (err, info) => { 
  //   console.log("err -> ",err);
  //   console.log("info -> ", info);
  //  });

   sharp('../assets/pdfs/kme_m4_RE.pdf')
  .rotate()
  .resize(500)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then( data => { console.log("data : ", data);
   })
  .catch( err => { console.log("err : ", err);
   });
  
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});