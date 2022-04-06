import { useNavigate } from 'react-router-dom';
import cycle from '../../assets/images/cycle.png'
import useReview from '../../hooks/useReview';
const Home = () => {
  const [reviews] = useReview()
  const navigrate = useNavigate();
  const handleReviews = ()=>{
    navigrate("/reviews")
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-16 justify-center items-center px-[15%] mt-[90px]">
        <div>
         <h1 className="text-4xl xl:text-5xl font-bold">
            The Cycle Mart
          </h1>
          <h1 className="text-blue-600 my-3 md:my-5 text-4xl  xl:text-5xl font-bold">
          Premium Cycle Brand
          </h1>
          <p>Cycle Mart is an premium bicycle brand and we are currently World's fastest growing bicycle company. Created to empower the world best bicycle rider with highly durable. </p>
          <button className='mt-4 px-5 py-3 rounded-lg bg-blue-600 text-white text-xl'>Explor More</button>
        </div>
        <div>
          <img src={cycle} alt="cycle" />
        </div>
      </div>
      <div className='my-16 px-[15%]'>
        <h1 className='text-3xl font-bold  text-center mb-10'>Our Custmmers Reviews</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {
          
          reviews.slice(0, 3).map(review =>
            <div key={review._id} className='shadow-lg rounded p-10 shadow-gray-200 border-2 border-yellow-300'>           
            <h1 className='text-2xl font-bold'>{review.author}</h1>
            <p className='my-2'>{review.text}</p>
            <p className='text-right'>Rating: {review.rating} star</p>
             </div>
            )
          }
          </div>
          <div className='flex justify-center items-center mt-5'>

          <button onClick={handleReviews} className='mt-4 px-8 py-3 rounded-lg bg-blue-600  text-white text-xl hover:bg-blue-600'>Show More</button>
          </div>
      </div>
    </>
  );
};

export default Home;
