#!/bin/bash

# Remove Housekeeping entries from all HTML files
for file in *.html; do
    perl -0777 -i -pe 's/<li><i class="fas fa-chevron-right"><\/i> Housekeeping<\/li>\n//g' "$file"
done 