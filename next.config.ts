import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects(){
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["www.trimitra-perkasa.com"],
  },
  reactStrictMode: false,
};

export default nextConfig;
