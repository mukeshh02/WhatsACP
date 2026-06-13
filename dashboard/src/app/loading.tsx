"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col gap-6 p-6 animate-in fade-in duration-300">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center w-full">
        <div className="w-48 h-8 rounded-lg bg-slate-200/60 shimmer-light" />
        <div className="w-32 h-8 rounded-lg bg-slate-200/60 shimmer-light" />
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-32 rounded-2xl bg-white border border-slate-100 p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="w-1/2 h-4 rounded bg-slate-200/70 shimmer-light" />
          <div className="w-3/4 h-8 rounded-lg bg-slate-200/50 shimmer-light animate-pulse" />
          <div className="w-1/3 h-3 rounded bg-slate-200/60 shimmer-light" />
        </div>
        <div className="h-32 rounded-2xl bg-white border border-slate-100 p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="w-1/2 h-4 rounded bg-slate-200/70 shimmer-light" />
          <div className="w-3/4 h-8 rounded-lg bg-slate-200/50 shimmer-light animate-pulse" />
          <div className="w-1/3 h-3 rounded bg-slate-200/60 shimmer-light" />
        </div>
        <div className="h-32 rounded-2xl bg-white border border-slate-100 p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="w-1/2 h-4 rounded bg-slate-200/70 shimmer-light" />
          <div className="w-3/4 h-8 rounded-lg bg-slate-200/50 shimmer-light animate-pulse" />
          <div className="w-1/3 h-3 rounded bg-slate-200/60 shimmer-light" />
        </div>
      </div>

      {/* Large Content Section */}
      <div className="flex-1 rounded-2xl bg-white border border-slate-100 p-6 shadow-sm min-h-[300px] flex flex-col gap-4 relative overflow-hidden">
        <div className="w-1/4 h-6 rounded bg-slate-200/70 shimmer-light" />
        <div className="w-full h-px bg-slate-100 my-2" />
        <div className="w-full h-12 rounded-lg bg-slate-100/60 shimmer-light animate-pulse" />
        <div className="w-full h-12 rounded-lg bg-slate-100/60 shimmer-light animate-pulse" />
        <div className="w-full h-12 rounded-lg bg-slate-100/60 shimmer-light animate-pulse" />
        <div className="w-3/4 h-12 rounded-lg bg-slate-100/60 shimmer-light animate-pulse" />
      </div>
    </div>
  );
}
