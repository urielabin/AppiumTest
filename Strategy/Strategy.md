# Test Automation Strategy Plan

The objective of this document is to provide an strategy plan for the test automation process of a iOS native app considering those tests need to be executed as a part of regression testing on a CI process that will be running in the cloud using Jenkins.

## Language
### Javascript:

#### Why Javascript?
>Javascript is one of the most used languages in the present, have huge community and is very open, so it’s very easy to find good documentation for practically anything you want to implement.

#### It’s a good language for test automation?
>Javascript is one of the languages that based on the huge community of developers that he have contains a lot of very useful frameworks that are open source and that are on continuous improvement IE: Protractor, WebdriverIO, WebdriverJS, NightwatchJS, NightmareJS, etc.

>In the case of Web automation since most of the actual pages are constructed in the frontend using Javascript and frameworks like React and Angular the use of promises is very useful on the automation side to handle asynchronous applications.

#### But all those frameworks are just wrappers from Selenium Webdriver right?
>Yes, most of them are using the selenium library as their core, but also they are extending and implementing the scripting in a different way for different purposes what gives you more flexibility at the moment of selecting a tool for an specific project.

## Automation Framework
### WebdriverIO:

#### Why WebdriverIO?
>From the more mature frameworks that the javascript language have, WebdriverIO provides also a lot of flexibility allowing you to work not just with web applications but also mobile.

#### Pros of using WebdriverIO:
* Mature Framework
* Automation for Mobile and Web applications.
* Integrates with a lot of useful services IE: SauceLabs, Appium, BrowserStack, PhantomJS, Docker, etc.
* Implements different kind of reporters IE: Junit, Dot, Spec, Json, etc.
* Implements Selenium Grid which is very useful for parallel testing.
* Allows you to integrate with different assertion frameworks.
* Allows you to implement Page Object Pattern for a more scalable and maintainable project.


### Appium:

#### Why Appium?
>Appium server allows you to handle your automation tests on native, hybrid and mobile web apps so it provides a lot of flexibility and is one of the most mature frameworks for mobile automation also integrates very well with other automation frameworks like Selenium, WebdriverIO, Nightwatch.



## Continuous Integration
### JenkinsCI:
#### Why Jenkins?
>It’s one of the most used CI tools, also allows you to integrate with a lot of other tools to make your job easier via plugins like Github, Docker, SauceLabs, Browserstack, etc.

### Docker:
#### Why Docker?
>Allows you to create lot of containers  that will have your environment in a single VM which works very well for parallel testing using Selenium Grid and also gives you the possibility of take down the execution time of your tests in a very notable way.

### SauceLabs/TestObject:
#### Why SauceLabs/TestObject?
>Allows you to execute your mobile tests on real devices and contains a lot of possible combinations for the different platforms and operative systems

## Continuous  Integration Phases

1. Checkout
> In this phase the new code from the development team is created with the PR containing new changes to the application.

2. Compile
> After the PR has been accepted from the dev team the new code is compiled and merged to the new app for testing.

3. Deploy
> The new version of the app is created and distributed for testing.
4. Test
> Automation test suites (Smoke, Regression, etc) are executed in their respective environments(Cloud, Real Devices, Simulators).

5. Report
> The reports from the test executions are analyzed and if the sign off from the test team is done the app could be sent to UAT.
