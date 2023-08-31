
"use client";
import React, { useState, useEffect } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
// import { Inter } from 'next/font/google';
import './globals.css'; // Assuming this is your global stylesheet
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    // Set crossorigin attribute on the link element
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap';
    link.rel = 'stylesheet';
    link.crossOrigin = 'crossorigin';
    document.head.appendChild(link);

    // Clean up
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        {/* Add preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <body className={`font-sans ${inter.className}`}>{children}</body>
    </html>
  );
}