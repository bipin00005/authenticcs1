#!/bin/bash

# Update tagline in all HTML files
for file in *.html; do
    awk '
        {
            if ($0 ~ /<span class="tagline">Your Space, Our Expertise<\/span>/) {
                print "                <span class=\"tagline\"><span class=\"bold-text\">Your Space</span>, Our Expertise</span>"
            } else {
                print $0
            }
        }
    ' "$file" > temp.html && mv temp.html "$file"
done 