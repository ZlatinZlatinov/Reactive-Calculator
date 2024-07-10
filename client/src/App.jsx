import './App.css'

function App() {

  return (
    <article className='screen'>
      {/* <!--Time And Battery--> */}
        <section className="time">
            <p className="clock"><span>15:08</span></p>
            <p className="battery"><i className="fa-solid fa-battery-empty"></i></p>
        </section> 

        {/* <!--Nav--> */}
        <section className="nav">
            <p className="arrows"><i className="fa-solid fa-down-left-and-up-right-to-center"></i></p> 

            <ul className="nav-links">
                <li><a href="#">Калкулатор</a></li>
                <li><a href="#">Конвертор</a></li>
            </ul> 

            <p className="dots">&#8942;</p>
        </section> 

        {/* <!--Section Container--> */}
        <div className="section-container">
            <section className="output">
                <input type="text" className="initial-input" placeholder="0" />
                <input type="text" className="result" placeholder="=" />
            </section>

            {/* <!--Section Buttons--> */}
            <section className="buttons-container">
                <button className="btn orange-text">AC</button>
                <button className="btn orange-text"><i className="fa-solid fa-delete-left"></i></button>
                <button className="btn orange-text">%</button>
                <button className="btn orange-text">/</button>
    
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn orange-text">x</button>
    
                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn orange-text">+</button>
    
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn orange-text">-</button>
    
                <button className="btn orange-text"><i className="fa-solid fa-arrows-rotate"></i></button>
                <button className="btn">0</button>
                <button className="btn">,</button>
                <button className="btn btn-orange-fill">=</button>
            </section>
        </div>
        
        {/* <!--Menu buttons--> */}
        <section className="menu-buttons">
            <p><i className="fa-solid fa-square"></i></p>
            <p><i className="fa-regular fa-circle-dot"></i></p>
            <p><i className="fa-solid fa-caret-left"></i></p>
        </section>
    </article>
  )
}

export default App
