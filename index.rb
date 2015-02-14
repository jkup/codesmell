require "sinatra"
require "twitter"
require "json"

set :server, 'webrick'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end

get '/' do
    send_file 'public/index.html'
end

get '/api.json' do
    client.search("%22code%20smell%22", result_type: "recent").take(10).collect { |tweet|
        {
            :text => tweet.text,
            :user_name => tweet.user.screen_name,
            :user_image => tweet.user.profile_image_url
        }
    }.to_json
end
