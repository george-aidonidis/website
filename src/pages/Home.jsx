import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaEnvelope, FaTwitter} from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

const title = `Hi, I'm George!`
const Home = ({className}) => (
  <Layout>
    <Hero heroImg={siteConfig.siteCover} title={title} />

    <Wrapper className={className}>
      <div className="page-content">
        <div className="avatar">
          <img
            className="avatar__image"
            src="/images/avatar.jpg"
            alt="user avatar"
          />
          <div className="social">
            {siteConfig.social.github && (
              <a className="social-link github" href={siteConfig.social.github}>
                <FaGithub className="social-icon" size="32" />
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                className="social-link linkedin"
                href={siteConfig.social.linkedin}
              >
                <FaLinkedin className="social-icon" size="32" />
              </a>
            )}
            {siteConfig.social.twitter && (
              <a
                className="social-link twitter"
                href={siteConfig.social.twitter}
              >
                <FaTwitter className="social-icon" size="32" />
              </a>
            )}
            {siteConfig.social.email && (
              <a
                className="social-link email"
                href={`mailto:${siteConfig.social.email}`}
              >
                <FaEnvelope className="social-icon" size="32" />
              </a>
            )}
          </div>
        </div>
        <About title="About" text={siteConfig.authorDescription} />
        <Separator />
        <Timeline />
        <Separator />
        <Repositories />
      </div>
    </Wrapper>
  </Layout>
)

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
