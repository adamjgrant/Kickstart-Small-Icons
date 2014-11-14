#!/usr/bin/env ruby

require 'pathname'
require 'json'

def build
  @svg_names = Dir.entries("./lib/svgs/lg").reject{|entry| entry =~ /^\.{1,2}$/}

  # Edit array to only contain root name
  @svg_names.map! {|item| File.basename(item, '.svg')}
  createIconList
  createResponsiveSVG
  createSingleFidelitySVG('sm')
  createSingleFidelitySVG('rg')
  createSingleFidelitySVG('lg')

  # Debugging
  @svg_names.each do |svg_name|
    puts svg_name
  end
end

def createIconList
  File.open("./icons.js", "w+") do |f|
    f.puts "var icons = #{@svg_names.to_json}"
    f.puts "\n"
    f.puts "module.exports = icons;"
  end
end

def createResponsiveSVG
  # Write to responsive svg file
  File.open("./responsive.svg", "w+") do |f|
    f.truncate 0
    f.puts "<svg style=\"display: none\">\n"
    @svg_names.each do |svg_name|
      f.puts "  <symbol id=\"#{svg_name}\" viewBox=\"0 0 32 32\">"
      f.puts "    <svg width=\"32\" height=\"32\">"
      addPathsToFile(f, "lg", svg_name)
      addPathsToFile(f, "rg", svg_name)
      addPathsToFile(f, "sm", svg_name)
      f.puts "    </svg>"
      f.puts "  </symbol>"
    end
    f.puts "</svg>\n"
  end
end

def createSingleFidelitySVG(fidelity = 'sm')
  File.open("./icon-#{fidelity}.svg", "w+") do |f|
    f.truncate 0
    f.puts "<svg style=\"display: none\">\n"
    @svg_names.each do |svg_name|
      f.puts "  <symbol id=\"#{svg_name}\" viewBox=\"0 0 32 32\">"
      f.puts "    <svg width=\"32\" height=\"32\">"
      addPathsToFile(f, fidelity, svg_name)
      f.puts "    </svg>"
      f.puts "  </symbol>"
    end
    f.puts "</svg>\n"
  end
end

def addPathsToFile(f, dir = nil, className = nil)
  File.open("./lib/svgs/#{dir}/#{className}.svg", 'r') do |d|
    while line = d.gets
      line = line.gsub %r{<svg([^<]+)>}, ''
      line = line.gsub '</svg>', ''
      unless dir.nil?
        line = line.gsub 'path fill', "path class=\"#{dir}\" fill"
        line = line.gsub 'g fill', "g class=\"#{dir}\" fill"
        line = line.gsub 'rect fill', "rect class=\"#{dir}\" fill"
      end
      f.puts "      #{line}"
    end
  end
end

build
