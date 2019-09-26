import React, { useEffect, useState } from "react";
import axios from "axios";
import ActCard from "./ActCard.js";

export default function ActsList() {
    const [acts, setActs] = useState([]);

    useEffect(() => {
        const getActs = () => {
            axios
                .get('https://generate-random-acts.herokuapp.com/api/acts')
                .then(response => {
                    console.log(response.data);
                    setActs(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                })
        }
        getActs();
    }, []);

    return (

            <section className= "act-cards">
            {acts.map(act => (
                <ActCard key={act.id} act={act} />
                
            ))}
            </section>
        
    );


}