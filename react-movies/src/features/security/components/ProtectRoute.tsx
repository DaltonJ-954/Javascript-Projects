import { Outlet } from "react-router";
import Authorized from "./Authorized";

export default function ProtectRoute(props: ProtectRouteProps) {
    return (
        <Authorized claims={ props.claims } 
            authorized={ <Outlet /> } 
            notAuthorized={ <>Your authorization is not allowed for this content.</> }   
        />
    )
}

interface ProtectRouteProps {
    claims: string[];
}