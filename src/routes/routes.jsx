import {Routes, Route} from 'react-router-dom';
import About from '../pages/About/About';
import Resume from '../pages/Resume/Resume';
import Services from '../pages/Services/Services';
import Projects from '../pages/Projects/Projects';
import Skills from '../pages/Skills/Skills';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About/>}></Route>
      <Route path="/curriculo" element={<Resume/>}></Route>
      <Route path="/servicos" element={<Services/>}></Route>
      <Route path="/projetos" element={<Projects/>}></Route>
      <Route path="/habilidades" element={<Skills/>}></Route>
    </Routes>
  )
}

export default AppRoutes;