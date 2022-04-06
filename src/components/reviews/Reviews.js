import React from 'react'
import useReview from '../../hooks/useReview'

const Reviews = () => {
    const [reviews] = useReview()
  return (
    <>
       <div className='my-16 px-[15%]'>
        <h1 className='text-3xl font-bold  text-center mb-10'>Our Custmmers Reviews</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {
          
          reviews.map(review =>
            <div key={review._id} className='shadow-lg rounded p-10 shadow-gray-200 border-2 border-yellow-300'>           
            <h1 className='text-2xl font-bold'>{review.author}</h1>
            <p className='my-2'>{review.text}</p>
            <p className='text-right'>Rating: {review.rating} star</p>
             </div>
            )
          }
          </div>
      </div>
    </>
  )
}

export default Reviews