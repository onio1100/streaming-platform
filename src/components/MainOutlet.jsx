import { Outlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";

export default function MainOutlet() {
    return(
        <div className="main__wraper">
            <HorizontalNav />
            <VerticalNav />         
            <Outlet />
        </div>
    )
}