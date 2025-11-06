import fs from "fs";

// File read karne ke liye stream
const readStream = fs.createReadStream("example.txt");

// Data chunks ke liye event
readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.toString());
});

// File end hone par
readStream.on("end", () => {
  console.log("Finished reading file");
});
