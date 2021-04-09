import React, { useState, useEffect} from 'react';
import axios from 'axios'; 
import Card from './Card';

const Affichage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setData(res.data));
        console.log(data);
}, []); 

    return (
        <div>
            <ul>
                {data.map((affiche) => (
                    <Card affiche={affiche} key={affiche.id} />
                ))}
            </ul>
        </div>
    );
};



export default Affichage;