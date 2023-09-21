import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  console.log(data)
  return NextResponse.json({ msg: "repuesta de servidor"})
}
