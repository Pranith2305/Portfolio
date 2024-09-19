import React, { useState, useEffect } from "react";
import { GithubIcon, Star, GitForkIcon, Eye, Calendar } from "lucide-react";

export default function GitHubRepoShowcase({ repos }) {
  const [repoDetails, setRepoDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const repoDetailsArray = await Promise.all(
          repos.map(async (repo) => {
            const response = await fetch(
              `https://api.github.com/repos/${repo.username}/${repo.repoName}`,
              {
                headers: {
                  Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
              }
            );

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return {
              ...data,
              size: repo.size || "medium",
            };
          })
        );
        setRepoDetails(repoDetailsArray);
      } catch (error) {
        console.error("Error fetching repository details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (repos.length > 0) {
      fetchRepoDetails();
    } else {
      setLoading(false);
    }
  }, [repos, GITHUB_TOKEN]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="p-6">
                    <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-4/6 mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))
            : repoDetails.map((repo) => (
                <div
                  key={repo.id}
                  className="border  rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-2 truncate">
                      {repo.name}
                    </h2>
                    <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-yellow-500">
                        <Star size={16} className="mr-1" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center text-blue-500">
                        <GitForkIcon size={16} className="mr-1" />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center text-green-500">
                        <Eye size={16} className="mr-1" />
                        <span>{repo.watchers_count}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-300 rounded-full p-2"
                        aria-label={`View ${repo.name} on GitHub`}
                      >
                        <GithubIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}