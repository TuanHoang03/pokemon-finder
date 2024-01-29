/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_API_POKEMON: "https://pokeapi.co/api/v2",
  },
  // reactStrictMode: false
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "raw.githubusercontent.com"
        }
    ]
}
};

export default nextConfig;
