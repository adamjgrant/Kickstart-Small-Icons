#!/usr/bin/perl
use strict;
use warnings;
use autodie; # die if problem reading or writing a file
use File::Slurp;

my @directories = read_dir "./svgs";

for my $directory (@directories) {
  if ($directory !~ ".DS_Store") {
    # print($directory . "\n");
    # For each directory in the svg dir...
  }
}
