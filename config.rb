activate :autoprefixer
activate :relative_assets
set :relative_links, true
activate :directory_indexes
activate :i18n, mount_at_root: :en

require "lib/image_helpers"
helpers ImageHelpers

require "lib/page_helpers"
helpers PageHelpers

set :css_dir, 'styles'
set :js_dir, 'scripts'
set :images_dir, 'images'

activate :external_pipeline,
  name: :webpack,
  command: build? ? "./node_modules/webpack/bin/webpack.js --bail --color -p" : "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :asset_hash
end