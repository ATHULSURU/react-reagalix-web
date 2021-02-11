import React from 'react'

const Demo = (props) => {
  return (
    <div className='mainContainer'>
      <div></div>
      <div className='contentContainer'>
        <div style={{ position: 'absolute', left: '100%', marginTop: '0' }}>
          *
        </div>
        <h1>Setting up the local environment and workspace</h1>
        <p>
          This guide explains how to set up your environment for Angular
          development using the &nbsp;
          <a href='https://angular.io/cli'>Angular CLI tool</a>. It includes
          information about prerequisites, installing the CLI, creating an
          initial workspace and starter app, and running that app locally to
          verify your setup.
        </p>
        <div className='localSetUp'>
          <div className='localSetUp-header'>
            TRY ANGULAR WITHOUT LOCAL SETUP
          </div>
          <p>
            If you are new to Angular, you might want to start with &nbsp;
            <a href='https://angular.io/cli'>Try it now!</a>, which introduces
            the essentials of Angular in the context of a ready-made basic
            online store app that you can examine and modify. This standalone
            tutorial takes advantage of the interactive &nbsp;
            <a href='https://angular.io/cli'>StackBlitz</a> &nbsp; environment
            for online development. You don't need to set up your local
            environment until you're ready.
          </p>
        </div>
        <hr />
        <div>
          <h1>Prerequisites</h1>
          <p>
            To use the Angular framework, you should be familiar with the
            following:
          </p>
          <ul>
            <li>
              <a href='https://angular.io/cli'>JavaScript</a>
            </li>
            <li>
              <a href='https://angular.io/cli'>HTML</a>
            </li>
            <li>
              <a href='https://angular.io/cli'>CSS</a>
            </li>
          </ul>
          <p>
            Knowledge of &nbsp;
            <a href='https://angular.io/cli'>TypeScript</a>&nbsp; is helpful,
            but not required.
          </p>
          <p>
            To install Angular on your local system, you need the following:
          </p>
          <ul>
            <li>Node.js</li>
          </ul>
          <p>
            Angular requires &nbsp;
            <a href='https://angular.io/cli'>
              a current, active LTS, or maintenance
            </a>
            &nbsp; LTS version of Node.js.
          </p>
          <p className='last'>
            For information about specific version requirements, see the engines
            key in the package.json file.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Demo
