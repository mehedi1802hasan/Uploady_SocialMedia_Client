import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const PostDetails = () => {
    const [comment,setComment]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/comment')
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    const loader=useLoaderData();
    const handleComment=(e)=>{
        e.preventDefault();
        // console.log('comment')
        const comment=e.target.comment.value;
        console.log(comment)

        const addComment={
            comment
          }
          console.log(addComment)
          fetch('http://localhost:4000/comment',{
              method:"POST",
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(addComment)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              if(data.insertedId){
                Swal.fire({
                  title: 'Great!',
                  text: 'your media Successfully Posted ',
                  icon: 'success',
                  confirmButtonText: 'Done'
                })
              }
          })



    }
    return (
        <div className='my-10'>
           <div className='mb-8 w-[500px] mx-auto'>
           <h3><img className='rounded-3xl' src={loader.imageUrl} alt="" /></h3>
           </div>
           <h3 className='w-[900px] mx-auto'><span className='font-bold font-serif text-2xl'>Text: </span> {loader.textarea}</h3>
           <div className='w-[900px] mx-auto mt-12 '>
            <h3 className='font-bold font-serif text-3xl '>Comment :</h3>
            <div>
            <form onSubmit={handleComment} className="form-control">
  <label className="label">
    <span className="label-text">Comment</span>
  </label>
  <label className="input-group">
    <input type="text" name='comment' placeholder="enter your comment" className="input input-bordered h-[70px] w-[500px]" />
    <button type='submit' className='bg-green-500 w-24 '>Send</button>
  </label>
</form>
<div>

{
    comment.map(cmnt=><>
    <h3>{cmnt.comment}</h3>
    </>)
}
</div>
            </div>
           </div>
        </div>
    );
};

export default PostDetails;