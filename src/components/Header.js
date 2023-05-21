import React, { useEffect, useState } from "react";
import "./Header.css";

function Header(props) {

  useEffect(() => {
    
    const bg = document.getElementById('header')
    window.addEventListener('scroll', function(){
      bg.style.backgroundSize = 120 - +window.pageYOffset/25+'%'
      bg.style.opacity = 1 - +window.pageYOffset/700+''
    })

  })
  
  return (
    <div id="header">
      <div class="header-elements">
        <span class="header-title">{props.title}</span>
      </div>
    </div>
  );
}

export default Header;
