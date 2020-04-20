# Webinator Automation Framework
Webinator is a JavaScript(ES8) web automation framework built using WebdriverIO v6 APIs and Mocha.

This framework was built knowing that no website is the same, so why would the same automation work for every site? We've done the heavy lifting to make Mocha and Webdriver adaptable for your system under test. With pre-setup classes for mapping elements and running tests, you can easily modify any of the functions for each class to suit your needs. This can help save time such as being able to check for pop-ups before every click.

We also wanted to make it simple for any new automation engineer to pick up and start writing tests. The page object design we use is meant to make calls to page elements and functions intuitive. To help with this, the Babel compiler includes the class properties and private functions plugins to add a bit more organizational capabilities to vanilla JavaScript.
<br/>
<br/>

## Installation
The below installation steps assume that you have `brew` installed for Mac or `chocolatey` on Windows and that you have the repository cloned locally. All commands will be ran inside your OSes terminal (powershell on Winodws).


1. **OpenJDK/JRE** 
* Linux  
`sudo apt-get install openjdk-11-jre-headless`  
* Windows  
`choco install ojdkbuild11`  
* Mac  
`brew tap AdoptOpenJDK/openjdk`  
`brew cask install adoptopenjdk11`
---

2. **NVM & NodeJS**  
* Linux  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`  
* Windows  
`choco install nvm`  
* Mac  
`brew update && brew install nvm`  
`mkdir ~/.nvm`  
Add the following lines to your ~/.bash_profile file:  
`export NVM_DIR=~/.nvm`  
`source $(brew --prefix nvm)/nvm.sh`  

* Install NodeJS  
Set your terminal's current working directory to the root of the repo
`nvm install`

---

3. **Yarn**
* Follow the install instructions for your OS here:
https://classic.yarnpkg.com/en/docs/install/
--- 

4. **Dependencies**   
`yarn install`
<br/>
<br/>

## Page Objects
The page object model follows a navigation hierarchy.
<br/>
<br/>

## Test Cases
All spec files only require 2 import statements.
<br/>
<br/>

## Licensing

GNU GPL v3
