"use client";

import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b border-border bg-background px-4">
      <span className="text-sm font-semibold text-foreground shrink-0">DevStash</span>
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search items..."
          className="pl-8 h-8 bg-muted border-0 text-sm"
        />
      </div>
      <div className="ml-auto">
        <Button size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" />
          New Item
        </Button>
      </div>
    </header>
  );
}
