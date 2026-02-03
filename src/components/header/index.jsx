import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303b;
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #25303b;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const navLinkStyles = `
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

const HeaderLink = styled.a`
  ${navLinkStyles}
`

const GithubLink = styled.a`
  ${navLinkStyles}
`

const { headerLinks } = siteConfig

const Header = () => (
  <HeaderWrapper>
    <HeaderNav>
      <HeaderLinkGroup>
        {headerLinks.map((headerLink, i) => (
          <HeaderLink href={headerLink.url} key={`header-link-${i}`}>
            {headerLink.label}
          </HeaderLink>
        ))}
      </HeaderLinkGroup>
      <GithubLink
        href={`https://github.com/${siteConfig.githubUsername}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} />
      </GithubLink>
    </HeaderNav>
  </HeaderWrapper>
)

export default Header
