module.exports = {
    presets: [
        '@vue/app',
    ],
    "plugins": [

        ["import", {"libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css"}], [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ]
}
