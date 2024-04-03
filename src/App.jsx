import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./components/Homepage.jsx";
import { IndvItemComponent } from "./components/IndvItemComponent.jsx";
import { IndvItemGrid } from "./components/ItemDisplayGrid.jsx";
export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/items" element={<IndvItemGrid />}/>
      <Route path="/item-test" element={<IndvItemComponent />} />

    </Routes>
    </BrowserRouter>
    
  //  <h1> hello </h1>
  );
}
