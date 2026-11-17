import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="prose">
      <h1 className="page-title">Privacy Policy</h1>
      <p className="updated">Last updated: November 17, 2026</p>

      <p>
        This policy explains how {site.appName} (&quot;the app&quot;), made by {site.developerName}, handles your
        information. In short: we do not collect your data, we have no server of our own, and we do not track you.
      </p>

      <h2>Information we do not collect</h2>
      <p>
        We do not collect, store or sell any personal data. The app has no accounts of its own, no analytics, no
        advertising and no tracking.
      </p>

      <h2>Your Make API token</h2>
      <p>
        To use the app, you sign in with your own Make API token. The token is saved only in the Keychain on your
        device. It is never sent to us. Signing out removes it from your device.
      </p>

      <h2>Data the app reads from Make</h2>
      <p>
        The app talks directly from your device to Make&apos;s official API. It reads your name, email, organizations,
        teams, scenarios and usage numbers so it can show them to you. When you turn a scenario on or off, the app sends
        that request to Make. This data stays between your device and Make. It is not sent to us or anyone else.
      </p>
      <p>
        Make handles this data under its own privacy policy. See{" "}
        <a href="https://www.make.com/en/privacy-notice" target="_blank" rel="noreferrer">
          Make&apos;s privacy notice
        </a>
        .
      </p>

      <h2>Apple</h2>
      <p>
        If you choose to share crash reports and app analytics with developers in your iPhone settings, Apple may share
        anonymous crash and usage data with us. You can turn this off at any time in Settings.
      </p>

      <h2>Purchases</h2>
      <p>
        The app is free and has no in-app purchases right now. If we add purchases later, we will update this policy
        before they go live.
      </p>

      <h2>Children</h2>
      <p>The app is not made for children under 13, and we do not knowingly collect any data from children.</p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will update this page and the date at the top. Please check it from time to time.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email us at <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>Not linked with Make</h2>
      <p>
        {site.appName} is an unofficial app. It is not made by, endorsed by or linked with Make or Celonis. Make is a
        trademark of its owner.
      </p>
    </article>
  );
}
