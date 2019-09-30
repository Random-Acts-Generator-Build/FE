import { Switch, Route } from "react-router-dom";
import React from "react";
import { Container, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import CreateAct from "./CreateAct";
import ActsList from "./ActsList";
import TabNav from "./TabNav.js"

function Acts() {
    return (
        <div>
            <TabNav />
            <Container>
                <h1 className="acts-header">Acts</h1>
                <p>You can view/edit or create acts.</p>
                <NavLink to="/acts/viewedit"><Button>View/Edit Acts</Button></NavLink>
                <NavLink to="/acts/create"><Button>Create Acts</Button></NavLink>
                <Route exact path="/acts/create" component={CreateAct} />
                <Route exact path="/acts/viewedit" component={ActsList} />
            </Container>
        </div>

    )
}

export default Acts;