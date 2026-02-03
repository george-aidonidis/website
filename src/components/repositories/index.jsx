import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

import Loader from '../loader'

const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

const Repositories = ({ className }) => {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setRepos(data)
          setStatus('ready')
        }
      })
      .catch(() => {
        setStatus('error')
      })
  }, [])

  return (
    <div className={className}>
      <h2>Latest repositories on Github</h2>
      {status === 'loading' && (
        <div className="repositories__loader">
          <Loader />
        </div>
      )}
      {status === 'ready' && repos && (
        <>
          <div className="repositories__content">
            {repos.map((repo) => (
              <React.Fragment key={repo.name}>
                <div className="repositories__repo">
                  <a className="repositories__repo-link" href={repo.html_url}>
                    <strong>{repo.name}</strong>
                  </a>
                  <div>{repo.description}</div>
                  <div className="repositories__repo-date">
                    Updated: {new Date(repo.updated_at).toUTCString()}
                  </div>
                  <div className="repositories__repo-star">
                    ★ {repo.stargazers_count}
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default styled(Repositories)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`
