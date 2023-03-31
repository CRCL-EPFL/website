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

rss.entries.each do |entry|
    title = entry.title.encode('utf-8', :invalid => :replace, :undef => :replace, :replace => '-').gsub(":", " -")
    body = entry.content
    authors = entry.authors.join(', ') rescue ''
    entry_url = entry.urls.first
    date = entry.date_published
    updated = entry.last_updated
    date = updated if date.nil?
    date = dateadded if date.nil?

    filename = "#{output_location}/#{title.to_slug.sub(/-\Z/,"")}.md"
    description = Sanitize.fragment(entry.description)
    if File.exist?(filename)
        next
    else
        file = File.new(filename, "w+")
        file.puts "---"
        file.puts "title: \"#{title}\""
        file.puts "date: #{date}"
        file.puts "description: \"#{description}\""
        file.puts "link: \"#{entry_url}\""
        file.puts "category:"
        file.puts "emoji:"
        file.puts "---"
        file.close
    end
end