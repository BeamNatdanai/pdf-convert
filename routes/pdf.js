const express = require("express");
const path = require("path");
const router = express.Router();
// const pdf = require("pdf-poppler");
const PDF = require("sharp-pdf");


fs = require("fs");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ title: "Test Pdf" });
});

router.get("/pdf-sharp-convert", async (req, res, next) => {
  try {
    const file = path.join(__dirname, "/../assets/pdf/kme_m4_RE.pdf");
    const savePath = path.join(__dirname, "/../assets/save");

    PDF.sharpsFromPdf(file).then((images) => {
      console.log("images -> ",images);
      // images.forEach(({ image, name, channels }) => {
      //   console.log("name -> ",name);
      //   const ext = channels > 3 ? ".png" : ".jpg";
      //   image.toFile(`./${name}${ext}`);
      // });
    });
    // fs.readFile(file , function (err,data){
    //     console.log("data -> ", data);
    //     console.log("err -> ", err);
    // });
    res.json({ title: 'pdf convert' });
  } catch (error) {
    console.log("error -> ", error);
  }
});

router.get("/pdf-poppler-convert", async (req, res, next) => {
  try {
    const file = path.join(__dirname, "/../assets/pdf/kme_m4_RE.pdf");
    const savePath = path.join(__dirname, "/../assets/save");
    pdf.info(file).then((pdfinfo) => {
      console.log(pdfinfo);
    });
    // fs.readFile(file , function (err,data){
    //     console.log("data -> ", data);
    //     console.log("err -> ", err);
    // });
  } catch (error) {
    console.log("error -> ", error);
  }
});

module.exports = router;
