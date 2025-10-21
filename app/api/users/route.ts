import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server"; // or your own auth function
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  // get current user
  const user = await currentUser();

  // check if user exists
  const userResult = await db
    .select()
    .from(usersTable)
    //@ts-ignore
    .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

  // if user does not exist, insert new user
  if (userResult?.length === 0) {
    const result = await db.insert(usersTable).values({
      name: user?.fullName ?? "NA",
      email: user?.primaryEmailAddress?.emailAddress ?? "",
      phone: user?.phoneNumbers[0]?.phoneNumber ?? "NA",
    });

    return NextResponse.json({ user: result });
  }

  // if user exists, return the existing user
  return NextResponse.json({ user });
}
