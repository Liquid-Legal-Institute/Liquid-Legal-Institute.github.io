const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    plugins: [
        require("postcss-preset-env"),
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-nested"),
        ...(isProduction ? [require('cssnano')({
            preset: 'default',
        })] : []),
    ],
};
