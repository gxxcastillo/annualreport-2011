var SectionListProvider = require('./section-provider.js');
var sectionListProvider = new SectionListProvider();

module.exports = function (req, res) {
    var sectionListData = sectionListProvider.getList();
    if (req.query['raw'] == 1) {
        // return json object representation of this view, broken up into "blocks".
        // Rendering will then iterate over each block.  (no frame)

        res.send(sectionListData);
    } else {
        // @todo, this is temporary until we figure out how to serve the ":section" view from the server
        // @todo this works, but with no sidebar, and that is because the data for the sidebar is currently in the index.js route
        res.render('TODO', sectionListData);
    }
};