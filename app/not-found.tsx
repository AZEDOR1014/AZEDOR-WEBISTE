import Link from "next/link";
export const metadata = { title: "Page Not Found | AZEDOR", description: "This page does not exist. Find the AZEDOR service, industry or article you were looking for.", robots: { index: false, follow: false } };
export default function NotFound() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-eyebrow text-muted">404 — Page not found</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">This page does not exist.</h1>
        <p className="mt-4 text-lg text-muted">The link may be out of date, or the page may have moved. Here are the places most visitors are looking for:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-dark">Back to Home</Link>
          <Link href="/solutions" className="btn btn-secondary">Our Solutions</Link>
          <Link href="/free-audit" className="btn btn-primary">Get Your Free Audit</Link>
        </div>
      </div>
    </section>
  );
}
