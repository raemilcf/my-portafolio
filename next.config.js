/** @type {import('next').NextConfig} */

const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/about',
            destination: '/',
          },
        ]
      },

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
}

module.exports = nextConfig


