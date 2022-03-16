import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string
    textColor: string
    headerBackgroundColor: string
    hover: string
    scroll: string
  }
}
