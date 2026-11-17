import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {site.appName} is an unofficial app. It is not made by or linked with Make or Celonis. Make is a trademark of
          its owner.
        </p>
        <p>
          © {new Date().getFullYear()} {site.developerName}
        </p>
      </div>
    </footer>
  );
}
