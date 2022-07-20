const FileModel = require("../model/file");
const FileDTO = require("../dtos/fileDTO");
const { verifyBody } = require("../utils/verifyBody");

class FileController {
  async getFile(data) {
    if (!verifyBody(data, ["fileId", "userId"])) return null;
    try {
      let file;
      file = await FileModel.findOne({ fileId: data?.fileId });
      if (!file) {
        file = await FileModel.create(data);
      }
      return new FileDTO(file);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async update(data) {
    if(!data)return null
    if (!verifyBody(data, ["fileId", "data"])) return null;
    try {
      return await FileModel.updateOne(
        { fileId: data?.fileId },
        { data: data?.data }
      );
    } catch (error) {}
  }
}

module.exports = new FileController();
