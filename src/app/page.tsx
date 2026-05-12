import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-48 text-center">
          <p className="font-heading text-4xl text-foreground">
            Advocacia Criminal Estratégica
          </p>
          <p className="mt-4 text-sm text-muted">
            Conteúdo em construção.
          </p>
        </div>
      </main>
    </>
  );
}
