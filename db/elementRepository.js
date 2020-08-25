const { Page } = require("./models/page.model");

const elementRepository = {
  async createElement(pageId, newElement) {
    const newElement = await elements.findOneAndUpdate(
      { pageId },
      { $push: { element: newElement } },
      { upsert: true, new: true }
    );

    return newElement;
  },

  async updateElement(pageId, elementId, element) {
    await GroupedComment.findByIdAndUpdate(commentId, body, {
      new: true,
      useFindAndModify: false,
    });
  },

  async deletePage(id) {
    return await Page.findByIdAndDelete(id);
  },
};

module.exports = pageRepository;
