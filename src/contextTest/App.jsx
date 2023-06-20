import { ThemeProvider } from "./Context";
import Component from "./component";

export default function App(){
    return(
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    )
}