// @ts-nocheck

import WorkManage from "./Components/Charts/WorkManage";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Pricing from "./Components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Pricing></Pricing>
      <WorkManage></WorkManage>
      <Footer></Footer>
    </div>
  );
}

export default App;
