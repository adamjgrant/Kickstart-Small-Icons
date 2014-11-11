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
      f.puts "  <symbol>"
      addPathsToFile(f)
      f.puts "  </symbol>"
    end
    f.puts "</svg>\n"
  end
end

def addPathsToFile(f, dir = nil, className = nil)
  f.puts "    b\n"
end

build
