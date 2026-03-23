import AppRoutes from "./AppRoutes"
import Menu from "./features/home/components/Menu"
import { BrowserRouter} from "react-router"
import AuthenticationContext from "./features/security/utils/AuthenticationContext"
import type Claim from "./features/security/models/Claim.models";
import { useState } from "react";

function App() {

  const [claims, setClaims] = useState<Claim[]>([{ name: "isAdmin", value: "true" }]);

  function updateClaims(claims: Claim[]) {
    setClaims(claims);
  }

  return (
    <>
    <BrowserRouter>
      <AuthenticationContext.Provider value={ { claims, update: updateClaims } }>
        <Menu />
        <div className="container mb-5">
          <AppRoutes />
        </div>
      </AuthenticationContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
