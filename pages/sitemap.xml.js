import { fetchTeam } from "@/lib/sanity";

const EXTERNAL_DATA_URL = "https://afcfire.co.uk";

// Format date to YYYY-MM-DD format for sitemap
const formatDate = (date) => {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  return formatDate(new Date());
};

function generateSiteMap(teamMembers) {
  const currentDate = getCurrentDate();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/fire-risk-assessment</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/team</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     ${
       teamMembers && teamMembers.length > 0
         ? teamMembers
             .filter((member) => member && member.slug) // Ensure member and slug exist
             .map(({ slug, _updatedAt }) => {
               // Use the member's update date if available, otherwise use current date
               const lastmod = _updatedAt
                 ? formatDate(_updatedAt)
                 : currentDate;
               return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/team/${slug}`}</loc>
           <lastmod>${lastmod}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
             })
             .join("")
         : ""
     }
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  let teamMembers = [];

  try {
    // Fetch team members from Sanity
    teamMembers = await fetchTeam(100);
  } catch (error) {
    console.error("Error fetching team members for sitemap:", error);
    // Continue with empty team members array
  }

  // Generate the XML sitemap with the team data
  const sitemap = generateSiteMap(teamMembers);

  res.setHeader("Content-Type", "text/xml");
  // Add cache control header to cache the sitemap for 1 day (86400 seconds)
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, stale-while-revalidate=43200"
  );
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
