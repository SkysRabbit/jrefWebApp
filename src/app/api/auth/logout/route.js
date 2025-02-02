import { NextResponse } from "next/server";
import { endSessionForUser } from "@/app/lib/sessions";

export async function POST(request) {
   await endSessionForUser();
   return NextResponse.json({}, {status: 200});
}