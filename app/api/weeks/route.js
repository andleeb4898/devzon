import { NextResponse } from "next/server";

export async function GET() {
  // Mock data - this would typically come from database
  const weeks = [
    {
      number: 1,
      tasks: [
        {
          type: "project",
          name: "Portfolio Website",
          description: "Create a basic portfolio website",
          points: 10,
        },
        {
          type: "coding",
          name: "Sorting Algorithm",
          description: "Implement a sorting algorithm",
          points: 10,
        },
        {
          type: "marketing",
          name: "Social Media Campaign",
          description: "Create a social media campaign",
          points: 10,
        },
      ],
    },
    {
      number: 2,
      tasks: [
        {
          type: "project",
          name: "E-commerce Site",
          description: "Build a basic e-commerce site",
          points: 10,
        },
        {
          type: "coding",
          name: "Data Structures",
          description: "Implement common data structures",
          points: 10,
        },
        {
          type: "marketing",
          name: "Email Campaign",
          description: "Create an email marketing campaign",
          points: 10,
        },
      ],
    },
  ];

  return NextResponse.json(weeks);
}
