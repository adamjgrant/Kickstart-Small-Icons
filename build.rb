#!/usr/bin/env ruby

require 'pathname'

def build
  createResponsiveSVG

  # Debugging
  @svg_names.each do |svg_name|
    puts File.basename(svg_name, '.svg')
  end
end

def createResponsiveSVG
  @svg_names = Dir["./svgs/large/*.svg"]
  File.open("./public/responsive.svg", "w") do |f|
    f.truncate 0
    f.puts "<svg style=\"none\">\n"
    @svg_names.each do |svg_name|
      base_name = File.basename(svg_name, '.svg')
      f.puts "  <symbol id=\"#{base_name}\" viewBox=\"0 0 32 32\">"
      f.puts "    <svg width=\"32\" height=\"32\">"
      addPathsToFile(f, "large", base_name)
      addPathsToFile(f, "regular", base_name)
      addPathsToFile(f, "small", base_name)
      f.puts "    </svg>"
      f.puts "  </symbol>"
    end
    f.puts "</svg>\n"
  end
end

def addPathsToFile(f, dir = nil, className = nil)
  unless dir.nil?
    File.open("./svgs/#{dir}/#{className}.svg", 'r') do |d|
      while line = d.gets
        line = line.gsub %r{<svg([^<]+)>}, ''
        line = line.gsub '</svg>', ''
        line = line.gsub 'path fill', "path class=\"#{dir}\" fill"
        f.puts "      #{line}"
      end
    end
  end
end

build
