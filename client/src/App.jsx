import './App.css'
import MainNav from './components/MainNav'
import MenuButoons from './components/MenuButtons'
import SectionContainer from './components/Section-Container/SectionContainer'
import TimeAndBattery from './components/TimeAndBattery'

function App() {

  return (
    <article className='screen'>
      {/* <!--Time And Battery--> */}
        <TimeAndBattery/> 

        {/* <!--Nav--> */}
        <MainNav/>

        {/* <!--Section Container--> */}
        <SectionContainer/>

        {/* <!--Menu buttons--> */}
        <MenuButoons/>
    </article>
  )
}

export default App
