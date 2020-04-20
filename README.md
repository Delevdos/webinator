# Webinator Framework
Webinator is a JavaScript web automation framework built using WebdriverIO v6 APIs and Mocha. This framework was built knowing that no website is the same, so why would the same automation work for every site?

We've done the heavy lifting to make Mocha and Webdriver adaptable for your system under test.



## Installation
The below installation steps assume that you have `brew` installed for Mac or `chocolatey` on Windows. All commands will be ran inside your OSes terminal (powershell on Winodws).


#### 1. OpenJDK/JRE
##### Linux
`sudo apt-get install openjdk-11-jre-headless`
##### Windows
`choco install openjdk --version=11.0`
##### Mac
`brew tap AdoptOpenJDK/openjdk`
`brew cask install adoptopenjdk11`


#### 2. NVM
##### Linux
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
##### Windows
`choco install nvm`
##### Mac
`brew update && brew install nvm`
`mkdir ~/.nvm`
Add the following lines to your ~/.bash_profile file:
```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```


#### 3. [Yarn](https://classic.yarnpkg.com/en/docs/install/)


#### 4. Dependencies
After cloning the repository to your machine, set your terminals current working directory to the root of the repo.

##### All
`nvm install`
`yarn install`


## Licensing

MIT
