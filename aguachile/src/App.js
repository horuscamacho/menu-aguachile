import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <div className="root">
        <SectionOne />
        <SectionTwo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
