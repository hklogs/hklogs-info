import os
import glob
from PIL import Image

def crop_screenshots():
    public_dir = '/home/haze/Projects/My Portfolio/unified-portfolio/public'
    search_path = os.path.join(public_dir, 'Screenshot*.png')
    files = glob.glob(search_path)
    
    print(f"Found {len(files)} screenshots to crop.")
    
    for filepath in files:
        try:
            with Image.open(filepath) as img:
                w, h = img.size
                # Crop top (tabs, search bar) and bottom (taskbar)
                # Typically, top chrome takes ~85px on 1366x768, let's crop 85px from top
                # and 40px from bottom.
                box = (0, 85, w, h - 40)
                cropped_img = img.crop(box)
                cropped_img.save(filepath)
                print(f"Successfully cropped: {os.path.basename(filepath)}")
        except Exception as e:
            print(f"Error cropping {filepath}: {e}")

if __name__ == "__main__":
    crop_screenshots()
