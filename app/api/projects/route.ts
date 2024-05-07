import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"
export const GET = async () => {
  try { 
    const allUsers = await db.user.findMany();
    // console.log("All Users:",allUsers)
    return NextResponse.json({allUsers});
  } catch (error) {
    console.log("Error fetching data:");
  } 
}


