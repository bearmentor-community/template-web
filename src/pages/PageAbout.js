import React from 'react'

import { Page, Hero, Anchor } from '../components'

import repositories from '../data/repositories.json'
import features from '../data/features.json'

const PageAbout = () => {
  return (
    <Page title='About'>
      <Hero heading='About' />
      <h2>Template is a starter kit project to build a complete web app.</h2>
      <p>
        It is made highly opiniated by{' '}
        <Anchor href='https://mhaidarhanif.com'>M Haidar Hanif</Anchor> from{' '}
        <Anchor href='https://azobu.com'>Azobu</Anchor>. The main goal is to be
        a starter kit learning purpose for new professional developers in web
        development ecosystem.
      </p>
      <p>
        Using only the most popular, battle-tested technologies, but still
        practically achievable for building modern full stack web application:
      </p>
      <p>
        JavaScript, Node.js, React, React Router, React Helmet, Redux, Redux Dev
        Tools, Redux Logger, Redux Thunk, xstyled/emotion, Axios, Express,
        Nodemon, Morgan, MongoDB, Mongoose, PostgreSQL, Sequelize, bcrypt, JSON
        Web Token, dotenv, Jest, Sinon, ESLint, Prettier, Standard, and much
        more. Might be leveraging TypeScript, Passport, OAuth, Redis, Docker,
        and complete test suite in the future.
      </p>
      <p>The repositories are located at:</p>
      <ul>
        {repositories.map((repo, index) => {
          return (
            <li key={index}>
              <Anchor href={repo.url}>
                <code>{repo.text}</code>
              </Anchor>
            </li>
          )
        })}
      </ul>
      <p>Overview of the features:</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature.name}</li>
        ))}
      </ul>
      <p>Thank you and enjoy!</p>
    </Page>
  )
}

export default PageAbout
