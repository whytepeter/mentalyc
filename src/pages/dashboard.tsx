import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { DashboardLayout } from "@/components/DashboardLayout";
import DashboardPage from "@/components/Page/Dashboard";
import RecordingPage from "@/components/Page/Recording";
import UploadPage from "@/components/Page/Upload";

export default function Dashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    setActivePage(router.query?.page as string | null);
  }, [router.query]);

  return (
    <>
      {isClient && (
        <DashboardLayout>
          <Head>
            <title>Mentalyc Dashboard</title>
          </Head>
          {!activePage && <DashboardPage />}
          {activePage == "record" && <RecordingPage />}
          {activePage == "upload" && <UploadPage />}
        </DashboardLayout>
      )}
    </>
  );
}
