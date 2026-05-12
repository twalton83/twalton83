'use client';

interface RepoCardProps {
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
}

export default function RepoCard({
  name,
  description,
  htmlUrl,
  homepage,
}: RepoCardProps) {
  return (
    <article className="group p-5 md:p-8 rounded-xl bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/30 transition-all duration-500">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className="text-xl font-semibold text-[var(--text-primary)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {name}
        </h3>
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-300"
          aria-label={`View ${name} on GitHub`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      <p
        className={`leading-relaxed ${
          description
            ? 'text-[var(--text-secondary)]'
            : 'text-[var(--text-muted)] italic'
        }${homepage ? ' mb-6' : ''}`}
      >
        {description || 'No description provided'}
      </p>

      {homepage && (
        <a
          href={homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Visit Site
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      )}
    </article>
  );
}
