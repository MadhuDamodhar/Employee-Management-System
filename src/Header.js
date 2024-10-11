import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [active, setActive] = useState("");

  useEffect(() => {
  
    if (location.pathname === "/") {
      setActive("home");
    } else if (location.pathname === "/addEmp") {
      setActive("addEmp");
    } 
    else if (location.pathname === "/brand") {
      setActive("brand");
    } 
    else {
      setActive(""); 
    }
  }, [location.pathname]); 

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div id="nav-items" className="container-fluid">
         
            <svg onClick={() => { 
              navigate('/brand'); 
            }} className={active === "brand" ? "active" : ''}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="40"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
            </svg>
      
              <span 
                className={active === "home" ? "active" : ''} 
                onClick={() => { 
                  navigate('/'); 
                }}
              >
                Home
              </span>
              <span 
                className={active === "addEmp" ? "active" : ''} 
                onClick={() => { 
                  navigate('/addEmp'); 
                }}
              >
                Add Employee
              </span>
        
       
        </div>
      </nav>
    </div>
  );
}

export default Header;
