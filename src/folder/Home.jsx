import React from "react";
import './style.css';
import computer from "../img/computer.png"

function Home() {
  return (
      <div>
        <h2 className="main-h2">how to start your own bussiness !
        Will you ready ?</h2>
        <p className="main-p">WE help individuals or Organizations to start their business or start-up by giving them indepth theory and practical sessions.</p>
        <button>Join now</button>
        <img src={computer} alt="computer" />
      </div>
  )
}

export default Home;