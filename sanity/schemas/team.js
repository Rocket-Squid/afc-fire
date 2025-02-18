import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
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
      name: "accreditation",
      title: "Accreditation",
      type: "string",
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
