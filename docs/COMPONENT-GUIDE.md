# Component Guide

## Overview

This guide documents all reusable components in the CMG Painting and Design website.

## UI Components

### Button

A versatile button component with multiple variants and sizes.

**Location**: `components/ui/Button.tsx`

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `children` | `ReactNode` | Required | Button content |
| `className` | `string` | `''` | Additional CSS classes |

**Usage**:
```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Get Free Quote
</Button>

<Button variant="secondary">
  Learn More
</Button>

<Button variant="ghost">
  Cancel
</Button>
```

**Variants**:
- **primary**: Blue background, white text
- **secondary**: Lighter blue, white text
- **ghost**: Transparent with border

---

### Logo

Company logo component with multiple display options.

**Location**: `components/ui/Logo.tsx`

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Logo size |
| `variant` | `'default' \| 'white'` | `'default'` | Color variant |
| `clickable` | `boolean` | `true` | Links to home |
| `className` | `string` | `''` | Additional CSS classes |

**Usage**:
```tsx
import Logo from '@/components/ui/Logo';

// Header logo
<Logo size="large" />

// Footer logo (dark background)
<Logo size="small" variant="white" />

// Non-clickable logo
<Logo clickable={false} />
```

---

### ServiceCard

Card component for displaying services.

**Location**: `components/ui/ServiceCard.tsx`

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Service title |
| `description` | `string` | Required | Service description |
| `href` | `string` | Required | Link destination |
| `icon` | `ReactNode` | Required | Icon element |
| `testId` | `string` | Optional | Test ID attribute |

**Usage**:
```tsx
import ServiceCard from '@/components/ui/ServiceCard';

<ServiceCard
  title="Interior Painting"
  description="Transform your indoor spaces..."
  href="/services/interior-painting"
  icon={<PaintIcon />}
  testId="service-card-interior"
/>
```

---

### ProjectCard

Card for displaying gallery projects.

**Location**: `components/ui/ProjectCard.tsx`

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Project title |
| `category` | `string` | Required | Project category |
| `location` | `string` | Required | Project location |
| `description` | `string` | Optional | Project description |
| `imageUrl` | `string` | Optional | Project image URL |
| `onClick` | `function` | Optional | Click handler |
| `testId` | `string` | Optional | Test ID attribute |

**Usage**:
```tsx
import ProjectCard from '@/components/ui/ProjectCard';

<ProjectCard
  title="Colonial Home Repaint"
  category="Exterior"
  location="Morris County, NJ"
  onClick={() => openLightbox()}
/>
```

---

### BackToTop

Floating button that appears on scroll.

**Location**: `components/ui/BackToTop.tsx`

**Props**: None (self-contained)

**Usage**:
```tsx
import BackToTop from '@/components/ui/BackToTop';

// Add to layout (already in app/layout.tsx)
<BackToTop />
```

**Behavior**:
- Hidden when scrollY < 300px
- Visible when scrollY >= 300px
- Smooth scroll to top on click

---

## Layout Components

### Header

Sticky navigation header with mobile support.

**Location**: `components/layout/Header.tsx`

**Features**:
- Sticky positioning
- Backdrop blur on scroll
- Desktop navigation links
- Mobile hamburger menu
- CTA button

**Test IDs**:
- `site-header` - Main header
- `primary-nav` - Navigation container
- `site-logo` - Logo wrapper
- `nav-link-*` - Navigation links
- `header-cta` - CTA button
- `mobile-menu-toggle` - Mobile menu button
- `mobile-menu` - Mobile menu panel
- `mobile-nav-link-*` - Mobile navigation links

---

### Footer

Site footer with 4-column layout.

**Location**: `components/layout/Footer.tsx`

**Sections**:
1. Brand & contact info
2. Services links
3. Company links
4. Service areas

**Test IDs**:
- `site-footer` - Main footer
- `footer-logo` - Logo wrapper
- `footer-services` - Services column
- `footer-company` - Company column
- `footer-areas` - Areas column
- `footer-social` - Social links

---

## Section Components

### Hero

Full-screen hero section for home page.

**Location**: `components/sections/Hero.tsx`

**Features**:
- Gradient background (image placeholder)
- Main heading
- Subheading
- Primary and secondary CTAs
- Location text

**Test IDs**:
- `home-hero` - Section wrapper
- `hero-heading` - Main h1
- `hero-cta-primary` - Get Quote button
- `hero-cta-secondary` - View Work button

---

### ServicesOverview

Grid of service cards for home page.

**Location**: `components/sections/ServicesOverview.tsx`

**Services**:
- Interior Painting
- Exterior Painting
- Powerwashing
- Light Carpentry

**Test IDs**:
- `services-overview` - Section wrapper
- `service-card-interior-painting`
- `service-card-exterior-painting`
- `service-card-powerwashing`
- `service-card-light-carpentry`

---

### WhyCMG

Features section showing company benefits.

**Location**: `components/sections/WhyCMG.tsx`

**Features**:
- Expert Craftsmanship
- Transparent Pricing
- On-Time Delivery
- Fully Insured

**Test IDs**:
- `why-cmg` - Section wrapper
- `why-cmg-card-1` through `why-cmg-card-4`

---

### CTA

Call-to-action section.

**Location**: `components/sections/CTA.tsx`

**Features**:
- Heading and description
- Primary CTA button
- Phone call button
- Service area text

**Test IDs**:
- `cta-section` - Section wrapper
- `cta-primary` - Get Quote button
- `cta-secondary` - Phone button

---

## Form Components

### ContactForm

Contact form with validation.

**Location**: `components/forms/ContactForm.tsx`

**Fields**:
- Name (required)
- Email (required)
- Phone (required)
- Service (optional)
- Message (optional)

**Validation**:
- Name: Min 2 characters
- Email: Valid email format
- Phone: Min 10 digits

**Test IDs**:
- `contact-form` - Form element
- `input-name` - Name input
- `input-email` - Email input
- `input-phone` - Phone input
- `input-service` - Service select
- `input-message` - Message textarea
- `submit-button` - Submit button
- `form-success` - Success message
- `form-error` - Error message
- `error-name`, `error-email`, `error-phone` - Field errors

---

## Adding New Components

### Component Template

```tsx
interface ComponentProps {
  // Define props
}

export default function Component({ ...props }: ComponentProps) {
  return (
    <div data-testid="component-name">
      {/* Component content */}
    </div>
  );
}
```

### Checklist

1. Create component file in appropriate directory
2. Add TypeScript interface for props
3. Add data-testid for testing
4. Use Tailwind classes for styling
5. Export from index if needed
6. Add tests in tests/ directory
7. Update this documentation
