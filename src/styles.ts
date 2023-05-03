import styled, { createGlobalStyle, css } from 'styled-components'

export const MOBILE = '@media (min-width: 400px)'
export const TABLET = '@media (min-width: 750px)'
export const DESKTOP = '@media (min-width: 1280px)'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
  margin: 0;
  color: white;
  text-align: center;
  background: linear-gradient(135deg, #1e1e2f 0%, #2a2a3a 100%);
  background-size: 400% 400%;
  animation: GradientAnimation 12s ease infinite;
  cursor: default;
}

@keyframes GradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
  h1, h2, h3, h4 {
    margin: 0;
  }
  body, input, button, textarea, pre {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 14px;
  }
  #root {
    height: 100%;
  }
`

const InputCSS = css`
  padding: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  border: none;
  background: rgb(47 51 60);
  color: white;
  outline: none;
  transition: background .1s;
  &:focus {
    background: rgb(58 63 75);
  }
`

export const Input = styled.input`
  height: 50px;
  ${InputCSS}
`

export const Textarea = styled.textarea`
  ${InputCSS}
  resize: vertical;
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  ${MOBILE} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
  max-width: 100%;
  width: 100%;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  ${MOBILE} {
    min-width: 320px;
    position: relative;
  }
  background: #191c23;
  color: white;
`

export const Controls = styled.div`
  display: grid;
  gap: 20px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > * {
    flex-grow: 1;
  }
`

export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonCSS = css<{$gradient?: boolean}>`
  padding: 15px;
  color: white;
  background: rgba(47, 51, 60, 1);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  min-width: 100px;
  transition: background .1s;
  outline: none;
  &:hover, &:focus {
    background: rgba(58, 63, 75, 1);
  }
  &:disabled {
    cursor: default;
    background: rgba(58, 63, 75, .1)!important;
  }
  ${({ $gradient }) => $gradient && `
    transition: background .5s;
    background-image: linear-gradient(90deg,rgba(255,124,83,1) -0%,rgba(255,85,85,1) 48%,rgba(255,10,83,1) 100%);
    &:hover, &:focus {
      background-image: linear-gradient(90deg,rgba(255,124,83,1) -25%,rgba(255,85,85,1) 48%,rgba(255,10,83,1) 125%);
    }
  `}
`

export const Button = styled.button`
  ${ButtonCSS}
`

export const SmallButton = styled.button`
  ${ButtonCSS}
  padding: 2.5px 5px;
  min-width: unset;
  font-size: 12px;
`

export const Amount = styled.div<{$value: number}>`
  color: ${({ $value }) => $value >= 0 ? '#00ff83' : '#ff2862'};
  font-weight: bold;
`

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 75%;
  position: fixed;
  left: 0;
  top: 0;
  ${MOBILE} {
    position: relative;
    height: 320px;
  }
`
