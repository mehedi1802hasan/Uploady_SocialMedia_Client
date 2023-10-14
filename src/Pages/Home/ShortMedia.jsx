import React, { useEffect, useState } from 'react';

const ShortMedia = () => {
  const [mostLikedImages, setMostLikedImages] = useState([]);

  useEffect(() => {
    // Fetch the data from the specified URL
    fetch('https://socile-media-server-mm0pmc2ou-mehedi1802hasan.vercel.app/media')
      .then((response) => response.json())
      .then((data) => {
        // Sort the data based on the 'like' property in descending order
        const sortedData = data.sort((a, b) => b.like - a.like);
        // Get the top 3 most liked images
        const top3LikedImages = sortedData.slice(0, 3);

        // Set the top 3 most liked images in the component state
        setMostLikedImages(top3LikedImages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='p-10'>
      <h2 className='text-2xl font-serif  mb-7'>Top 3 Most Liked Media</h2>
   
   <div className='grid grid-cols-1 md:grid-cols-3 '>
     {mostLikedImages.map((item) => (
        <div className='' key={item._id }>

<div className="card card-compact md:w-96 bg-base-100 shadow-xl">
  <figure><img className='w-72 h-52' src={item.imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
   
    <p><span className='text-xl font-semibold mr-2'>Text:</span>{item.textarea.split(' ').slice(0, 20).join(' ')}...</p>
  
  </div>
</div>
         
        </div>
      ))}
     </div>

    </div>
  );
};

export default ShortMedia;