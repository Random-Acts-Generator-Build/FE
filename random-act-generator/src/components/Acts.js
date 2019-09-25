import { Switch, Route } from "react-router-dom";
import React from "react";
import { Container, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import CreateAct from "./CreateAct";
import ActsList from "./ActsList";

function Acts () {
    return (
        <Container>
            <h1>Acts</h1>
            <p>You can view/edit or create acts.</p>
            <NavLink to="/acts/viewedit"><Button>View/Edit Acts</Button></NavLink>
            <NavLink to="/acts/create"><Button>Create Acts</Button></NavLink>
            <Route exact path= "/acts/create" component={CreateAct} />
            <Route exact path= "/acts/viewedit" component={ActsList} />
        </Container>
    )
}

export default Acts;