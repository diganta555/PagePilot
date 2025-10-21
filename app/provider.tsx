"user client"

import React from 'react';
import axios from 'axios';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    const CreateNewuser=async()=>{
        const result=await axios.post('/api/users',{
        })
        console.log(result.data);
        // if 
    }
  return (
    <div>
      {children}
    </div>
  );
}

export default Provider;
