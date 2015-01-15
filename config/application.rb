require File.expand_path('../boot', __FILE__)
require 'rails/all'

Bundler.require(*Rails.groups)

module FreakTags
  class Application < Rails::Application

  # Custom directories with classes and modules you want to be autoloadable.
  config.autoload_paths << "#{Rails.root}/app/models/enumerations" #19 - Enumerations - https://github.com/freaktags/core/issues/19

  # TimeZone
  config.time_zone = 'Brasilia'

  # Locales
  config.i18n.default_locale = config.i18n.locale = :"pt-BR"

  # Assets
  config.assets.paths << Rails.root.join('app', 'assets', 'components')

  config.generators do |g|
    g.test_framework :rspec,
      :fixtures => true,
      :view_specs => false,
      :helper_specs => false,
      :routing_specs => false,
      :controller_specs => true,
      :request_specs => true
    g.fixture_replacement :factory_girl, :dir => "spec/factories"
  end
	end
end
