import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Production host is www.restorasibumi.org; send apex traffic there so
    // both hosts do not serve duplicate 200 responses.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "restorasibumi.org" }],
        destination: "https://www.restorasibumi.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
