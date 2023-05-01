import { BrowserRouter } from 'react-router-dom'
import IndexRoutes from './routes'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
