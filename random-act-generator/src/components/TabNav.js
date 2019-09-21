import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => (
    <NavLink exact {...props} activeClassName="active"
    />
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const homeLabel = createLabel("home", "Home Page");
const contactsLabel = createLabel("users", "Contacts");
const actsLabel = createLabel('heart', "Acts");
const randomLabel = createLabel('random', "Randomizer");

const panes = [
    { menuItem: <Menu.Item key='home' as={Nav} to={'/'} content={homeLabel} /> },
    { menuItem: <Menu.Item key='contacts' as={Nav} to={'/contacts'} content={contactsLabel} /> },
    { menuItem: <Menu.Item key='acts' as={Nav} to={'/acts'} content={actsLabel} /> },
    { menuItem: <Menu.Item key='randomizer' as={Nav} to={'/randomizer'} content={randomLabel} /> },
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav;