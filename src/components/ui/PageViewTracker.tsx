"use client";

import { useEffect } from "react";

export default function PageViewTracker() {
  useEffect(() => {
    fetch("/api/page-view", { method: "POST" }).catch(() => {});
  }, []);

  return null;
}
