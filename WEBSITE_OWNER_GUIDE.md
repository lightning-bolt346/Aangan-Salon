# Aangan Salon Website Guide

Welcome to the Aangan Salon website! This guide will explain everything about the website's features, architecture, and what you need to do to make it live and production-ready.

## Overview

This website is a modern, fast, and SEO-friendly React application built specifically for a home-salon business in Delhi NCR. It uses:
- **React (Vite)** for lightning-fast page loads.
- **Tailwind CSS** for premium, responsive design.
- **React Router** for seamless page navigation.
- **Static architecture (SPA)** meaning it costs **$0 to host base files** on platforms like Cloudflare Pages, Vercel, or Netlify.

## Design Philosophy & Theme

The theme uses a warm, luxurious color palette (Deep Plum, Champagne Gold, Sand, Warm Ivory). 
- **Typography**: Serif fonts for headings to bring elegance, and clean sans-serif for body text.
- **Shapes**: Rounded, arched components to feel welcoming and feminine.
- **Vibe**: Calm, premium, transparent, and trustworthy.

## Core Features & Flow

1. **Service Browsing**: Customers can browse Services and Packages.
2. **Local SEO Landing Pages**: We've created specific pages for Noida, Ghaziabad, and Indirapuram. These rank well on Google when people search "salon at home in [area]".
3. **Booking Flow**: 
   - No payment gateway is required.
   - The user fills out a beautifully designed booking form.
   - The form submits silently via a Google Apps Script in the background.
   - The user sees a "Thank You" message and a button to message you directly on WhatsApp.
4. **Sticky CTAs**: Floating WhatsApp buttons and mobile bottom bars ensure that contact options are always visible but unobtrusive.
5. **Hygiene & Safety Flags**: Present across the site to build trust.

## What You Need to Do Before Launch

To make this website 100% functional and live, follow these steps:

### 1. Update Contact Information
Search through the codebase (especially in `Header.tsx`, `Footer.tsx`, and `Contact.tsx`) to replace:
- `+91 XXXXX XXXXX` with your actual WhatsApp / Calling number.
- `hello@aangansalon.com` with your real business email.
- Update social media links in the `Footer.tsx`.

### 2. Set Up Google Sheets for Booking Form
The booking form currently posts to `PASTE_WEB_APP_ID`. You need to:
1. Go to Google Sheets. Create a new sheet named "Aangan Bookings".
2. Go to `Extensions -> Apps Script`.
3. Paste standard Google Sheets POST handling script (search "HTML form to Google Sheets script").
4. Deploy as Web App -> Access: "Anyone".
5. Copy the Web App URL and replace `https://script.google.com/macros/s/PASTE_WEB_APP_ID/exec` in `src/components/BookingForm.tsx`.

### 3. Replace Placeholder Images
We have used high-quality Unsplash placeholder images. For a truly authentic feel, replace these `src` URLs with actual photos of your staff, your kits, and your clients (with permission). Authentic, well-lit smartphone photos convert better than stock photos.

### 4. Review Prices & Services
Check `src/data/services.ts`, `src/pages/Packages.tsx`, and `src/components/ServiceCards.tsx` to ensure all prices and descriptions match your actual offerings.

### 5. Deployment
We recommend **Cloudflare Pages** or **Vercel**:
1. Push your code to a GitHub repository.
2. Connect the repository to Cloudflare Pages.
3. Configure the build command as `npm run build` and output directory as `dist`.
4. Connect your custom domain (`aangansalon.com`).

### 6. Set Up Google Search Console
Once the website is live on your domain:
1. Go to Google Search Console.
2. Add your property.
3. Submit your sitemap (`https://aangansalon.com/sitemap.xml`).

## Future Scalability
- **Adding Payments**: If you want to accept upfront payments later, you can integrate Razorpay Links on the success page, or build a Node.js backend.
- **Adding More Areas**: Simply add another entry into `src/data/landingPages.ts` and the website will automatically generate an SEO-optimized landing page for that area.
