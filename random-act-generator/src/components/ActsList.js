import React, { useEffect, useState } from "react";
import axios from "axios";
import ActCard from "./ActCard.js";

export default function ActsList() {
    const [acts, setActs] = useState([]);

    useEffect(() => {
        const getActs = () => {
            axios
                .get('https://randomactsgenerator.herokuapp.com/api/services')
                .then(response => {
                    console.log(response);
                    setActs(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                })
        }
        getActs();
    }, []);

    return (
        <section>
            {acts.map(act => (
                <ActCard key={act.id} act={act} />
                
            ))}
        </section>
    );


}