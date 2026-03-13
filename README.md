# DR Infosoft Website – Engineering Specification

This README defines the **exact architecture, features, and structure** for rebuilding the DR Infosoft website.

The instructions below are written so AI tools and developers can **generate the full project structure and features automatically**.

---

# 1. Project Objective

Build a modern high-performance corporate website using **Next.js** with the following capabilities:

1. Marketing website
2. Blog system
3. Lead generation system
4. Admin dashboard
5. Role-based permissions
6. Internal CRM for leads
7. Newsletter subscription system
8. Career/job application system
9. Coupon management system
10. SEO optimized architecture

---

# 2. Core Technology Stack

Frontend Framework
Next.js 14 (App Router)

Styling
Tailwind CSS

Animation
Framer Motion

Database
PostgreSQL

ORM
Prisma

CMS
Sanity CMS

Authentication
NextAuth

Deployment
Vercel

---

# 3. System Architecture

Frontend: Next.js application

Backend: Next.js API routes

Database: PostgreSQL accessed via Prisma

Content Management: Sanity CMS

External services:

Email sending (SMTP or Resend)

---

# 4. Responsibilities of Each System

Sanity CMS stores:

Blog posts
Services
Portfolio items
Testimonials
Team members

PostgreSQL stores:

Users
Leads
Lead notes
Newsletter subscribers
Job applications
Coupons
Activity logs

---

# 5. Application Features

## Marketing Website

Pages required:

Home
About
Services
Products
Portfolio
Blog
Careers
Contact
Enquiry

---

## Blog System

Requirements:

Blog list page
Blog detail page
Category filtering
Tag filtering
SEO metadata per blog

Content is fetched from Sanity CMS.

---

## Leads CRM

When users submit enquiry forms:

Store data in PostgreSQL.

Lead fields:

name
email
phone
company
serviceInterested
message
source
status
assignedTo
createdAt

Lead statuses:

NEW
CONTACTED
CONVERTED
CLOSED

Admin users must be able to:

View leads
Update status
Add notes
Assign lead to team member
Export leads as CSV

---

## Newsletter System

Users can subscribe using email.

Fields:

email
subscribedAt

Admin dashboard must allow:

View subscribers
Export list

---

## Careers System

Job application form fields:

name
email
phone
resumeURL
coverLetter
positionApplied
createdAt

Admin dashboard must allow viewing applications.

---

## Coupon System

Coupon fields:

code
discountType
discountValue
expiryDate
active

Admin must be able to create and deactivate coupons.

---

# 6. User Roles

The system must support Role-Based Access Control.

Roles:

OWNER
TECHNICAL_TEAM
BLOG_ADMIN

Permissions:

OWNER
Full access

TECHNICAL_TEAM
Access leads, analytics, content

BLOG_ADMIN
Access blog only

---

# 7. Admin Dashboard Features

Admin panel path:

/admin

Sections required:

Dashboard
Leads
Blog
Users
Analytics
Newsletter
Careers
Coupons
Settings
Activity Logs

Dashboard must show:

Total leads
Total blog posts
New leads today
Recent activity

---

# 8. Homepage Components

Homepage must contain the following components.

Hero section

Large headline
CTA buttons
Animated background

Services section

Grid of service cards.

Statistics section

Animated counters showing company metrics.

Client logos

Auto-scrolling carousel.

Testimonials

Customer reviews slider.

Process section

Step-by-step company workflow.

Blog preview

Latest blog posts.

Footer

Company info
Navigation links
Social media

---

# 9. SEO Requirements

Each page must support:

Dynamic title
Meta description
OpenGraph tags
Canonical URL

Structured data:

Organization schema
BlogPosting schema
Breadcrumb schema
FAQ schema

Technical SEO:

robots.txt
dynamic sitemap.xml

---

# 10. Multi Language Support

Languages supported:

English
Hindi

Routing structure:

/en/page
/hi/page

Language preference stored in cookie.

---

# 11. Project Folder Structure

The project uses **Next.js App Router architecture** with clear separation between:

- UI components
- API routes
- database layer
- CMS integration
- admin dashboard

Below is the required directory structure.

```
drinfosoft-web/
│
├── app/                         # Next.js App Router
│   │
│   ├── (website)/               # Public marketing website
│   │   ├── page.tsx             # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── enquiry/
│   │       └── page.tsx
│   │
│   ├── admin/                   # Admin dashboard
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── leads/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── users/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── newsletter/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   ├── coupons/
│   │   │   └── page.tsx
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   │
│   ├── api/                     # Backend API routes
│   │   ├── auth/
│   │   │   └── route.ts
│   │   ├── leads/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── newsletter/
│   │   │   └── route.ts
│   │   ├── careers/
│   │   │   └── route.ts
│   │   ├── coupons/
│   │   │   └── route.ts
│   │   └── analytics/
│   │       └── route.ts
│   │
│   ├── layout.tsx               # Root layout
│   └── globals.css
│
├── components/                  # Reusable UI components
│   │
│   ├── ui/                      # Generic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── Input.tsx
│   │
│   ├── layout/                  # Site layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   │
│   ├── home/                    # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Clients.tsx
│   │   └── BlogPreview.tsx
│   │
│   ├── admin/                   # Admin UI components
│   │   ├── DashboardCard.tsx
│   │   ├── LeadsTable.tsx
│   │   ├── LeadDetails.tsx
│   │   └── UserTable.tsx
│   │
│   └── forms/                   # Form components
│       ├── ContactForm.tsx
│       ├── LeadForm.tsx
│       ├── NewsletterForm.tsx
│       └── JobApplicationForm.tsx
│
├── lib/                         # Utility libraries
│   │
│   ├── db.ts                    # Database connection
│   ├── prisma.ts                # Prisma client
│   ├── auth.ts                  # Authentication helpers
│   ├── sanity.ts                # Sanity CMS client
│   ├── email.ts                 # Email sending logic
│   └── utils.ts
│
├── prisma/                      # Prisma ORM configuration
│   │
│   └── schema.prisma            # Database schema
│
├── sanity/                      # Sanity CMS configuration
│   │
│   ├── schemas/
│   │   ├── blog.ts
│   │   ├── service.ts
│   │   ├── testimonial.ts
│   │   └── team.ts
│   │
│   └── sanity.config.ts
│
├── types/                       # TypeScript types
│   ├── lead.ts
│   ├── user.ts
│   └── blog.ts
│
├── middleware.ts                # Route protection
│
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── styles/
│   └── globals.css
│
├── .env.example                 # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

---

# Key Architectural Rules

1. **All marketing pages live in `(website)` folder.**

2. **Admin panel is isolated in `/admin`.**

3. **Backend logic only inside `/app/api`.**

4. **Database logic must be inside `/lib/prisma.ts`.**

5. **CMS queries must be inside `/lib/sanity.ts`.**

6. **Reusable UI components must go inside `/components/ui`.**

---

# 12. Database Schema (Prisma)

Tables required:

User
Lead
LeadNote
NewsletterSubscriber
JobApplication
Coupon
ActivityLog

Relationships:

User can be assigned many leads.

Lead can have multiple notes.

ActivityLog records admin actions.

---

# 13. Authentication

Use NextAuth.

Login page path:

/admin/login

Users must authenticate before accessing admin routes.

---

# 14. Security Requirements

Use role-based route protection.

Admin pages must check role permissions.

Sensitive actions must log events in ActivityLog.

---

# 15. Performance Requirements

Target:

95+ Lighthouse score.

Optimizations required:

Image optimization
Lazy loading
Static generation where possible
Route based code splitting

---

# 16. Deployment

Platform:

Vercel

Pipeline:

GitHub → Vercel CI/CD → Production

Database hosting:

Neon PostgreSQL.

---

# 17. Development Guidelines

All UI components must be reusable.

Use TypeScript for all code.

Follow modular architecture.

Separate UI, data access, and API logic.

---

# 18. Future Enhancements

Real-time lead notifications

AI lead scoring

Marketing automation

Advanced analytics dashboard

---

# 19. License

MIT
