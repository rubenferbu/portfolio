import { siteConfig } from "@/src/config/site";

export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
}

async function fetchRepo(fullName: string): Promise<GitHubRepo | null> {
    try {
        const res = await fetch(`https://api.github.com/repos/${fullName}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
            next: { revalidate: 3600 }, // recachea cada hora, no en cada visita
        });

        if (!res.ok) {
            console.error(`GitHub API error for ${fullName}: ${res.status}`);
            return null;
        }

        return res.json();
    } catch (error) {
        console.error(`Failed to fetch ${fullName}:`, error);
        return null;
    }
}

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
    const results = await Promise.all(
        siteConfig.featuredRepos.map(fetchRepo)
    );
    return results.filter((repo): repo is GitHubRepo => repo !== null);
}