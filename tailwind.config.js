const unit = 'rpx' // 微信小程序
const fontSize = {
  large: `48${unit}`,
  default: `34${unit}`,
  medium: `28${unit}`,
  small: `24${unit}`,
  mini: `20${unit}`,
}
const colors = {
  /* 主色 */
  'primary': '#FF4D6A',
  /* 绿色（微信颜色） */
  'green': '#5AC460',
  /* 绿色（微信颜色） */
  'success': '#5AC460',
  /* 黄色 */
  'yellow': '#FFBC1E',
  /* 蓝色 */
  'blue': '#5682EA',
  /* 基佬紫 */
  'purple': '#C42AE7',
  /* 褐色 */
  'brown': '#CD7545',
  /* 灰背景 */
  'gray': '#F4F4F4',
  /* 一级文字颜色 */
  'black-1': '#555555',
  /* 二级文字颜色 */
  'black-2': '#999999',
  /* 三级文字颜色 */
  'black-3': '#BCBCBC',
}

const spacing = {}
Array.from({ length: 41 }).forEach((e, index) => {
  if (!(index % 2)) {
    spacing[index] = `${index}${unit}`
  }
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  // content: [],

  theme: {
    extend: {
      colors,
    },
    fontSize,
    spacing,
  },
  presets: [
    {
      safelist: [
        { pattern: /^flex/ },
        { pattern: /^flex-\w?/ },

        { pattern: /^justify-items-\w?/ }, // Justify Items
        { pattern: /^justify-self-\w?/ }, // Justify Self
        { pattern: /^justify-\w+?/ }, // Justify Content

        { pattern: /^items-\w?/ }, // Align Items
        { pattern: /^self-\w?/ }, // Align Self
        { pattern: /^content-\w?/ }, // Align Content

        { pattern: /^grow\w?/ }, // Flex Grow
        { pattern: /^shrink\w?/ }, // Flex Shrink
        { pattern: /^order\w?/ }, // Order

        { pattern: /^place-\w?/ }, // Place Self Items Content

        { pattern: /^grid-cols-\w?/ }, // Grid Template Columns
        { pattern: /^col-\w?/ }, // Grid Column Start / End
        { pattern: /^grid-rows-\w?/ }, // Grid Template Rows
        { pattern: /^row-\w?/ }, // Grid Row  Start / End
        { pattern: /^grid-flow-\w?/ }, // Grid Auto Flow
        { pattern: /^auto-cols-\w?/ }, // Grid Auto Columns
        { pattern: /^auto-rows-\w?/ }, // Grid Auto Rows
        { pattern: /^gap-\w?/ }, // Gap

        { pattern: /^gap\w?/ },
        { pattern: /^auto\w?/ },
        { pattern: /^row\w?/ },
        { pattern: /^col\w?/ },
        { pattern: /^object\w?/ },
        { pattern: /^overflow-?/ },
        { pattern: /^line-clamp-\w?/ },

        { pattern: /^((inline-)?(block|flex|grid)|inline|hidden)$/ }, // display
        { pattern: /^(static|fixed|absolute|relative|sticky)$/ }, // position
        { pattern: new RegExp(`^text-(${Object.keys(fontSize).join('|')})$`) }, // font-size
        { pattern: new RegExp(`^(text|bg|border)-(${Object.keys(colors).join('|')})$`) }, // colors
        { pattern: /^text-(left|center|right|justify|start|end)$/ }, // text-algin
        { pattern: /^((min-|max-)(w|h)?|size)-\d{2,}$/ }, // size
        { pattern: /^(m|p)(x?|y?|l?|r?|b?|t?)-\d+$/ }, // size (m|p)(x?|y?|l?|r?|b?|t?)|
        { pattern: /^text-((no)?wrap|balance|pretty)$/ }, // Text Wrap
        { pattern: /^whitespace-\w+$/ }, // whitespace
        { pattern: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/ }, // font-weight
        { pattern: /^shadow-(sm|shadow|md|lg|xl|2xl|inner|none)+/ }, // shadow
        { pattern: /^opacity-\w+/ }, // opacity
        { pattern: /^[wh]-full$/ }, // wh
      ],
    },
  ],
}
