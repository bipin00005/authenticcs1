#!/bin/bash

# Update all HTML files to add Housekeeping to service lists
for file in *.html; do
    # Add Housekeeping to Commercial Labour Hire service list if it doesn't exist
    perl -i -pe 's/(Commercial Labour Hire.*?<ul class="service-list">.*?)<\/ul>/\1<li><i class="fas fa-chevron-right"><\/i> Housekeeping<\/li>\n                    <\/ul>/s' "$file"
done 