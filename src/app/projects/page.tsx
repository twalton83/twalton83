import type { Metadata } from "next";
import Link from "next/link";
import { fetchOpenSourceRepos } from "@/lib/github";
import RepoCard from "@/components/RepoCard";
import TextReveal from "@/components/TextReveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects | Tatiana Walton — Open Source Scripts & Tools",
  description:
    "Open source projects and scripts by Tatiana Walton. FiveM scripts, developer tools, and community resources available on GitHub.",
  keywords: [
    "Open Source",
    "GitHub Projects",
    "FiveM Scripts",
    "Developer Tools",
    "Tatiana Walton",
    "twalton83",
    "Open Source Scripts",
    "FiveM Open Source",
  ],
  openGraph: {
    title: "Projects | Tatiana Walton — Open Source Scripts & Tools",
    description:
      "Open source projects and scripts by Tatiana Walton. FiveM scripts, developer tools, and community resources.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Tatiana Walton — Open Source Scripts & Tools",
    description:
      "Open source projects and scripts by Tatiana Walton. FiveM scripts, developer tools, and community resources.",
  },
};

export default async function ProjectsPage() {
  const repos = await fetchOpenSourceRepos();

  const fivemRepos = repos.filter((r) => r.topics.includes("fivem"));
  const generalRepos = repos.filter((r) => !r.topics.includes("fivem"));

  return (
    <main>
      <section className="pt-32 md:pt-40 pb-32">
        <div className="container max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-300 mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>

          <TextReveal
            as="h1"
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-12"
          >
            Featured Projects
          </TextReveal>
          {repos.length > 0 ? (
            <div className="space-y-16">
              {fivemRepos.length > 0 && (
                <div>
                  <h2
                    className="text-2xl font-semibold text-[var(--text-primary)] mb-8"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    FiveM
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {fivemRepos.map((repo) => (
                      <RepoCard
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        htmlUrl={repo.html_url}
                        homepage={repo.homepage}

                      />
                    ))}
                  </div>
                </div>
              )}

              {generalRepos.length > 0 && (
                <div>
                  <h2
                    className="text-2xl font-semibold text-[var(--text-primary)] mb-8"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    General
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {generalRepos.map((repo) => (
                      <RepoCard
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        htmlUrl={repo.html_url}
                        homepage={repo.homepage}

                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] text-center">
              <p className="text-[var(--text-muted)]">
                No open source projects found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
