import { Button } from "@/components/Button";
import { RecordingList } from "@/components/Recordings/RecordingList";
import { useRouter } from "next/router";

export default function DashboardPage() {
  const router = useRouter();

  const handleClick = (arg: string) => {
    router.push(`/dashboard?page=${arg}`);
  };

  return (
    <>
      <div>
        <section className="mb-24">
          <div className="flex flex-col gap-4 md:flex-row justify-between  mb-6 items-center">
            <div className="md:text-[20px]">Hello, John Doe</div>

            <div className=" w-full md:w-fit">
              <Button
                className="w-full"
                onClick={() => {
                  handleClick("record");
                }}
              >
                Record Session
              </Button>
            </div>
          </div>
        </section>

        <RecordingList />
      </div>
    </>
  );
}
