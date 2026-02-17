import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES Client (Region must match verified identity region)
const sesClient = new SESClient({
  region: "ap-south-1",
});

const SENDER_EMAIL = "priyanshudoingcoding@gmail.com";
const RECIPIENT_EMAIL = "Dunnemedia1212@gmail.com";

export async function GET() {
  try {
    console.log("Attempting to send test email via SES...");

    const emailParams = {
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL],
      },
      Message: {
        Subject: {
          Data: "Test Email from Dunne App",
        },
        Body: {
          Html: {
            Data: "<h1>Success!</h1><p>SES is working correctly.</p>",
          },
        },
      },
    };

    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);
    
    console.log("SES Send Result:", result);

    return NextResponse.json({ success: true, messageId: result.MessageId });
  } catch (error: any) {
    console.error("SES Test Failed:", error);
    return NextResponse.json({ 
      error: error.message,
      stack: error.stack,
      code: error.code || "UNKNOWN_ERROR" 
    }, { status: 500 });
  }
}
