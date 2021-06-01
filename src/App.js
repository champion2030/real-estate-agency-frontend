import './App.css';
import Content from "./components/Content/Content";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: true
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Content/>
            </div>
        </ThemeProvider>
    );
}

export default App;
