import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Controls the order in which team members are displayed (lower numbers appear first)",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Used to generate the URL for the team member's page. Automatically generated from the name.",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "experience",
      title: "Years Experience",
      type: "number",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "Live" },
          { title: "Draft", value: "Draft" },
        ],
      },
      initialValue: "Draft",
    }),
    defineField({
      name: "accreditations",
      title: "Accreditations",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              {
                title: "Warrington Fire - FRACS Individual Scheme",
                value: "warrington-fracs",
              },
              { title: "IFSM Member", value: "ifsm-member" },
              { title: "IFSM Associate", value: "ifsm-associate" },
              { title: "IFSM Tier 1 - 2024", value: "ifsm-tier-1-2024" },
              { title: "IFSM Tier 2 - 2024", value: "ifsm-tier-2-2024" },
              { title: "IFSM Tier 3 - 2023", value: "ifsm-tier-3-2023" },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "fracsUrl",
      title: "FRACS Link",
      type: "url",
    }),
    defineField({
      name: "ifsmUrl",
      title: "IFSM Link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
});
