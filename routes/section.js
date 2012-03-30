

        var LayoutProvider = require('../providers/layout-provider.js')
        , SectionProvider = require('../providers/section-provider.js')

        // Create an instance of LayoutProvider, use the default data
        , layoutProvider = new LayoutProvider('defaultLayout')

        // Create an instance of the sectionProvider
        , sectionProvider = new SectionProvider();


        module.exports =  function (req, res) {
            var layoutData = layoutProvider.getLayoutData()
            , sectionList = sectionProvider.getList();

            var sectionName = req.params.section;

            if (sectionName) {

                // Identify the last element
                sectionList[0].first = true;
                layoutData.sectionList = sectionList;

                if (req.query['raw'] == 1) {
                    // return json object representation of this view, broken up into "blocks".
                    // Rendering will then iterate over each block.  (no frame)

                    res.send(sectionProvider.findById(sectionName));
                } else {
                    // @todo, this is temporary until we figure out how to serve the ":section" view from the server
                    res.render('index', layoutData);
                }
            }

            res.render('index', layoutData);
        }