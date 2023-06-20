import { useTheme, useThemeUpdate } from "./Context";

export default function Component(){
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }

    return(
        <>
            <button onClick={toggleTheme}>Toggle Them</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}