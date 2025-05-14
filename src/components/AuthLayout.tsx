
import React from "react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  illustration?: React.ReactNode;
  className?: string;
}

export function AuthLayout({ children, illustration, className }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <div
        className={cn(
          "col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1",
          className
        )}
      >
        {children}
      </div>
      <div className="hidden bg-muted p-10 text-muted-foreground md:flex md:flex-col md:justify-between">
        <div className="flex items-center justify-center h-full">
          {illustration || (
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background z-10 rounded-md" />
              <div className="z-20 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-primary">
                  Coaching Management System
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Streamline your coaching practice with our comprehensive management solution.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
