const path=require('path')
const mergePdfs = async (fileArr, fileName) => {
  const PDFMerger = (await import('pdf-merger-js')).default;
  const merger = new PDFMerger();
  
  for(let i=0;i<fileArr.length;i++)
    await merger.add(path.join(__dirname, fileArr[i].path))

  // Example usage of other methods (commented out)
  // await merger.add('pdf1.pdf');  //merge all pages
  // await merger.add('pdf2.pdf', 2); // merge only page 2
  // await merger.add('pdf2.pdf', [1, 3]); // merge pages 1 and 3
  // await merger.add('pdf2.pdf', '4, 7, 8'); // merge pages 4, 7, and 8
  // await merger.add('pdf3.pdf', '3 to 5'); // merge pages 3 to 5 (3,4,5)
  // await merger.add('pdf3.pdf', '3-5'); // merge pages 3 to 5 (3,4,5)
  
  // let d=new Date().getTime()
  await merger.save(`public/${fileName}.pdf`); // save the merged PDF
  // return d
  return fileName
  // Export the merged PDF as a Node.js Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeFileSync('merged.pdf', mergedPdfBuffer);
};

module.exports = { mergePdfs };












// const mergePdfs = async (p1, p2, fileName) => {
//   const PDFMerger = (await import('pdf-merger-js')).default;
//   const merger = new PDFMerger();

//   await merger.add(p1);
//   await merger.add(p2);

//   // Example usage of other methods (commented out)
//   // await merger.add('pdf1.pdf');  //merge all pages
//   // await merger.add('pdf2.pdf', 2); // merge only page 2
//   // await merger.add('pdf2.pdf', [1, 3]); // merge pages 1 and 3
//   // await merger.add('pdf2.pdf', '4, 7, 8'); // merge pages 4, 7, and 8
//   // await merger.add('pdf3.pdf', '3 to 5'); // merge pages 3 to 5 (3,4,5)
//   // await merger.add('pdf3.pdf', '3-5'); // merge pages 3 to 5 (3,4,5)
  
//   // let d=new Date().getTime()
//   await merger.save(`public/${fileName}.pdf`); // save the merged PDF
//   // return d
//   return fileName
//   // Export the merged PDF as a Node.js Buffer
//   // const mergedPdfBuffer = await merger.saveAsBuffer();
//   // fs.writeFileSync('merged.pdf', mergedPdfBuffer);
// };

// module.exports = { mergePdfs };

