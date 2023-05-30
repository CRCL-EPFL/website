require 'rubygems'
require 'open-uri'
require 'feed-normalizer'
require 'time'
require 'yaml'
require 'to_slug'
require 'sanitize'

output_location = "../collections/_news"
	
feed_url = "https://actu.epfl.ch/feeds/rss/crcl/en/"
name = "CRCL"

rss = FeedNormalizer::FeedNormalizer.parse URI.open(feed_url)
rss.parser = "SimpleRSS"   

# def parse_date(line)
#     line.match(/\d{2}\.\d{2}\.\d{2}/) { |m| Line.new(*m.captures)}
# end

rss.entries.each do |entry|
    title = entry.title.encode('utf-8', :invalid => :replace, :undef => :replace, :replace => '-').gsub(":", " -")
    body = entry.content
    # Get the first URL in the body to use
    link = URI.extract(body)[1]
    # Change the extracted URL to link to higher res version
    img = URI.extract(body)[0].gsub("324x182", "1108x622")

    filename = "#{output_location}/#{title.to_slug.sub(/-\Z/,"")}.md"
    # description = Sanitize.fragment(entry.description)
    description = entry.description

    m = body.match /(?<date>\d{2}\.\d{2}\.\d{2})/

    if File.exist?(filename)
        next
    else
        file = File.new(filename, "w+")
        file.puts "---"
        file.puts "title: \"#{title}\""
        file.puts "description: \"#{description}\""
        file.puts "img: \"#{img}\""
        file.puts "link: \"#{link}\""
        file.puts "feature:"
        file.puts "emoji:"
        file.puts "---"
        file.close
    end
end