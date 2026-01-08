const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/vets") {
    // return all vets from the database
    const allVets = require("./data/vets.json");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(allVets));
  } else if (req.method == "GET" && req.url == "/pets") {
    // return all pets from the database
    const allPets = require("./data/pets.json");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(allPets));
  } else if (req.method == "GET" && req.url == "/species") {
    // return all species from the database
    const allSpecies = require("./data/species.json");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(allSpecies));
  } else {
    // res.write()
    res.statusCode = 400;
    res.end("Invalid request");
  }
});

server.listen(8000, () => {
  console.log(`Server is running on port 8000...`);
});
