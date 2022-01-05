import Products from './Products'

const ProductFeed = ({products}) => {
    return (
        // in prducts we have given flex-col , which make cards to take maximum available width to them , now here we are giving the maximum available width to those cards based on the device used that is , if small screen then only one card in a row , in large screen 3 cards in a row.
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-24'>

            {/* showing first 4 items   then we will show more after image tag , nut in md:screen , grid-flow-row-dense property of tailwind helps to put that colspan-2 card to use the space above image tag , do practicle by removing the grid-flow-row-dense property and see it on md:screen*/}
            {/* slice function helping in selecting index of elements to map at a time*/}
            {products.slice(0,4).map(({id,title,price,description,category,image})=>(
            
                <Products
                    key={id}
                    id={id} 
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}

            <img className='md:col-span-full w-full h-96 p-7' src="https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />


            {/* now showing a card , that span across two cards widths after the mid screen reaches */}
            <div className='md:col-span-2'>
                {products.slice(4,5).map(({id,title,price,description,category,image})=>(
                
                <Products
                    key={id}
                    id={id} 
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
                ))}
            </div>
            
            {/* showing again next 4 products */}
            {products.slice(5,9).map(({id,title,price,description,category,image})=>(
                
                <Products
                    key={id}
                    id={id} 
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
            
            {/* now showing a card , that span across two cards widths after the mid screen reaches */}
            <div className='md:col-span-2'>
                {products.slice(9,10).map(({id,title,price,description,category,image})=>(
                
                <Products
                    key={id}
                    id={id} 
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
                ))}
            </div>


            {/* showing again next remaining products */}
            {products.slice(11,products.length).map(({id,title,price,description,category,image})=>(
                
                <Products
                    key={id}
                    id={id} 
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                
                    
                />
                ))}

        </div>
    );
}

export default ProductFeed;
