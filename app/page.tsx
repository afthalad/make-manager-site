import Link from "next/link";
import { site } from "@/lib/site";

const features = [
  {
    title: "All your scenarios",
    text: "See every scenario in a team, with its schedule, last edit and operations.",
  },
  {
    title: "Turn on or off",
    text: "Switch a scenario on or off from your phone in one tap.",
  },
  {
    title: "Usage overview",
    text: "Check operations and data transfer for the last 30 days.",
  },
  {
    title: "Private by design",
    text: "Your token stays in the Keychain on your device. No tracking.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="logo" aria-hidden="true">
          <div className="logo-inner">
            <div className="logo-core">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M12 3v8" />
                <path d="M6.3 6.6a8 8 0 1 0 11.4 0" />
              </svg>
            </div>
          </div>
        </div>
        <h1>{site.appName}</h1>
        <p className="lead">
          An unofficial iPhone app for Make. See your scenarios and turn them on or off from your phone.
        </p>
      </section>
      <section className="cards">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>
      <p className="note centered">
        Need help? Visit <Link href="/support/">Support</Link>. Read our <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    </>
  );
}
