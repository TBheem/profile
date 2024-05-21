import PersonalProfile from "./components/PersonalProfile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div>
        <PersonalProfile />
      </div>
    </main>
  );
}
