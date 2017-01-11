'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function configure(config) {
        config.globalResources('./ace-editor');
        config.globalResources('./dedent');
        config.globalResources('./prop-converter');
    }

    _export('configure', configure);

    return {
        setters: [],
        execute: function () {}
    };
});