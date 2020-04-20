# Webinator Framework
Webinator is a JavaScript web automation framework built using WebdriverIO v6 APIs and Mocha. This framework was built knowing that no website is the same, so why would the same automation work for every site?

We've done the heavy lifting to make Mocha and Webdriver adaptable for your system under test.



## Installation
The below installation steps assume that you have `brew` installed for Mac or `chocolatey` on Windows. All commands will be ran inside your OSes terminal (powershell on Winodws).
---

1. **OpenJDK/JRE** 
* Linux  
&nbsp;&nbsp;&nbsp;&nbsp;`sudo apt-get install openjdk-11-jre-headless`  
* Windows  
&nbsp;&nbsp;&nbsp;&nbsp;`choco install openjdk --version=11.0`  
* Mac  
&nbsp;&nbsp;&nbsp;&nbsp;`brew tap AdoptOpenJDK/openjdk`  
&nbsp;&nbsp;&nbsp;&nbsp;`brew cask install adoptopenjdk11`
---

2. **NVM**  
* Linux  
&nbsp;&nbsp;&nbsp;&nbsp;`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`  
* Windows  
&nbsp;&nbsp;&nbsp;&nbsp;`choco install nvm`  
* Mac  
&nbsp;&nbsp;&nbsp;&nbsp;`brew update && brew install nvm`  
&nbsp;&nbsp;&nbsp;&nbsp;`mkdir ~/.nvm`  
Add the following lines to your ~/.bash_profile file:  
&nbsp;&nbsp;&nbsp;&nbsp;export NVM_DIR=~/.nvm <br/>  
&nbsp;&nbsp;&nbsp;&nbsp;source $(brew --prefix nvm)/nvm.sh  
---

3. **Yarn**
* Follow the install instructions for your OS here:
&nbsp;&nbsp;&nbsp;&nbsp;https://classic.yarnpkg.com/en/docs/install/
--- 

4. **Dependencies**  
* After cloning the repository to your machine, set your terminals current working directory to the root of the repo.  
&nbsp;&nbsp;&nbsp;&nbsp;`nvm install`  
&nbsp;&nbsp;&nbsp;&nbsp;`yarn install`


## Licensing

MIT
