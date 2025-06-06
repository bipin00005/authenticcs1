#!/bin/bash

# Remove Housekeeping from service lists in all HTML files
for file in *.html; do
    # Remove the Housekeeping list item, including the newline
    sed -i '' '/<li><i class="fas fa-chevron-right"><\/i> Housekeeping<\/li>/d' "$file"
    sed -i '' '/<h4>Housekeeping<\/h4>/,/<\/li>/d' "$file"
done 