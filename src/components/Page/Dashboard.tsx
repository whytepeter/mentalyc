import { Button } from "@/components/Button";
import { RecordingList } from "@/components/Recordings/RecordingList";
import { useRouter } from "next/router";

export default function DashboardPage() {
  const router = useRouter();

  const startRecording = () => {
    router.push("/dashboard?recording=true");
  };

  return (
    <>
      <div>
        <section className="mb-24">
          <div className="flex justify-between  mb-6 items-center">
            <div className="md:text-[20px]">Hello, John Doe</div>
            <Button onClick={startRecording} className="w-fit">
              Start New Recording
            </Button>
          </div>
        </section>

        <RecordingList />
      </div>
    </>
  );
}
