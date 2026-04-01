import AppRoutes from "./AppRoutes";
import Menu from "./features/home/components/Menu";
import { BrowserRouter } from "react-router";
import AuthenticationContext from "./features/security/utils/AuthenticationContext";
import { useEffect, useState } from "react";
import type Claim from "./features/security/models/Claim.models";
import { getClaims } from "./features/security/utils/HandleJWT";

function App() {
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClaims(getClaims());
  }, []);

  function updateClaims(claims: Claim[]) {
    setClaims(claims);
  }

  return (
    <>
      <BrowserRouter>
        <AuthenticationContext.Provider
          value={{ claims, update: updateClaims }}
        >
          <Menu />
          <div className="container mb-5">
            <AppRoutes />
          </div>
        </AuthenticationContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
