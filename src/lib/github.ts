export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  updated_at: string;
}

interface GitHubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepo[];
}

const GITHUB_API_URL =
  'https://api.github.com/search/repositories?q=topic:twalton83+user:twalton83&sort=updated&order=desc';

export async function fetchOpenSourceRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(GITHUB_API_URL, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data: GitHubSearchResponse = await res.json();
    return data.items.filter((repo) => !repo.fork && !repo.archived);
  } catch {
    return [];
  }
}
