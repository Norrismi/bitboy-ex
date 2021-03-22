import React from 'react';

const challenge = ({items, isLoading}) => {

// console.log(props.items)
console.log(items, isLoading)

// let isLoading = props.isLoading

return isLoading ? (<h1>Loading...</h1>) : (
<div>
Hello from items
   {/* { items.map(item => (
       <h1>{item.name}</h1>
   ))} */}
</div>
)

    // return (
    //     <div>
    //         Hello from challenge
    //     </div>
    // );
}

export default challenge;
