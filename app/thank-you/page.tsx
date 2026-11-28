import Link from "next/link";
export const metadata = { title: "Thank You | AZEDOR", description: "Thank you for requesting your Free Lead-Leak & Automation Audit.", robots: { index: false, follow: false } };
export default function ThankYou() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime text-3xl font-extrabold">✓</p>
        <h1 className="mt-6 text-4xl font-extrabold">Thank you. We got your details.</h1>
        <p className="mt-4 text-lg text-muted">AZEDOR will review your business and contact you about your Free Lead-Leak &amp; Automation Audit. There is nothing else you need to do right now.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-btn bg-ink px-6 py-3 font-bold text-white">Back to Home</Link>
          <Link href="/how-it-works" className="rounded-btn border border-ink px-6 py-3 font-bold">See How It Works</Link>
        </div>
      </div>
    </section>
  );
}
