import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { feedback: "No code provided." },
        { status: 400 }
      );
    }

    const deepSeekResponse = await axios.post(
      "https://api.deepseek.com/v1/analyze", // Ensure this URL is correct
      { code },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`, // Use environment variable
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({
      feedback: deepSeekResponse.data.feedback || "No feedback available.",
    });
  } catch (error: any) {
    console.error("DeepSeek API Error:", error.response?.data || error.message); // Log actual error

    return NextResponse.json(
      { feedback: "Error retrieving feedback." },
      { status: 500 }
    );
  }
}
