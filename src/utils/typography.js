import Typography from "typography"
import funstonTheme from 'typography-theme-funston'
import moragaTheme from 'typography-theme-moraga'


let typography;

typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
})

// typography = new Typography(moragaTheme)
// typography = new Typography(funstonTheme)
// typography = new Typography(moragaTheme)
// typography = new Typography()

export default typography