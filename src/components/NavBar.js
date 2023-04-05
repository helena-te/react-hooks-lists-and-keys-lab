import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => {
    return <a href={`#${link}`}>{link}</a>
  });

  return <nav>{/* display an <a> tag for each link here */linkElements}</nav>;
  //for each string in the array, create an <a> tag that looks like this:
  //<a href="#home">home</a>
  //make sure each <a> element also gets a unique key prop
}

export default NavBar;
