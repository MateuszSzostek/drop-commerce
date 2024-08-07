// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token =
    "token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0UXkxbUZRTVlLdHJYUmo0RTllblhTdXZBRlhSeHpLalNtR1lvS2Q2ZWZrIn0.eyJleHAiOjE3MjI5MjIyNDIsImlhdCI6MTcyMjg4NjI0MiwianRpIjoiYjVhZDliNDEtODk2Yi00NGZiLTkzMmEtNGZhOTVmZDZhZmYxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9vd2xpeCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiIxOTZjNWQxNC00YWE4LTRkYWYtYWMxMS0wNTBhM2VjZDM1NDUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJvd2xpeC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiMGVkMGZhMjItMTIxYi00YWFjLWFiNTMtYmQyMTA5MjViYWJhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODEiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3dsaXgiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXNlcnMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjBlZDBmYTIyLTEyMWItNGFhYy1hYjUzLWJkMjEwOTI1YmFiYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3eWtAZ21haWwuY29tIiwiZW1haWwiOiJ3eWtAZ21haWwuY29tIn0.RGHQSBr7njmVfxm1N_DUb4-UdII7wVMBCgoQxabkcqj3uhav7iAnFTDfwBFXThcyDpfyKOxooxoTGeZWJEjaLFwipoQ3t5Qit-h6bRV_p0FGTeStztir5-3PrEyQdBVubJ0hdzWzsx1AmLpJKOmAo0i7sE9JOUiLQxoY-lZYz2tfDEz5h-1ZzUGdVvGTrHHVMrunXJOb9YJIIERAzd8yGWgBi0HlP_KYiSXpKFHZsJ4WNtWRr1cpgr6KlyGMRqpKpRo3ktAB4BpIxejlzvyFuANMDv9bPsbNav6Hp-EwJkPfhvAuE4jAlgb7IoDvWi2MECUALarRp715FjyGy_FNbA; session=eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTJPV0UwWkdVell6VXhZV1U1TURBeU1USmtaRGc1T0NJc0ltVnRZV2xzSWpvaWJYTjZRR2R0WVdsc0xtTnZiU0lzSW1saGRDSTZNVGN5TWpnNU1qUTFNSDAuYml4bG5SZU5JY29ma1Z4amFzSUxOWEs4VUszYVBSOXNhenFSel9BZmN6MCJ9; session.sig=5WJLyEZAjURDzTZbiT_ikV3I76k";

  request.headers.set("Accept", "application/json");
  request.headers.set("Content-Type", "application/json");
  request.headers.set("Cookie", token);
  request.headers.set("cache", "no-store");

  // Log the current request pathname

  return NextResponse.next();
}
