import React, { useEffect, useState } from 'react';
import { GiSelfLove } from 'react-icons/gi';

const Media = () => {
    const [media,setMedia]=useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:3000/media')
        .then(res=>res.json())
        .then(data=>setMedia(data))
    },[])
  
    const handleBtnDisable=()=>{
        setButtonDisabled(true)
        console.log('first')
    }

    return (
        <div className='mx-10  mt-5'>
           <h3 className='text-center font-serif text-2xl font-semibold my-10'>Total Available Post:{media.length}</h3>
           <div className='grid grid-cols-2 md:grid-cols-4 '>
            {
                media.map(post=>
                    <div className="card w-72 bg-base-100 shadow-xl">
                    <div onClick={handleBtnDisable} className=" text-red-500  ">
                        <button  disabled={buttonDisabled} className='btn btn-outline text-3xl'><GiSelfLove/></button>
                  
                    <figure className='' ><img src={post.imageUrl} alt="Shoes" /></figure>
                   </div>
                  </div>
                    
                   )
            }
           </div>
        </div>
    );
};

export default Media;