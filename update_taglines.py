from bs4 import BeautifulSoup
import os

def update_tagline(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the tagline span
    tagline = soup.find('span', class_='tagline')
    if tagline and tagline.string == 'Your Space, Our Expertise':
        # Create new elements
        bold_text = soup.new_tag('span', attrs={'class': 'bold-text'})
        bold_text.string = 'Your Space'
        
        # Clear the tagline and add new content
        tagline.clear()
        tagline.append(bold_text)
        tagline.append(', Our Expertise')
    
    return str(soup)

# Process all HTML files
for filename in os.listdir('.'):
    if filename.endswith('.html'):
        print(f"Processing {filename}...")
        
        # Read file content
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Update content
        new_content = update_tagline(content)
        
        # Write updated content back to file
        with open(filename, 'w', encoding='utf-8') as file:
            file.write(new_content)
            
print("Done updating taglines.") 