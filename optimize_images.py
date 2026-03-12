import os
from PIL import Image

def optimize_images(directory):
    total_savings = 0
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.heic')):
                filepath = os.path.join(root, file)
                try:
                    original_size = os.path.getsize(filepath)
                    
                    # Skip if already small enough (e.g., < 500KB)
                    if original_size < 500 * 1024:
                        print(f"Skipping {file} (already optimized or small): {original_size/1024:.1f}KB")
                        continue

                    img = Image.open(filepath)
                    
                    # Resize if too large (max width 1920px)
                    if img.width > 1920:
                        ratio = 1920 / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                    
                    # Convert HEIC to JPG (if supported by PIL/pillow-heif, otherwise skip/warn)
                    # For simplicity, we'll focus on standard formats. If HEIC opens, save as JPG.
                    output_path = filepath
                    if file.lower().endswith('.heic'):
                        output_path = os.path.splitext(filepath)[0] + ".jpg"

                    # Save with optimization
                    # optimize=True, quality=80 is usually a sweet spot
                    img.save(output_path, "JPEG", optimize=True, quality=80)
                    
                    new_size = os.path.getsize(output_path)
                    savings = original_size - new_size
                    total_savings += savings
                    
                    print(f"Optimized {file}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Saved {savings/1024:.1f}KB)")
                    
                    # If we converted HEIC, maybe remove original? Let's keep it safe for now.
                    
                except Exception as e:
                    print(f"Error processing {file}: {e}")

    print(f"\nTotal space saved: {total_savings / (1024*1024):.2f} MB")

if __name__ == "__main__":
    # Optimize 'images' directory
    base_dir = os.path.join(os.getcwd(), 'images')
    if os.path.exists(base_dir):
        print(f"Starting optimization in {base_dir}...")
        optimize_images(base_dir)
    else:
        print(f"Directory {base_dir} not found.")
