const generateOverride = (params = {}) => {
  let result = ''


  // 菜单颜色 - menuColor
  if (params.menuColor && params.menuColor !== '#fffbbe') {
    result += `
      .sidebar .overlayer {
        background: ${params.menuColor};
      }
    `
  }



  // 菜单背景色 - menuBgColor
  if (params.contentBgColor && params.contentBgColor !== '#f3f9fb') {
    result += `
      body {
        background: ${params.contentBgColor};
      }
    `
  }

  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }


  console.log('result', result)

  return result
}

module.exports = generateOverride
