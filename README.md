# Aangan Salon - Frontend Deployment

A complete production-ready website for Aangan Salon, providing salon-at-home services in Noida, Ghaziabad, Indirapuram, and Delhi NCR. 

## Project Structure
- `src/pages`: Individual routes covering services, area-specific keywords, about us, etc.
- `src/components/layout`: Global layout components like Header, Footer, and sticky Mobile Navigation.
- `src/components/SEO.tsx`: Centralized SEO component maintaining unique meta limits and structured data.
- `public/`: Output assets including `robots.txt` and `sitemap.xml`.

## Setup & Local Development
1. Run `npm install`
2. Run `npm run dev` to start the local development server at `http://localhost:3000`.

## Connecting Google Apps Script Backend
Currently, the Contact form submits to a placeholder Web App URL (`PASTE_WEB_APP_ID`).
**Next Steps To Finalize:**
1. Create a new Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Create a `doPost(e)` function to handle the POST request from the form and append it to your sheet. Example code:
    ```javascript
    function doPost(e) {
      try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        sheet.appendRow([
          new Date(),
          data.name,
          data.phone,
          data.whatsapp,
          data.area,
          data.city,
          data.serviceCategory,
          data.specificService,
          data.date,
          data.timeSlot,
          data.notes
        ]);
        return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
      } catch(error) {
        return ContentService.createTextOutput(JSON.stringify({result: "error", error: error})).setMimeType(ContentService.MimeType.JSON);
      }
    }
    ```
4. Click **Deploy > New Deployment > Web App**. Grant "Anyone" permissions.
5. Copy the given Web App URL.
6. Open `src/components/BookingForm.tsx` (or wherever used) and replace `PASTE_WEB_APP_ID` with the actual script ID or fully replace the endpoint line with your generated URL.

## Deployment on Cloudflare Pages
This project is built explicitly to be statically-generated or as a Vite SPA and deployed seamlessly to Cloudflare Pages.

**Deploy via GitHub (Recommended):**
1. Push this repository to GitHub.
2. In Cloudflare Dashboard, go to **Workers & Pages > Create application > Pages > Connect to Git**.
3. Select this repository.
4. Set the Build Settings:
   - Framework preset: **Vite** (if listed) or **None**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click **Save and Deploy**. Cloudflare handles the rest and provisions a SSL-secured `*.pages.dev` URL (or you can map your custom domain, `aangansalon.com`).

**Deploy via CLI:**
You can deploy directly using wrangler:
1. `npm install -g wrangler`
2. `npm run build`
3. `wrangler pages deploy dist --project-name aangan-salon`
