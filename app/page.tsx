/* eslint-disable react/no-children-prop */
"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import Spinner from "@/components/ui/spinner";
import { OrganizationContext } from "@/providers/OrganizationProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useRecentUsers from "@/hooks/useRecentUsers";

export default function Home() {
  const { userInfo } = useContext(AuthContext);
  const { selectedOrganization, organizations } =
    useContext(OrganizationContext);
  console.log(organizations.length);
  if (!userInfo) {
    return (
      <div className="flex flex-col min-h-[80vh] items-center justify-center gap-6">
        <Spinner />
      </div>
    );
  }

  if (organizations.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">No Organization</h3>
          <p className="text-sm text-muted-foreground">
            It seems you aren&apos;t affiliated with any organization yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-4 h-[80vh] ">
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <h3 className="text-lg font-semibold">
            Welcome back, {userInfo.name}
          </h3>
          <p className="text-sm">
            Your current organization is {selectedOrganization?.name}
          </p>
        </div>
      </div>
    </main>
  );
}
