/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',

images:{
    domains: ['cdn.sanity.io'],
    remotePatterns:[
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: ''
        }
    ]
}

}

module.exports = nextConfig

