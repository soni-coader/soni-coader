/** @type {import('svgo').Config} */
export default {
  multipass: true,
  floatPrecision: 2,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Entrance animations use opacity: 0 — do not strip
          removeHiddenElems: false,
          // Class-based CSS keyframes must stay as classes
          inlineStyles: false,
          // Safer visual parity for cards/banners
          convertShapeToPath: false,
          mergePaths: false,
          convertPathData: {
            floatPrecision: 2,
            transformPrecision: 2,
            removeUseless: true,
            collapseRepeated: true,
            utilizeAbsolute: true,
            leadingZero: true,
            negativeExtraSpace: true,
          },
          cleanupNumericValues: {
            floatPrecision: 2,
            leadingZero: true,
          },
          convertTransform: {
            floatPrecision: 2,
            transformPrecision: 2,
            matrixToTransform: true,
            shortTranslate: true,
            shortScale: true,
            shortRotate: true,
            removeUseless: true,
            collapseIntoOne: true,
          },
          collapseGroups: true,
          removeUselessStrokeAndFill: true,
          removeEmptyAttrs: true,
          removeEmptyContainers: true,
          minifyStyles: true,
          cleanupIds: {
            minify: false,
            remove: true,
          },
          // Keep a11y surface
          removeUnknownsAndDefaults: {
            keepRoleAttr: true,
            keepAriaAttrs: true,
            keepDataAttrs: false,
          },
        },
      },
    },
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'removeUselessDefs',
    'removeXMLProcInst',
    {
      name: 'cleanupListOfValues',
      params: {
        floatPrecision: 2,
        leadingZero: true,
      },
    },
  ],
};
