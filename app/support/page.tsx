import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
};

const questions = [
  {
    question: "How do I get a Make API token?",
    steps: [
      "Open Make and go to your Profile.",
      "Open the API tab and tap Add token.",
      "Choose these scopes: organizations:read, teams:read, scenarios:read and scenarios:write.",
      "Copy the token and paste it in the app.",
    ],
  },
  {
    question: "The app says my token stopped working.",
    answer:
      "The token may be deleted, expired or missing a scope. Make a new token in Make with the four scopes above, then sign in again.",
  },
  {
    question: "The app says I do not have permission.",
    answer:
      "Your Make role in that team may not allow this action, or the token is missing a scope. Ask your team admin, or make a new token with all four scopes.",
  },
  {
    question: "The app says there are too many requests.",
    answer:
      "Make limits how many requests you can send per minute. The limit depends on your Make plan. Wait a minute and try again.",
  },
  {
    question: "My company uses its own Make address.",
    answer:
      "On the sign-in screen, tap Use a custom Make address and enter your company's Make domain.",
  },
  {
    question: "How do I sign out?",
    answer: "Open the Profile tab and tap Sign Out. This removes your token from the device.",
  },
];

export default function SupportPage() {
  const mailLink = `mailto:${site.supportEmail}?subject=${encodeURIComponent(`${site.appName} support`)}`;

  return (
    <>
      <h1 className="page-title">Support</h1>
      <p className="page-intro">Have a question or found a problem? We are happy to help.</p>
      <section className="contact">
        <h2>Email us</h2>
        <p>
          Tell us what happened, your iPhone model and iOS version. Please never send your Make API token. We usually
          reply within 2 working days.
        </p>
        <a className="button" href={mailLink}>
          Email support
        </a>
        <a className="email" href={mailLink}>
          {site.supportEmail}
        </a>
      </section>
      <h2>Common questions</h2>
      <div className="faq">
        {questions.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            {item.steps ? (
              <ol>
                {item.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : (
              <p>{item.answer}</p>
            )}
          </details>
        ))}
      </div>
      <p className="note">
        {site.appName} is not made by Make, so Make support cannot help with this app. Read how we handle your data in
        our <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    </>
  );
}
