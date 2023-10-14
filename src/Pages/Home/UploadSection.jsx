import React from 'react';
import Swal from 'sweetalert2'

const UploadSection = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const textarea=form.textarea.value;
        const imageUrl=form.image.value;
        console.log(textarea,imageUrl);



        const addMedia={
            textarea,imageUrl
          }
          console.log(addMedia)
          fetch('http://localhost:4000/media',{
              method:"POST",
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(addMedia)
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
        <form onSubmit={handleSubmit} className='my-16'>


            <div>
                <textarea placeholder="enter the text" name='textarea' className="textarea textarea-bordered textarea-sm w-full max-w-xs" required ></textarea>
            </div>
            <div className='flex my-5'>
                <h3 className='border-2 border-green-500 rounded-3xl'>Image link</h3>
            <input type="text"  className='border-blue-500 border-2' name="image"  required />

            </div>
            <div className='hidden'>
                <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
            </div>
            <button className='btn btn-outline btn-secondary' type='submit'>Submit</button>
        </form>

    );
};

export default UploadSection;