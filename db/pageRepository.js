const { Page } = require("./models/page.model");

const pageRepository = {
  async getAllPages() {
    const pages = await Page.find();
    return pages.map((p) => {
      return {
        _id: p._id,
        subject: p.subject,
        slug: p.slug,
        subtitle: p.subtitle,
      };
    });
  },

  async getPageById(id) {
    return await Page.findById(id);
  },

  async createNewPage(newPage) {
    console.log(newPage);

    const page = await Page.create(newPage);

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
