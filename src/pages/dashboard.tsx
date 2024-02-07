import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { DashboardLayout } from "@/components/DashboardLayout";
import DashboardPage from "@/components/Page/Dashboard";
import RecordingPage from "@/components/Page/Recording";

export default function Dashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isRecordingScreen, setIsRecordingScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    setIsRecordingScreen(!!router.query?.recording);
  }, [router.query]);

  return (
    <>
      {isClient && (
        <DashboardLayout>
          <Head>
            <title>Mentalyc Dashboard</title>
          </Head>
          {isRecordingScreen ? <RecordingPage /> : <DashboardPage />}
        </DashboardLayout>
      )}
    </>
  );
}
