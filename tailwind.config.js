module.exports = {
  purge: ["*.html"],
  variants: {
    dark: ['display'],
  },
  experimental: {
    darkModeVariant: true,
    uniformColorPalette: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  colors: {
    indigo: '#7B5FCD',
    blue: '#007ace',
    red: '#fe5258',
  }
};

