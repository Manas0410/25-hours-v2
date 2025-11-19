"use client";

import React, { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI =
  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ||
  "http://localhost:3000/api/auth/google/callback";

const SCOPES = [
  "openid",
  "email",
  "https://www.googleapis.com/auth/calendar.events",
].join(" ");

function getGoogleOAuthUrl() {
  const params = new URLSearchParams({
    client_id: String(GOOGLE_CLIENT_ID ?? ""),
    redirect_uri: String(GOOGLE_REDIRECT_URI),
    response_type: "code",
    scope: SCOPES,
    prompt: "consent",
    access_type: "offline",
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

type Status = "idle" | "processing" | "success" | "error";

export default function GoogleCalendarConnect() {
  const { user } = useUser();
  const userId = user ? user.id : null;
  const searchParams = useSearchParams();
  const router = useRouter();

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const processedRef = useRef(false);

  useEffect(() => {
    async function sendCodeToBackend(code: string) {
      setStatus("processing");
      setMessage(null);

      try {
        const resp = await fetch(
          // update to your production API or use relative path
          "https://25hour-server.vercel.app/user/add-creds/google-calendar",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ code, userId }),
          }
        );

        const data = await resp.json().catch(() => ({}));

        if (resp.ok) {
          setStatus("success");
          setMessage("Google Calendar connected successfully. Redirecting...");
          try {
            router.replace("/dashboard");
          } catch {
            window.location.href = "/dashboard";
          }
        } else {
          setStatus("error");
          setMessage(
            data?.error ||
              data?.message ||
              "Failed to connect Google Calendar. Please try again."
          );
        }
      } catch (err: any) {
        setStatus("error");
        setMessage(
          err?.message || "Network error — could not reach the server."
        );
      }
    }

    if (processedRef.current) return;

    const code = searchParams?.get("code");
    if (!code || !userId) return;

    processedRef.current = true;
    sendCodeToBackend(code);
  }, [searchParams, userId, router]);

  const handleConnect = () => {
    if (!GOOGLE_CLIENT_ID) {
      setStatus("error");
      setMessage(
        "Google Client ID is not configured. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID to env."
      );
      return;
    }
    window.location.href = getGoogleOAuthUrl();
  };

  return (
    <div className="max-w-xl w-full bg-gray-900/70 border border-gray-800 rounded-2xl p-6 sm:p-8 mx-4 shadow-lg">
      <h1 className="text-lg sm:text-2xl font-semibold mb-2 text-gray-100">
        <Image
          src="/gcal.png"
          alt="Google Logo"
          width={18}
          height={18}
          className="size-16"
        />
        Connect Google Calendar
      </h1>
      <p className="text-sm text-gray-300 mb-4">
        Connect your Google Calendar so we can create events for you. We request
        only calendar access and offline refresh tokens.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button
          onClick={handleConnect}
          disabled={status === "processing"}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium
            transition focus:outline-none focus:ring-2 focus:ring-offset-1
            ${
              status === "processing"
                ? "bg-gray-800 text-gray-400 cursor-not-allowed border-gray-700"
                : "bg-blue-600 text-white hover:bg-blue-700 border-transparent"
            }
          `}
        >
          {status === "processing" ? (
            <>
              <svg
                className="w-4 h-4 animate-spin text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-20"
                />
                <path
                  d="M22 12a10 10 0 00-10-10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span>Connecting…</span>
            </>
          ) : (
            <>
              <span>Connect Google Calendar</span>
            </>
          )}
        </button>

        {status === "success" && (
          <div className="rounded-md bg-green-900/60 border border-green-800 px-3 py-2 text-sm text-green-200">
            Connected ✓
          </div>
        )}
      </div>

      {status === "error" && message && (
        <div className="mt-4 rounded-md bg-red-900/60 border border-red-800 px-3 py-2 text-sm text-red-200">
          {message}
        </div>
      )}

      {status === "processing" && (
        <p className="mt-3 text-sm text-gray-400">
          Finishing connection — this may take a few seconds.
        </p>
      )}

      <div className="mt-6 text-xs text-gray-500">
        <p>
          We only store the tokens needed to manage calendar events. You can
          disconnect anytime from account settings.
        </p>
      </div>
    </div>
  );
}
