import React from 'react'
import NavBar from '../components/NavBar'
import ProjectStack from '../components/project'
import GithubDeploy from '../components/GithubDeploy'

function Project() {
  return (
    <>
        <NavBar/>
        <ProjectStack/>
        <GithubDeploy/>
    </>
  )
}

export default Project