"use client";

import { useRouter, useSearchParams } from "next/navigation";

// components/GoogleCalendarConnect.jsx
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI =
  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ||
  "http://localhost:3000/api/auth/google/callback";

// Scopes required for calendar access
const SCOPES = [
  "openid",
  "email",
  "https://www.googleapis.com/auth/calendar.events",
].join(" ");

function getGoogleOAuthUrl() {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: SCOPES,
    prompt: "consent",
    access_type: "offline",
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

const GoogleCalendarConnect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function sendCodeToBackend() {
      const code = searchParams.get("code");
      const userId = "123456"; // Adjust as needed

      if (!code || !userId) {
        // Handle error or redirect
        return;
      }

      // Call your backend to exchange code -> tokens and save
      const resp = await fetch(
        "http://localhost:3001/user/add-creds/google-calendar",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code,
            userId,
          }),
          credentials: "include",
        }
      );

      const data = await resp.json();

      if (resp.ok) {
        // Success: tokens added
        router.push("/dashboard");
      } else {
        // Handle error (show data.error or redirect)
      }
    }

    sendCodeToBackend();
  }, [searchParams, router]);
  const handleConnect = () => {
    window.location.href = getGoogleOAuthUrl();
  };

  return <button onClick={handleConnect}>Connect Google Calendar</button>;
};

export default GoogleCalendarConnect;

// code=4/0AVGzR1ADzUScCC3ZrlA2UJBsVpGYHhKDxCSaKIyRzYItDk6Xz5v8oGMiIKlznaz1337lyw
