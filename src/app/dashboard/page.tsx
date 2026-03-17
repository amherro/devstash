export default function DashboardPage() {
  return (
    <>
      <aside className="w-60 shrink-0 border-r border-border bg-background p-4">
        <h2 className="text-foreground font-semibold">Sidebar</h2>
      </aside>
      <main className="flex-1 overflow-auto p-6">
        <h2 className="text-foreground font-semibold">Main</h2>
      </main>
    </>
  );
}
