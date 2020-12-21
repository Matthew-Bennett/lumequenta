module.exports = function (api) {
    api.cache(true);

    const presets = ["@babel/preset-react"];
    const plugins = ["@babel/plugin-transform-react-jsx", "@babel/plugin-syntax-jsx"];

    return {
        presets,
        plugins
    };
}