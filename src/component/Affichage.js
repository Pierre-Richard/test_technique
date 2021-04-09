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
                {data.map(affiche => (
                    <Card
                        id={affiche.id}
                        title={affiche.title}
                        body={affiche.body}
                    />
                ))}
            </ul>
        </div>
    );
};



export default Affichage;