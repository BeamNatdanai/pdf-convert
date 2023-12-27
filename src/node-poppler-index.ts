import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import path from "path"
import { Poppler } from 'node-poppler'
var multer = require('multer')

dotenv.config()

const app: Express = express()

// app.use(multer())

const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {


  // const file = path.join(__dirname, "/../assets/pdfs/kme_m4_RE.pdf")
  const file = path.join(__dirname, "/../assets/pdfs/sangkom-p3-re.pdf")
  // const outputFile = path.dirname(file) + '/' + path.basename(file, path.extname(file)) + '-node-poppler'
  const outputFile = path.dirname(file) + '/' + path.basename(file, path.extname(file)) + '-node-poppler-optimize'

  const poppler = new Poppler()

  // try {

  const resp = await poppler.pdfToCairo(file, outputFile, {
    // antialias: 'default',
    firstPageToConvert: 162,
    lastPageToConvert: 162,
    scalePageTo: 3508,
    // pngFile: true,
    jpegFile: true,
    // jpegOptions: "quality=25,optimize=y,progressive=y"
  })

  console.log(resp)

  res.send("success")

  // } catch (error) {
  //   res.send(error)
  // }

});

const upload = multer({
  limits: {
    fileSize: 100000
  }
})

app.post("/", upload.single('pdfFile'), async (req: Request, res: Response) => {
  // console.log(req)
  res.send(req.file)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
});