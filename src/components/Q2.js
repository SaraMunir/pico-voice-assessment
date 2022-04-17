import React, { useState } from 'react'
import NavBar from './NavBar'
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Java from './Q2/Java';
import {Python, Php, Ruby, NodeJs, Go, CSharp} from './Q2/Langueages';


function Q2() {
  let location = useLocation();
  const [nightMode, setNighMode]=useState(false) 
  return (
    <>
    <NavBar/>
    <div className="installCntr">
      <div className={nightMode ?"tab tabNight":"tab tabDay" }>
        <ul>
          <li>
            <Link className={location.pathname === "/Q2/cSharp" ? "active" : null} to="cSharp">C#</Link>
          </li>
          <li>
            <Link className={location.pathname === "/Q2/Go" ? "active" : null} to="Go">Go</Link>
          </li>
          <li>
            <Link className={location.pathname === "/Q2/java" ? "active" : null} to="java">Java</Link>
          </li>
          <li>
            <Link className={location.pathname === "/Q2/nodeJs" ? "active" : null} to="nodeJs">Node.js</Link>
          </li>
          <li>
            <Link className={location.pathname === "/Q2/php" ? "active" : null}  to="php">PHP</Link>
          </li>
          <li>
            <Link className={location.pathname === "/Q2/python" ? "active" : null} to="python">Python</Link>
          </li>
          <li>
            <Link className={location.pathname === "/Q2/ruby" ? "active" : null} to="ruby">Ruby</Link>
          </li>
        </ul>
      </div>
      <div className={nightMode ?"window nightMode":"window dayMode" }>
        <div className='buttonContainer'>
          {nightMode?
          <button onClick={()=>setNighMode(!nightMode)}>
            <i class="fas fa-moon" ></i>
          </button>
          :
          <button onClick={()=>setNighMode(!nightMode)}>
            <i class="fas fa-sun"></i>
          </button>
        }
        </div>
        <Routes>
          <Route path='cSharp' element={<CSharp/>}/>
          <Route path='Go' element={<Go/>}/>
          <Route path='java' element={<Java/>}/>
          <Route path='nodeJs' element={<NodeJs/>}/>
          <Route path='Php' element={<Php/>}/>
          <Route path='python' element={<Python/>}/>
          <Route path='ruby' element={<Ruby/>}/>
        </Routes>
      </div>
    </div>

    </>
  )
}

export default Q2