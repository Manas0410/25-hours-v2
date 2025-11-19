"use client";

// app/googlecalendar/page.tsx
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// load client component without SSR (it's a client component anyway)
const GoogleCalendarConnect = dynamic(
  () => import("@/components/GoogleCalendarConnect"),
  { ssr: false }
);

export default function GoogleCalendarPage() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="w-full bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-gray-800 rounded w-1/3" />
              <div className="h-3 bg-gray-800 rounded w-3/4" />
              <div className="h-10 bg-gray-800 rounded w-48" />
            </div>
          </div>
        }
      >
        <GoogleCalendarConnect />
      </Suspense>
    </div>
  );
}

// code=4/0AVGzR1ADzUScCC3ZrlA2UJBsVpGYHhKDxCSaKIyRzYItDk6Xz5v8oGMiIKlznaz1337lyw

// ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/googlecalendar". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
//     at g (/vercel/path0/.next/server/chunks/ssr/node_modules_next_1563fcbc._.js:4:5016)
//     at m (/vercel/path0/.next/server/chunks/ssr/node_modules_next_1563fcbc._.js:4:6650)
//     at g (/vercel/path0/.next/server/chunks/ssr/[root-of-the-server]__be492ec2._.js:1:1470)
//     at n3 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:82831)
//     at n6 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:84601)
//     at n5 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:104801)
//     at n7 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:102219)
//     at n8 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:83183)
//     at n6 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:84647)
//     at n6 (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page-turbo.runtime.prod.js:2:101560)
// Error occurred prerendering page "/googlecalendar". Read more: https://nextjs.org/docs/messages/prerender-error
// Export encountered an error on /googlecalendar/page: /googlecalendar, exiting the build.
//  ⨯ Next.js build worker exited with code: 1 and signal: null
// Error: Command "npm run build" exited with 1

// const page = () => {
//   return <div></div>;
// };

// export default page;
