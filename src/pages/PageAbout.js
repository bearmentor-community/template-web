import React from 'react'

import { Page, Hero, Content, Anchor } from '../components'

import repositories from '../data/repositories.json'
import features from '../data/features.json'

const PageAbout = () => {
  return (
    <Page title='About'>
      <Hero heading='About This Template' />

      <Content>
        <h2>Starter kit project to build a complete web app</h2>
        <p>
          It is made highly opiniated by{' '}
          <Anchor href='https://mhaidarhanif.com'>M Haidar Hanif</Anchor> from{' '}
          <Anchor href='https://azobu.com'>Azobu</Anchor>. The main goal is to
          be a template and starter kit for professional developers in web
          development ecosystem.
        </p>

        <p>The applications are published at:</p>
        <ul>
          <li>
            <Anchor href='https://template.azobu.com'>
              template.azobu.com
            </Anchor>
          </li>
          <li>
            <Anchor href='https://api.template.azobu.com'>
              api.template.azobu.com
            </Anchor>
          </li>
        </ul>

        <p>Overview of the features:</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature.name}</li>
          ))}
        </ul>

        <p>The repositories are located at:</p>
        <ul>
          {repositories.map((repo, index) => {
            return (
              <li key={index}>
                <Anchor href={repo.url}>{repo.text}</Anchor>
              </li>
            )
          })}
        </ul>

        <p>
          Using only the most popular, battle-tested tools and technologies. Yet
          still practically achievable for building modern full stack web
          application:
        </p>
        <p>
          Git, GitHub, Markdown, HTML, CSS, JavaScript, Node.js, React, React
          Router, React Helmet, Redux, Redux Dev Tools, Redux Logger, Redux
          Thunk, CSS-in-JS (xstyled/emotion), Axios, Express, Nodemon, Morgan,
          MongoDB, Mongoose, PostgreSQL, Sequelize, bcrypt, JSON Web Token
          (JWT), dotenv-flow, Jest, Sinon, ESLint, Prettier, Standard, Netlify,
          Google Cloud Platform, Nginx, Let's Encrypt, Cloudflare, and
          Uniregistry. and much more. Might be leveraging TypeScript, Passport,
          OAuth, Redis, Docker, and complete test suite in the future.
        </p>

        <p>Thank you and enjoy!</p>
      </Content>
    </Page>
  )
}

export default PageAbout
