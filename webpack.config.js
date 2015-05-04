module.exports = {
  output: {
    path: __dirname + "/release/public/js",
    filename: "game.js"
  },
  module: {
    loaders: [
      {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'url?limit=10'
      ]}
    ]
  }
}
