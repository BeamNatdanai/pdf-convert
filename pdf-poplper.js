const pdf = require('pdf-poppler');
const path = require('path');

console.time("end process");

const file = "./assets/pdfs/kme_m4_RE.pdf"

let opts = {
    format: 'jpg',
    scale: 1600,
    out_dir: path.dirname(file),
    out_prefix: path.basename(file, path.extname(file)),
    page: null
}

pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
        console.timeEnd("end process");
    })
    .catch(error => {
        console.error(error);
    })

