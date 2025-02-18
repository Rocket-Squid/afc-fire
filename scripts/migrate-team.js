const { createClient } = require("@sanity/client");
const fs = require("fs");
const { parse } = require("csv-parse/sync");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-03-01",
  useCdn: false,
});

const convertAccreditations = (accreditationString) => {
  if (!accreditationString) return [];

  const accreditations = accreditationString.split(",").map((a) => a.trim());
  return accreditations
    .map((accred) => {
      switch (accred) {
        case "Warrington Fire - FRACS Individual Scheme":
          return "warrington-fracs";
        case "IFSM Member":
        case "IFSM Member ":
          return "ifsm-member";
        case "IFSM Associate":
          return "ifsm-associate";
        case "IFSM Tier 1 - 2024":
          return "ifsm-tier-1-2024";
        case "IFSM Tier 2 - 2024":
          return "ifsm-tier-2-2024";
        case "IFSM Tier 3 - 2023":
          return "ifsm-tier-3-2023";
        default:
          console.warn(`Unknown accreditation: ${accred}`);
          return null;
      }
    })
    .filter(Boolean);
};

const cleanCsvContent = (content) => {
  // Remove any BOM characters
  content = content.replace(/^\uFEFF/, "");

  // Split into lines
  const lines = content.split("\n");

  // Process each line
  const cleanedLines = lines.map((line) => {
    // Remove any trailing commas
    line = line.replace(/,\s*$/, "");
    return line;
  });

  return cleanedLines.join("\n");
};

async function migrateTeam() {
  try {
    // Read and clean CSV
    const rawCsvContent = fs.readFileSync(
      "./lib/Team Info-Grid view.csv",
      "utf-8"
    );
    const cleanedCsvContent = cleanCsvContent(rawCsvContent);

    const records = parse(cleanedCsvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    console.log(`Found ${records.length} team members to migrate`);

    const teamMembers = records.filter(
      (record) => record.Name && record.Name.trim() && record.Status === "Live"
    );

    console.log(`Processing ${teamMembers.length} live team members`);

    for (const record of teamMembers) {
      const document = {
        _id: `team-${record.Slug}`,
        _type: "team",
        name: record.Name,
        position: record.Position,
        bio: record.Bio,
        experience: record["Years Experience"]
          ? parseInt(record["Years Experience"])
          : null,
        email: record.Email,
        phone: record.Phone,
        location: record.Location,
        status: record.Status,
        slug: {
          _type: "slug",
          current: record.Slug,
        },
        accreditations: convertAccreditations(record.Accreditation),
        fracsUrl: record["FRACS Link"],
        ifsmUrl: record["IFSM Link"],
      };

      try {
        // Create document
        const result = await client.createOrReplace(document);
        console.log(`✓ Migrated ${record.Name}`);

        // If there's an image URL, we'll need to handle that separately
        if (record.ImageURL) {
          console.log(`  Handling image for ${record.Name}...`);
          // Note: You'll need to handle image upload separately as it requires downloading
          // the image first and then uploading to Sanity's asset pipeline
        }
      } catch (error) {
        console.error(`✗ Failed to migrate ${record.Name}:`, error.message);
      }
    }
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  }
}

// Run migration
migrateTeam().catch(console.error);
