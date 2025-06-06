#!/bin/bash

# Update all HTML files with the correct address
for file in *.html; do
    # Update the address in the footer contact info
    sed -i '' 's|123 Business District, Commercial City|1014 Uhrig rd, Lidcombe, Sydney, NSW 2141|g' "$file"
    
    # Update the address in any other locations (like Terms and Cookies pages)
    sed -i '' 's|<p><strong>Address:</strong> 123 Business District, Commercial City</p>|<p><strong>Address:</strong> 1014 Uhrig rd, Lidcombe, Sydney, NSW 2141</p>|g' "$file"
done 