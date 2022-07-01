import {useEffect} from 'react'
import FetchComponent from './Component/fetch/FetchComponent';
import ShowComponent  from './Component/show/ShowComponent'
import Footer from './Component/footer/footer';
import { useFavicon } from 'react-haiku';

function App() {
  const { setFavicon } = useFavicon();

  useEffect(() => {
    setFavicon(`https://cdn-icons-png.flaticon.com/512/869/869869.png`);
  }, [])
  
  return (
    <>
    
      <FetchComponent/>
      <hr/>
      <ShowComponent/>
      <Footer/>
    </>
  )
}

export default App