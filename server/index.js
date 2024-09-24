const words = ["Hey", "ther", "dafd", "vdfsrvrs"];
let output = words.join("\n");
fs.writeFile("words.txt", output, writeComplete);

function writeComplete() {
  console.log("Write Complete!");
}
