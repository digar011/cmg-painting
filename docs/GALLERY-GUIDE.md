# Gallery Management Guide

## Overview

The CMG Painting and Design website uses Sanity CMS to manage the project gallery. This guide explains how to add, edit, and manage gallery projects.

## Accessing Sanity Studio

1. Navigate to `/studio` on your website (e.g., `https://cmgpaintinganddesign.com/studio`)
2. Log in with your Sanity account credentials
3. You'll see the content management interface

## Architecture

### How It Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Sanity CMS    │────▶│   Next.js API   │────▶│   Gallery Page  │
│   (Studio)      │     │   (Fetch Data)  │     │   (Display)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **Content Creation**: Add projects in Sanity Studio
2. **Data Fetching**: Next.js fetches data using GROQ queries
3. **Display**: Gallery page renders projects with filtering

### File Structure

```
sanity/
├── env.ts                    # Environment variables
├── schema.ts                 # Schema export
├── schemas/
│   ├── index.ts             # Schema types export
│   └── project.ts           # Project document schema
└── lib/
    ├── client.ts            # Sanity client configuration
    ├── image.ts             # Image URL builder
    └── queries.ts           # GROQ queries
```

## Project Schema

Each gallery project has the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Project title |
| `slug` | slug | Yes | URL-friendly identifier |
| `category` | string | Yes | Interior, Exterior, Powerwashing, or Carpentry |
| `location` | string | No | Project location (e.g., "Morris County, NJ") |
| `description` | text | No | Detailed project description |
| `mainImage` | image | Yes | Primary project image |
| `gallery` | array of images | No | Additional project images |
| `featured` | boolean | No | Show on homepage (default: false) |
| `completedAt` | date | No | Project completion date |
| `order` | number | No | Display order (lower = first) |

## Adding a New Project

### Step 1: Create New Document

1. Click "Projects" in the sidebar
2. Click the "+" button or "Create new"
3. Fill in the required fields

### Step 2: Fill Project Details

**Title**
- Enter a descriptive title
- Example: "Colonial Home Exterior Painting"

**Slug**
- Click "Generate" to auto-create from title
- Or manually enter a URL-friendly slug
- Example: "colonial-home-exterior-2024"

**Category**
- Select one category:
  - **Interior** - Indoor painting projects
  - **Exterior** - Outdoor/house painting
  - **Powerwashing** - Cleaning projects
  - **Carpentry** - Trim, molding work

**Location**
- Enter the project location
- Format: "[Town], [County], NJ" or "[County], NJ"
- Example: "Randolph, Morris County, NJ"

**Description**
- Write 2-3 sentences about the project
- Include scope, materials, or special features
- Example: "Complete exterior repaint of a 3,500 sq ft colonial home. Used premium Sherwin-Williams Duration paint in Benjamin Moore White Dove with navy blue shutters."

### Step 3: Upload Images

**Main Image (Required)**
1. Click the image upload area
2. Drag and drop or browse for image
3. Use the hotspot tool to set focus point
4. Recommended size: 1200x800 pixels minimum

**Gallery Images (Optional)**
1. Click "Add item" in the gallery section
2. Upload additional project photos
3. Add before/after shots if available
4. Recommended: 3-6 images per project

### Step 4: Set Options

**Featured**
- Toggle ON to show on homepage
- Only a few projects should be featured

**Completion Date**
- Select the project completion date
- Used for sorting by date

**Display Order**
- Enter a number (lower = appears first)
- Leave empty for default ordering

### Step 5: Publish

1. Review all fields
2. Click "Publish" button
3. Changes appear on website within 60 seconds

## Image Guidelines

### Dimensions
- **Minimum**: 1200 x 800 pixels
- **Recommended**: 1920 x 1280 pixels
- **Aspect Ratio**: 4:3 or 16:9

### File Formats
- **Preferred**: JPEG, WebP
- **Supported**: PNG, GIF
- **Max Size**: 10MB

### Quality Tips
- Use good lighting
- Shoot in landscape orientation
- Include before/after pairs
- Capture details (trim, texture)
- Avoid blurry images

### Using Hotspot

The hotspot tool ensures the important part of your image is always visible:

1. Click on the image
2. Drag the circle to the focal point
3. Adjust the ellipse to cover the important area
4. Save changes

## Category Descriptions

### Interior
- Living room painting
- Bedroom painting
- Kitchen cabinet refinishing
- Bathroom painting
- Trim and molding work
- Accent walls

### Exterior
- Full house painting
- Deck staining
- Fence painting
- Shutter and trim painting
- Garage door painting

### Powerwashing
- Deck cleaning
- Driveway cleaning
- Siding washing
- Patio restoration
- Pre-paint cleaning

### Carpentry
- Crown molding installation
- Baseboard installation
- Door and window trim
- Wainscoting
- Chair rail molding

## GROQ Queries

The website uses these queries to fetch data:

### All Projects
```groq
*[_type == "project"] | order(order asc, completedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  location,
  description,
  mainImage,
  featured,
  completedAt
}
```

### Projects by Category
```groq
*[_type == "project" && category == $category] | order(order asc)
```

### Featured Projects
```groq
*[_type == "project" && featured == true] | order(order asc) [0...6]
```

## Troubleshooting

### Images Not Loading
1. Check image was uploaded successfully
2. Verify Sanity project ID in environment
3. Check network connectivity
4. Clear browser cache

### Project Not Appearing
1. Ensure project is "Published" (not draft)
2. Wait 60 seconds for cache to refresh
3. Check category filter on gallery page
4. Verify all required fields are filled

### Slow Loading
1. Optimize image file sizes
2. Use WebP format when possible
3. Check Sanity CDN status

### Draft vs Published
- Gray bar = Draft (not visible on website)
- Green bar = Published (visible on website)
- Click "Publish" to make changes live

## Best Practices

1. **Consistent Naming**: Use similar title formats
2. **Quality Images**: Only upload clear, well-lit photos
3. **Complete Information**: Fill all optional fields when possible
4. **Regular Updates**: Add new projects as they complete
5. **Feature Rotation**: Rotate featured projects periodically
6. **Location Format**: Be consistent with location format
