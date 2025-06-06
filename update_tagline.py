import os
import re

# Update tagline in all HTML files
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r') as file:
            content = file.read()
            
        # Replace the tagline with the new format
        new_content = re.sub(
            r'<span class="tagline">Your Space, Our Expertise</span>',
            '<span class="tagline"><span class="bold-text">Your Space</span>, Our Expertise</span>',
            content
        )
        
        with open(filename, 'w') as file:
            file.write(new_content) 