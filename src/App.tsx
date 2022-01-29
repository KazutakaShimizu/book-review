import styled from 'styled-components'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App

const Container = styled.div``
