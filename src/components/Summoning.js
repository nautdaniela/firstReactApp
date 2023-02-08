// import React from "react";
// import Conjuration from './Conjuration';

// const Summoning = props => {
//     console.log(props);
//     props.teacher ='Bolder Mort';
//     return (
//         <div>
//             <p>Professor {props.teacher} is the {props.subject}</p>
//             {/*<Conjuration /> */}
//         </div>
//     );
// };
// export default Summoning;

import React from "react";





function Sumoning(props) {
   console.log(props);

   props.name = 'voldermord';

   return (
      <p>
         Proffesor {props.name} is the potion {props.potion} teacher
      </p>
   );
}



export default Sumoning;


// export const Sumoning = () => <p>Proffesor Tibi is the potion teacher</p>;