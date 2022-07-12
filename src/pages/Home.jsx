import React from 'react'
import useGetProducts from '../hooks/useGetProducts'

const Home = () => {
  const { isLoading, isError, error } = useGetProducts();

  return (
    <div>
      Home {isLoading && "loading....."} 
      {isError && "error....."} 
      {error}
    </div>
  )
}

export default Home;