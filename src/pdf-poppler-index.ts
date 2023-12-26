import express, { Express, Request, Response } from "express"
import path from "path"
import dotenv from "dotenv"
// import pdf from 'pdf-poppler'
const pdf = require('pdf-poppler')


dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {

  const file = path.join(__dirname, "/../assets/pdfs/kme_m4_RE.pdf")

  const opts = {
    format: 'jpg',
    scale: 1600,
    out_dir: path.dirname(file),
    out_prefix: path.basename(file, path.extname(file)),
    page: null
  }

  try {
    await pdf.convert(file, opts)
    res.send("success")
  } catch (error) {
    res.send(error)
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
});