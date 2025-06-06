#!/bin/bash

# Update the Services section in all HTML files
for file in *.html; do
    sed -i '' '/<div class="footer-section">/,/<\/div>/ {
        /<h3>Services<\/h3>/,/<\/ul>/ c\
                    <h3>Services</h3>\
                    <ul>\
                        <li><a href="cleaning-services.html">Professional Cleaning</a></li>\
                        <li><a href="labour-hire.html">Commercial Labour Hire</a></li>\
                    </ul>
    }' "$file"
done 