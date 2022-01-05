//below two imports are for react-inbuilt-carousel 
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        //h-res_screen is utility height created by me ( see in tailwind config file)
        <div className='relative' >

            {/* making a div of hight 32 just for imaginary hidden container for gradient from back to white and to show on carousel  */}
            <div className=" absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}>
                
                <div>
                    {/* lazy loading is important , so that it does not slow down your user experience , becoz it helps in loading only when the image comes on screen , does not load on start of website */}
                    <img loading="lazy" className='h-res_screen object-cover'  src="https://images.unsplash.com/photo-1616781678220-15abd16b61e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXN8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=600&q=60" alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-res_screen object-cover' src="https://images.unsplash.com/photo-1537081521012-e2f7747a84e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGl2ZXJ5fGVufDB8MHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=600&q=60"  alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-res_screen object-cover' src="https://images.unsplash.com/photo-1525720171842-a4992f22f70d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3MlMjBpbiUyMHNob3B8ZW58MHwwfDB8YmxhY2t8&auto=format&fit=crop&w=600&q=60" width="100%" height="100%" alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-res_screen object-cover' src="https://images.unsplash.com/photo-1636996943952-065d0739e1b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0cyUyMGluJTIwc2hvcHxlbnwwfDB8MHxibGFja3w%3D&auto=format&fit=crop&w=600&q=60" width="100%" height="100%" alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-res_screen object-cover' src="https://images.unsplash.com/photo-1541941702428-22609a10cb9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlcyUyMGluJTIwc2hvcHxlbnwwfDB8MHxibGFja3w%3D&auto=format&fit=crop&w=600&q=60" width="100%" height="100%" alt="image" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
