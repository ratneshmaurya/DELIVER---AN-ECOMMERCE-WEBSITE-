import Head from 'next/head'
import Banner from '../components/Banner'
import Header from "../components/Header"
import ProductFeed from '../components/ProductFeed'

//we are directly destructing props from SSR (as we are egtting props:products from SSR )
const index = ({products}) => {
  return (
    <div className='bg-gray-200'>

    {/* making title name */}
      <Head> {/*next.js tag*/}
        <title>Deliver</title>
      </Head>


      {/* header */}
      <Header/>

      
      <main className='max-w-screen-2xl mx-auto'>{/* making max width to 2xl = 1536px */}
        <Banner/> {/* making a scrollable Banner */}
       
        <ProductFeed products={products}/>  {/* now showing some products below the banner , passing the props that got from SSR*/}

      </main>

    </div>
  )
}

export default index

//SSR from API to get data
export async function getServerSideProps(context){
  const products=await fetch("https://fakestoreapi.com/products").then((res)=>res.json());

  //to return anything from SSR to our browser , we have to use props
  return{
    props:{
      products,  //as products:products can be written as products 
    }
  } 
}
