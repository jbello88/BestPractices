const repo = require("./db/pageRepository");
const connectWithDb = require("./db/connectWithDb");

(async () => {
  try {
    await connectWithDb();

    newPage = {
      subject: "The title of the page",
      elements: [{ title: "miauwuff" }, { title: "the second" }],
    };

    //console.log(newPage);

    // const page = await repo.createNewPage(newPage);

    const page = await repo.getAllPages();

    //page.elements.length = 1;
    //page.subject = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

    //repo.updatePage(page._id, page);

    //page.elements.push({ title: "This is the title of the 3rd" });

    //repo.updatePage(page._id);

    console.log(page);
  } catch (error) {
    console.error(error);
  }

  console.log("All finished");
  return;
})();
