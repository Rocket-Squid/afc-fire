import Airtable from "airtable";
import querystring from "querystring";

// Initialize Airtable base with your API key and base ID
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

// Refine fetchTable to include maxRecords and view
export const fetchTeam = async (
  tableName,
  maxRecords = 3,
  view = "Grid view"
) => {
  try {
    const records = await base(tableName)
      .select({
        maxRecords,
        view,
      })
      .all();

    // Map and return the records
    return records.map((record) => ({
      id: record.id,
      name: record.get("Name") || null,
      position: record.get("Position") || null,
      image: record.get("Image") ? record.get("Image")[0]?.url : null,
      bio: record.get("Bio") || null,
      experience: record.get("Years Experience") || null,
      email: record.get("Email") || null,
      phone: record.get("Phone") || null,
      location: record.get("Location") || null,
      slug: record.get("Slug") || null,
      status: record.get("Status") || null,
    }));
  } catch (error) {
    console.error("Error fetching team:", error);
    throw error; // Rethrow or handle as needed
  }
};

// Function to fetch a single team member by slug
export const fetchMemberBySlug = async (slug) => {
  try {
    const records = await fetchTeam("Team Info", 10);

    const member = records.find((record) => record.slug == slug) || null;

    return member;
  } catch (error) {
    console.error("Error fetching member by slug:", error);
    throw error; // Rethrow or handle as needed
  }
};
