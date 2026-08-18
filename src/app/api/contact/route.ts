import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organisation, enquiryType, message, privacy } = body

    // Basic validation
    if (!name || !email || !enquiryType || !message || !privacy) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Send email to appropriate team based on enquiryType
    // 2. Store in CRM/database
    // 3. Send auto-reply to user
    // 4. Log for audit

    // For now, log to console (replace with actual implementation)
    console.log("Contact form submission:", {
      name,
      email,
      organisation,
      enquiryType,
      message: message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}