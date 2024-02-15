/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["canvas"],
  },
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|glb|mp3)$/,
      use: ["raw-loader", "glslify-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
