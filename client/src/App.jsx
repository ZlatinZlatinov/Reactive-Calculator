import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainNav from './components/MainNav'
import MenuButoons from './components/MenuButtons'
import SectionContainer from './components/Section-Container/SectionContainer'
import TimeAndBattery from './components/TimeAndBattery'
import { Convertor } from './components/Convertor/Convertor'

function App() {

  return (
    <article className='screen'>
      {/* <!--Time And Battery--> */}
      <TimeAndBattery />

      {/* <!--Nav--> */}
      <MainNav />

      <Routes>
        {/* <!--Section Container--> */}
        <Route path={'/'} element={<SectionContainer />} />

        <Route path={'calculator'} element={<SectionContainer />} />

        {/* Section Convertor */}
        <Route path='convertor' element={<Convertor />} />
      </Routes>
      {/* <!--Menu buttons--> */}
      <MenuButoons />
    </article>
  )
}

export default App
