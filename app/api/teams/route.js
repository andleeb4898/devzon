import { NextResponse } from "next/server";

export async function GET() {
  // Mock data - this would typically come from  database
  const teams = [
    {
      id: 1,
      name: "Alpha",
      members: ["member1@example.com", "member2@example.com"],
    },
    {
      id: 2,
      name: "Beta",
      members: ["member3@example.com"],
    },
  ];

  return NextResponse.json(teams);
}
