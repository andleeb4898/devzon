import { NextResponse } from 'next/server';
import connectDB from '../../../../backend/db/connect'; // Adjusted import
import Project from '../../../../backend/models/project'; // Import the Project model

export async function POST(request) {
  const { userId, projectData } = await request.json();

  // Connect to the database
  await connectDB(process.env.MONGODB_URI); // Ensure to use your MongoDB URI

  // Save the project to the database
  const newProject = await Project.create({ // Use the Project model
    userId,
    ...projectData,
  });

  return NextResponse.json(newProject);
}
