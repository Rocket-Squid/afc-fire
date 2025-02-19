# AFC Fire Website

This is the codebase for [AFC Fire](https://www.afcfire.co.uk/), a professional fire safety consultancy specializing in fire risk assessments, fire door inspections, and more.

## Overview

AFC Fire's website showcases their professional team of fire safety experts and their comprehensive range of fire safety services. The site emphasizes their commitment to maintaining the highest standards in fire safety assessment and consultation.

## Tech Stack

- **Framework**: Next.js 13.4
- **Styling**: SASS/SCSS with responsive design
- **Content Management**: Sanity CMS
- **Deployment**: Vercel

### Content Management

The website uses Sanity CMS for managing team member profiles, featuring:

- Dynamic team member profiles with customizable display order
- Comprehensive accreditation management including:
  - Warrington Fire - FRACS Individual Scheme
  - IFSM Membership levels
  - IFSM Tier certifications (1-3)
- Integrated professional links (FRACS, IFSM)
- Image management with hotspot functionality

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Access Sanity Studio
Visit http://localhost:3000/studio
```

## Environment Variables

Required environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-api-token"
```

## Features

- Responsive design
- Dynamic team member profiles
- Professional accreditation display
- Integrated contact information
- SEO optimized
- Content management through Sanity Studio
