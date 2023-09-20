import { NextResponse } from "next/server";

export function POST(request) {
  const body = request
  // console.log(body)
  return NextResponse.json({ msg: "repuesta de servidor"})
}
