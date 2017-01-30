cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.jcjee.plugins.emailcomposer.EmailComposer",
        "file": "plugins/com.jcjee.plugins.emailcomposer/www/EmailComposer.js",
        "pluginId": "com.jcjee.plugins.emailcomposer",
        "clobbers": [
            "EmailComposer"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jcjee.plugins.emailcomposer": "1.4.6",
    "cordova-plugin-inappbrowser": "1.6.2-dev"
};
// BOTTOM OF METADATA
});