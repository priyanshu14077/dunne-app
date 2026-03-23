# Dunne Customizer App

This is a Next.js web application that powers the custom jewelry builder for **Dunne**.

Give A Visit @ [https://makeyourown.dunne.co.in/apps/customizer](https://makeyourown.dunne.co.in/apps/customizer)

## System Architecture

The application is built on a modern serverless architecture utilizing Next.js App Router, integrating several external services to handle media storage, notifications, and e-commerce checkouts.

### Microservices & Integrations
1. **Frontend / Core Logic**: Next.js (React 19)
   - Handles the interactive 2D canvas for placing charms on base jewelry.
   - Manages state and calculations prior to checkout.
2. **AWS S3 & CloudFront (Storage & CDN)**
   - Customizer preview images are generated on the client, and uploaded to the `dunne-assets-prod` S3 bucket via the `/api/upload-preview` route.
   - Assets are served securely and quickly through a CloudFront distribution.
3. **AWS SES (Simple Email Service)**
   - Sends real-time email notifications to administrators (`Dunnemedia1212@gmail.com`) when a user uploads a new design, embedding the S3 URL and design metadata.
4. **Shopify Integration**
   - Headless cart integration: The app generates a customized Shopify cart permalink containing product IDs, variant IDs, and custom attributes, seamlessly redirecting the user to the Shopify checkout flow.
5. **Supabase (Database/Auth)**
   - Configured for PostgreSQL database operations and authentication, utilizing `@supabase/supabase-js`.
6. **Meta Pixel (Tracking)**
   - Used for tracking user events (like "Add to Cart") to optimize marketing campaigns.

### Architecture Diagram

```mermaid
graph TD
    %% Styling
    classDef user fill:#6366f1,stroke:#4f46e5,stroke-width:2px,color:#fff
    classDef frontend fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#fff
    classDef backend fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    classDef external fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    classDef storage fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff

    User([👤 User / Browser]):::user
    Admin([✉️ Dunne Admin Email]):::user

    subgraph Next.js Application
        UI[🖥️ Frontend UI<br/>React/Tailwind]:::frontend
        Canvas[🎨 Jewelry Canvas<br/>Customizer]:::frontend
        API_Upload[⚙️ API: /upload-preview<br/>Node.js Serverless]:::backend
    end

    subgraph AWS Cloud
        S3[(📦 AWS S3<br/>dunne-assets-prod)]:::storage
        CF((🌍 AWS CloudFront<br/>CDN)):::storage
        SES[📧 AWS SES<br/>Email Service]:::storage
    end

    subgraph External Platforms
        Shopify[🛍️ Shopify<br/>Cart & Checkout]:::external
        Supabase[(🗄️ Supabase<br/>Database & Auth)]:::external
        Meta[📊 Meta Pixel<br/>Analytics]:::external
    end
    
    %% Flows
    User -->|Interacts with| UI
    UI -->|Renders & Configures| Canvas
    UI -->|Generates Base64 & Uploads| API_Upload
    
    API_Upload -->|PutObject Image| S3
    S3 -->|Serves Assets| CF
    UI -->|Fetches UI Assets| CF
    
    API_Upload -->|Triggers Email w/ Preview| SES
    SES -.->|Notifies| Admin
    
    UI -->|Redirects with Cart URL| Shopify
    UI -->|Tracks 'Add to Cart'| Meta
    
    UI -.->|Reads/Writes State| Supabase
```