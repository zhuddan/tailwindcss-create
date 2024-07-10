/**
 *  @type {import('tailwindcss').Config['corePlugins']}
 */
const corePlugins = {
  // 禁用所有默认的 core plugins
  preflight: false,
  container: false,
  accessibility: false,
  alignContent: false,
  alignItems: false,
  alignSelf: false,
  animation: false,
  appearance: false,
  backdropBlur: false,
  backdropBrightness: false,
  backdropContrast: false,
  backdropFilter: false,
  backdropGrayscale: false,
  backdropHueRotate: false,
  backdropInvert: false,
  backdropOpacity: false,
  backdropSaturate: false,
  backdropSepia: false,
  backgroundAttachment: false,
  backgroundBlendMode: false,
  backgroundClip: false,
  backgroundColor: false,
  backgroundImage: false,
  backgroundOpacity: false,
  backgroundPosition: false,
  backgroundRepeat: false,
  backgroundSize: false,
  blur: false,
  borderCollapse: false,
  borderColor: false,
  borderOpacity: false,
  borderRadius: false,
  borderStyle: false,
  borderWidth: false,
  boxDecorationBreak: false,
  boxShadow: false,
  boxSizing: false,
  brightness: false,
  clear: false,
  contrast: false,
  cursor: false,
  display: true,
  divideColor: false,
  divideOpacity: false,
  divideStyle: false,
  divideWidth: false,
  dropShadow: false,
  fill: false,
  filter: false,
  flex: false,
  flexBasis: false,
  flexDirection: false,
  flexGrow: false,
  flexShrink: false,
  flexWrap: false,
  float: false,
  fontFamily: false,
  fontSize: false,
  fontSmoothing: false,
  fontStyle: false,
  fontVariantNumeric: false,
  fontWeight: false,
  gap: false,
  gradientColorStops: false,
  grayscale: false,
  gridAutoColumns: false,
  gridAutoFlow: false,
  gridAutoRows: false,
  gridColumn: false,
  gridColumnEnd: false,
  gridColumnStart: false,
  gridRow: false,
  gridRowEnd: false,
  gridRowStart: false,
  gridTemplateColumns: false,
  gridTemplateRows: false,
  height: false,
  hueRotate: false,
  inset: false,
  invert: false,
  isolation: false,
  justifyContent: false,
  justifyItems: false,
  justifySelf: false,
  letterSpacing: false,
  lineHeight: false,
  listStylePosition: false,
  listStyleType: false,
  margin: false,
  maxHeight: false,
  maxWidth: false,
  minHeight: false,
  minWidth: false,
  mixBlendMode: false,
  objectFit: false,
  objectPosition: false,
  opacity: false,
  order: false,
  outline: false,
  overflow: false,
  overscrollBehavior: false,
  padding: false,
  placeContent: false,
  placeItems: false,
  placeSelf: false,
  placeholderColor: false,
  placeholderOpacity: false,
  pointerEvents: false,
  position: false,
  resize: false,
  ringColor: false,
  ringOffsetColor: false,
  ringOffsetWidth: false,
  ringOpacity: false,
  ringWidth: false,
  rotate: false,
  saturate: false,
  scale: false,
  sepia: false,
  skew: false,
  space: false,
  stroke: false,
  strokeWidth: false,
  tableLayout: false,
  textAlign: false,
  textColor: false,
  textDecoration: false,
  textOpacity: false,
  textOverflow: false,
  textTransform: false,
  transform: false,
  transformOrigin: false,
  transitionDelay: false,
  transitionDuration: false,
  transitionProperty: false,
  transitionTimingFunction: false,
  translate: false,
  userSelect: false,
  verticalAlign: false,
  visibility: false,
  whitespace: false,
  width: false,
  wordBreak: false,
  zIndex: false,
}
console.log(corePlugins)
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: '#415F91',
        },
      },
    },
  },
  // plugins: [],
  // corePlugins,
  presets: [
    {
      safelist: [
        { pattern: /^text-primary/ },

        // { pattern: /^flex/ },
        // { pattern: /^flex-\w?/ },

        // { pattern: /^justify-items-\w?/ }, // Justify Items
        // { pattern: /^justify-self-\w?/ }, // Justify Self
        // { pattern: /^justify-(!?items)\w?/ }, // Justify Content

        // { pattern: /^items-\w?/ }, // Align Items
        // { pattern: /^self-\w?/ }, // Align Self
        // { pattern: /^content-\w?/ }, // Align Content

        // { pattern: /^place-\w?/ }, // Place Self Items Content

        // { pattern: /^grow\w?/ }, // Flex Grow
        // { pattern: /^shrink\w?/ }, // Flex Shrink
        // { pattern: /^order\w?/ }, // Order

        // { pattern: /^grid-cols-\w?/ }, // Grid Template Columns
        // { pattern: /^col-\w?/ }, // Grid Column Start / End
        // { pattern: /^grid-rows-\w?/ }, // Grid Template Rows
        // { pattern: /^row-\w?/ }, // Grid Row  Start / End
        // { pattern: /^grid-flow-\w?/ }, // Grid Auto Flow
        // { pattern: /^auto-cols-\w?/ }, // Grid Auto Columns
        // { pattern: /^auto-rows-\w?/ }, // Grid Auto Rows
        // { pattern: /^gap-\w?/ }, // Gap

        // { pattern: /^gap\w?/ },
        // { pattern: /^auto\w?/ },
        // { pattern: /^row\w?/ },
        // { pattern: /^col\w?/ },
        // { pattern: /^object\w?/ },
        // { pattern: /^overflow-x-hidden?/ },
        // { pattern: /^line-clamp-\w?/ },
        // 'block',
        // 'inline-block',
        // 'inline',
        // 'flex',
        // 'grid',
        // 'static',
        // 'fixed',
        // 'absolute',
        // 'relative',
        // 'sticky',

      ],
    },
  ],

}
