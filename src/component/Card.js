import react from 'react';

const Card = (props) => {

    const { affiche } = props;
    console.log(affiche);
    return (
       
           <ul>
               <li>{affiche.id}</li>
               <li>{affiche.title}</li>
               <li>{affiche.body}</li>
           </ul>
    );
};

export default Card;
