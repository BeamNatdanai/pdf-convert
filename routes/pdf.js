const express = require("express");
const path = require("path");
const router = express.Router();
const pdf = require("pdf-poppler");
fs = require("fs");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ title: "Test Pdf" });
});

router.get("/convert", function (req, res, next) {
  // const file = path.join(__dirname, '/../public/pdf/kme_m4_RE.pdf');
  const file = path.join(__dirname, "/../public/pdf/kme_m4_RE.pdf");
  console.log("file -> ", file);
  // fs.readFile(file , function (err,data){
  //     console.log("data -> ", data);
  //     console.log("err -> ", err);
  // });

  // pdf.info(file)
  // .then(pdfinfo => {
  //     console.log("pdfinfo: ",pdfinfo);
  // });
  
  try {
    let opts = {
      format: "jpeg",
      out_dir: path.dirname(file),
      out_prefix: path.baseName(file, path.extname(file)),
      page: null,
    };

    pdf
      .convert(file, opts)
      .then((res) => {
        console.log("Successfully converted");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log("error -> ", error);
  }
});

module.exports = router;
