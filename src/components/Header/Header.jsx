import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Menu stackable inverted color="black" fixed="top">
      <Menu.Item header className="profileName">
        Kenyatta Hill: Portfolio
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" name="about" exact />
      <Menu.Item as={NavLink} to="/projects" name="projects" exact />
      <Menu.Item as={NavLink} to="/contact" name="contact" exact />
      <Menu.Menu position="right">
        <Menu.Item as={'a'} href="https://www.linkedin.com/in/kenny-hill-9190236b/" target="_blank" name="Linkedin" />
        <Menu.Item as={'a'} href="https://github.com/kcjhill1234" target="_blank" name="Github" />
      </Menu.Menu>
    </Menu>
  );
}
