import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(req) {
  const { projectId, youtubeLink, skills } = await req.json();

  await db.collection("submissions").insertOne({
    projectId,
    youtubeLink,
    skills,
    submittedAt: new Date(),
  });

  return NextResponse.json({ message: "Project submitted successfully!" });
}
