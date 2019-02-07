module.exports = {
    publicPath: '/',
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/my-sw.js',
            // ...other Workbox options...
        },
    },
};