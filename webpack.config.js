module.exports = {
  // Các tùy chọn cấu hình Webpack khác...
  module: {
    rules: [
      // Các quy tắc xử lý tệp khác...
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/3d/", // Đường dẫn đầu ra cho các tệp được xử lý
            },
          },
        ],
      },
    ],
  },
};
