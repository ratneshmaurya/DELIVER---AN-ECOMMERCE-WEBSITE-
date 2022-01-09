import '../styles/globals.css'
import {SessionProvider as AuthProvider} from "next-auth/react"

//these two imports are for redux , (redux toolkit)
import store from '../redux/store'
import { Provider } from 'react-redux'


//read about sessionProvider from next-auth

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return(
    // we gave our entire website for authentication by next-auth.js
    <AuthProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>  
  )
};

export default MyApp;
