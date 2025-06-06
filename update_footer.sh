#!/bin/bash

# Find all HTML files in the current directory
for file in *.html; do
    sed -i '' 's/<div class="footer-bottom">/<div class="designer-credit"><span>Designed by<\/span><a href="https:\/\/myauthdev.com" target="_blank"><img src="assets\/images\/adg-logo.png" alt="ADG" class="adg-logo"><\/a><\/div><div class="footer-bottom">/' "$file"
done 