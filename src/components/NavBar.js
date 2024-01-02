import React from "react";

function NavBar(props) {
  const links = ["home","about","projects"]

  return <nav>{ 
    <div>
      <nav>
        {links.map((link)=> (
          <a key= {link} href={"#"+link}>{link}</a>
        ))}
      </nav>
    </div>
    
    
    /* display an <a> tag for each link here */}</nav>;
}

export default NavBar