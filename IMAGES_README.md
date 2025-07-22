# LinkedIn Clone - Required Images

This document lists all the images you need to add to make the LinkedIn clone work with local images.

## 📁 Folder Structure

```
public/images/
├── profile/          # Profile picture & cover image
├── companies/        # Company logos for experience
├── universities/     # University logos for education  
├── certifications/   # Certification logos
├── interests/        # Interest/company logos
└── people/          # Random people images
```

## 🖼️ Required Images

### Profile Images
- `public/images/profile/profile.jpg` - Your profile picture (professional headshot)
- `public/images/profile/cover.jpg` - Cover photo (professional office/workspace background)

### Company Logos (Experience Section)
- `public/images/companies/mehta-prop-firm.jpg` - Mehta Prop Firm logo
- `public/images/companies/motilal-oswal.jpg` - Motilal Oswal Fin Corp logo
- `public/images/companies/sutherland.jpg` - Sutherland logo

### University Logos (Education Section)
- `public/images/universities/pune-university.jpg` - Savitribai Phule Pune University logo
- `public/images/universities/kbp-mahavidyalay.jpg` - KBP Mahavidyalay logo

### Certification Logos (Licenses Section)
- `public/images/certifications/aws.jpg` - AWS logo
- `public/images/certifications/google-cloud.jpg` - Google Cloud logo
- `public/images/certifications/mongodb.jpg` - MongoDB logo

### Interest Logos (Interests Section)
- `public/images/interests/graviton.jpg` - Graviton Research Capital LLP logo
- `public/images/interests/tower-research.jpg` - Tower Research Capital logo
- `public/images/interests/jump-trading.jpg` - Jump Trading logo
- `public/images/interests/fyers.jpg` - FYERS logo
- `public/images/interests/microsoft.jpg` - Microsoft logo
- `public/images/interests/tesla.jpg` - Tesla logo
- `public/images/interests/satya-nadella.jpg` - Satya Nadella photo
- `public/images/interests/netflix.jpg` - Netflix logo

### People Images (People Also Viewed & People You May Know)
- `public/images/people/person1.jpg` - Michael Chen
- `public/images/people/person2.jpg` - Emily Rodriguez
- `public/images/people/person3.jpg` - David Kim
- `public/images/people/person4.jpg` - Lisa Wang
- `public/images/people/person5.jpg` - James Wilson
- `public/images/people/person6.jpg` - Maria Garcia
- `public/images/people/person7.jpg` - Alex Thompson
- `public/images/people/person8.jpg` - Jessica Wu
- `public/images/people/person9.jpg` - Robert Martinez
- `public/images/people/person10.jpg` - Amanda Foster
- `public/images/people/person11.jpg` - Kevin Chang

## 📝 Image Requirements

### Profile Images
- **Profile Picture**: Square format, professional headshot, recommended size: 400x400px
- **Cover Photo**: Wide format, professional office/workspace, recommended size: 1200x400px

### Logos
- **Company/University/Certification Logos**: Square format, clear logos, recommended size: 200x200px
- **Interest Logos**: Square format, company logos or photos, recommended size: 200x200px

### People Images
- **People Photos**: Square format, professional headshots, recommended size: 200x200px

## 🔄 Fallback System

The code includes a fallback system:
- If an image fails to load, it will automatically show the original colored div with initials
- This ensures the layout doesn't break if images are missing

## 💡 Tips

1. **Use high-quality images** for the best visual appearance
2. **Keep file sizes reasonable** (under 500KB each) for fast loading
3. **Use consistent aspect ratios** for logos (square format recommended)
4. **Test the fallback system** by temporarily removing some images
5. **Optimize images** for web use (JPEG for photos, PNG for logos with transparency)

## 🚀 Getting Started

1. Create the folder structure as shown above
2. Add your images to the appropriate folders
3. Make sure the filenames match exactly (case-sensitive)
4. Start the development server to see the results

The LinkedIn clone will automatically use these local images once they're in place! 