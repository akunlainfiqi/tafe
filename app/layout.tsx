import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import AuthProvider from "@/providers/AuthProvider";
import OrganizationProvider from "@/providers/OrganizationProvider";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Billing App",
  description: "Mostly ngefork ryo hilmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
        <Suspense>
          <AuthProvider>
            <OrganizationProvider>
              <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <Sidebar />
                <div className="flex flex-col">
                  <Header />

                  <div className="flex flex-1 flex-col gap-2 p-2 lg:gap-4 lg:p-6 pb-0 max-h-[90vh] overflow-y-scroll">
                    {children}
                  </div>
                </div>
              </div>
            </OrganizationProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
