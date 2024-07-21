import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { useGlobalContext } from "./Context"

const url = `https://api.unsplash.com/search/photos?page=1&client_id=${import.meta.env.VITE_API_KEY}&query=`
console.log(import.meta.env.VITE_API_KEY)
export default function Gallery(){
  const {search } = useGlobalContext()
  const {data,isError,isLoading} = useQuery({
    queryFn: ()=> axios(`${url}${search}`),
    queryKey:['images',search]
  })
  console.log(data)
  if(isLoading) return <section className="image-container"><h4>loading...</h4></section>
  if(isError) return <section className="image-container"><h4>not found please try again</h4></section>
  const results = data.data.results
  if(results.length<1) return <section className="image-container"><h4>no image match your search</h4></section>
  return <section className="image-container">
    {
      results.map(item=>{
        const url = item?.urls?.regular;
        return <img src={url} alt={item.alt_description} key={item.id} className="img" />
      })
    }
  </section>
}