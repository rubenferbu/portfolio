import { siteConfig } from "../config/site";

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  area: "dev" | "security";
}

async function fetchRepo(
  entry: { repo: string; area: "dev" | "security" }
): Promise<GitHubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${entry.repo}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`GitHub API error for ${entry.repo}: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return { ...data, area: entry.area };
  } catch (error) {
    console.error(`Failed to fetch ${entry.repo}:`, error);
    return null;
  }
}

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
  const results = await Promise.all(
    siteConfig.featuredRepos.map(fetchRepo)
  );
  return results.filter((repo): repo is GitHubRepo => repo !== null);
}