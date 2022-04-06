import { useEffect, useState } from "react"

 const useReview = ()=>{
    const [reviews, setReviews] = useState([])
    const getRevies = async ()=>{
        const response =  await fetch('reviews.json')
        setReviews(await response.json())
    } 
    useEffect(()=>{getRevies()},[])
    return [reviews, setReviews]
}
export default useReview