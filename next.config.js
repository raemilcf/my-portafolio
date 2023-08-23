/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production'
 

const nextConfig = {
output: 'export',
    
basePath: '/github-pages',

images:{
    domains: ['cdn.sanity.io'],
    remotePatterns:[
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: ''
        }
    ]
},
assetPrefix: isProd ? '/my-portafolio' : undefined,

}

module.exports = nextConfig


