const { Page } = require("./models/page.model");

const pageRepository = {
  async getAllPages() {
    return await Page.find();
  },

  async getPageById(id) {
    return await Page.findById(id);
  },

  async createNewPage(newPage) {
    console.log(newPage);
    /*     const page = new Page({
      ...newPage,
    });
 */
    const page = await Page.create(newPage);

    //console.log("before save");
    /*     await page.save();
    console.log("page saved"); */

    return page;
  },

  async createElement(pageId, newElement) {
    const updated = await elements.findOneAndUpdate(
      { pageId },
      { $push: { element: newElement } },
      { upsert: true, new: true }
    );

    return updated;
  },

  async updatePage(id, page) {
    const updatedPage = await Page.findByIdAndUpdate(id, page);
  },

  async deletePage(id) {
    return await Page.findByIdAndDelete(id);
  },
};

module.exports = pageRepository;
