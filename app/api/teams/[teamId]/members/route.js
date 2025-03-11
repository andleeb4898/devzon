import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { teamId } = params;
  const { email } = await request.json();

  // Mock implementation - this would typically update database
  return NextResponse.json({
    success: true,
    message: `Added ${email} to team ${teamId}`,
  });
}

export async function DELETE(request, { params }) {
  const { teamId } = params;
  const { email } = await request.json();

  // Mock implementation - this would typically update  database
  return NextResponse.json({
    success: true,
    message: `Removed ${email} from team ${teamId}`,
  });
}
