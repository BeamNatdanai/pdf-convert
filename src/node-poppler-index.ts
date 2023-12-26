import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import path from "path"
import { Poppler } from 'node-poppler'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {


  const file = path.join(__dirname, "/../assets/pdfs/kme_m4_RE.pdf")
  const outputFile = path.dirname(file) + '/' + path.basename(file, path.extname(file))

  const poppler = new Poppler()

  // try {

  const resp = await poppler.pdfToCairo(file, outputFile, {
    // antialias: 'default',
    firstPageToConvert: 1,
    // lastPageToConvert: 5,
    scalePageTo: 4096,
    // pngFile: true,
    jpegFile: true
  })

  console.log(resp)

  res.send("success")

  // } catch (error) {
  //   res.send(error)
  // }

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
});