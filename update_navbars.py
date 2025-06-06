import os
import re

def update_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Update navbar logo
    navbar_pattern = r'<a href="index.html" class="logo">\s*<img src="assets/images/logo\.png" alt="Authentic Commercial Services">\s*</a>'
    navbar_replacement = '<a href="index.html" class="logo">\n                <img src="assets/images/logo.jpeg" alt="Authentic Commercial Services">\n                <span class="tagline">Your Space, Our Expertise</span>\n            </a>'
    content = re.sub(navbar_pattern, navbar_replacement, content)
    
    # Update footer logo
    footer_pattern = r'<img src="assets/images/logo\.png" alt="Authentic Commercial Services" class="footer-logo">'
    footer_replacement = '<img src="assets/images/logo.jpeg" alt="Authentic Commercial Services" class="footer-logo">'
    content = re.sub(footer_pattern, footer_replacement, content)
    
    with open(file_path, 'w') as f:
        f.write(content)

# Update all HTML files
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        update_file(filename)
        print(f"Updated {filename}") 