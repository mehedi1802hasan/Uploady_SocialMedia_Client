import React, { useEffect, useState } from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Media = () => {
  const [media, setMedia] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState([]);

  useEffect(() => {
    // Load the disabled button states from localStorage on component mount
    const storedButtonDisabled = JSON.parse(localStorage.getItem('buttonDisabled')) || [];
    setButtonDisabled(storedButtonDisabled);

    fetch('http://localhost:4000/media')
      .then((res) => res.json())
      .then((data) => setMedia(data));
  }, []);

  const handleBtnDisable = (index) => {
    const updatedButtonDisabled = [...buttonDisabled];
    updatedButtonDisabled[index] = true;
    setButtonDisabled(updatedButtonDisabled);
    // Save the updated disabled button states to localStorage
    localStorage.setItem('buttonDisabled', JSON.stringify(updatedButtonDisabled));
  };

  return (
    <div className='mx-10 mt-5'>
      <h3 className='text-center font-serif text-2xl font-semibold my-10'>Total Available Post: {media.length}</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 '>
        {media.map((post, index) => (
          <div className="card w-72 bg-base-100 shadow-xl" key={index}>
            <figure>
              <img src={post.imageUrl} alt="image" />
            </figure>
            <div className='flex justify-between items-center mt-4 my-3 mx-5 72'>
              <h3 className="w-60">
                {post.textarea && post.textarea.split(' ').slice(0, 10).join(' ')}..
              </h3>
              <div onClick={() => handleBtnDisable(index)} className="text-red-500">
                <button disabled={buttonDisabled[index]} className='btn btn-outline text-3xl'>
                  <GiSelfLove />
                </button>
              </div>
            </div>
            <Link to={`/media/${post._id}`} className='btn btn-outline btn-sm'>details</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
