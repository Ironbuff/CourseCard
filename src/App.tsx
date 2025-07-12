
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Coures from './pages/courses/Coures'
import Coursedetail from './pages/coursedetail/Coursedetail'

function App() {


  return (
<>
  <Navbar/>
   <Routes>
          <Route path='/' element={<Coures/>}/>
           
          <Route path='/CourseDetail' element={<Coursedetail/>}/>
   </Routes>

</>
  )
}

export default App
