module.exports = {
  reactStrictMode: true,
  images:{
    domains:['cdn.pixabay.com' , 'fakestoreapi.com','images.unsplash.com']
  },


  // only adding here stripe public key(from env.local file) not private key
  env:{
    stripe_public_key : process.env.STRIPE_PUBLIC_KEY
  }
}
