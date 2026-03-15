import AppRoutes from "./AppRoutes"
import Menu from "./features/home/components/Menu"
import { BrowserRouter} from "react-router"

function App() {
  return (
    <>
    <BrowserRouter>
      <Menu />
      <div className="container mb-5">
        <AppRoutes />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
