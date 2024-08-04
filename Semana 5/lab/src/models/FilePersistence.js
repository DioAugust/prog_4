const fs = require("fs");
const Persistence = require("./Persistence");

class FilePersistence extends Persistence {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  save(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  load() {
    if (fs.existsSync(this.filePath)) {
      const rawData = fs.readFileSync(this.filePath);
      return JSON.parse(rawData);
    }
    return [];
  }
}

module.exports = FilePersistence;
