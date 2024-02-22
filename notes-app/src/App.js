import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";

import { ContextProvider } from "./Context/Context";

function App() {
    return (
        <div className="App container">
            <ContextProvider>
                <Header />
                <NotesList />
            </ContextProvider>
        </div>
    );
}

export default App;
