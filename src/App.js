import PageStatus from './components/status/PageStatus';
import PageMessage from './components/messages/PageMessages';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import './index.css'


function App() {
  return (
    <div className="App"  style={{ backgroundColor: '#EBF1F1'}}>
      <BrowserRouter>
        <Routes>
        <Route
            path={"/"}
            exact={true}
            element={<PageMessage />} />
          <Route
            path={"/status"}
            exact={true}
            element={<PageStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
