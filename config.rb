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

helpers do
  def tlink
    "#{locale_root(I18n.locale)}"
  end

  def locale_root(locale)
    locale == :en ? '/' : "/#{locale}/"
  end

  def translated_url(locale)
    # Assuming /:locale/page
    page_name = current_page.path.split("/", 2).last.sub(/\..*$/, '')

    if page_name == "index" then
      return locale_root(locale.to_sym)
    end

    "#{locale_root(locale.to_sym)}#{page_name}"
  end

  def other_lang
    if I18n.locale == :en then
      "fr"
    else
      "en"
    end
  end

  def locale_yml
    I18n.backend.instance_variable_get(:@translations)[I18n.locale]
  end
end
