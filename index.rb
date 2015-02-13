require "sinatra"
require "twitter"
require "sinatra/json"

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
    statuses = Array.new
    client.search("%22code%20smell%22", result_type: "recent").take(3).collect do |tweet|
        status = {
            :text => tweet.text,
            :user_name => tweet.user.screen_name,
            :user_image => tweet.user.profile_image_url
        }.to_json
        statuses.push(status)
        puts statuses
    end
end
