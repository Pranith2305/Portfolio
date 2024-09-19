import React from 'react';
import GitHubRepoDetails from './GithubFetch';

const GithubDeploy = () => {
  const repos = [
    { username: 'Pranith2305', repoName: 'BlogNest' },
    { username: 'Pranith2305', repoName: 'Compare' },
    { username: 'Pranith2305', repoName: 'nirman' },
    { username: 'Pranith2305', repoName: 'bandits' },
    { username: 'Pranith2305', repoName: 'PaymentApp' }
    // Add more repositories as needed
  ];

  return (
    <div className=''>
      <GitHubRepoDetails repos={repos} />
    </div>
  );
};

export default GithubDeploy;
