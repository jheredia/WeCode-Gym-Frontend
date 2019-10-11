# WeCode Gym Frontend

# Project Structure

## Packages

Every package should be correctly installed on the environment that it's needed, that is, if a dependency is only used in development, it should be listed as a dev-dependency. To guarantee the integrity between the projects, when someone updates the package.json then _npm ci_ should be used, else _npm install package_ is just fine.

## Folders

### Components

Each component should have it's own folder and should contain everything related to it

### Assets

Shared assets (Such as images) should be placed here.

### Public

This folder will contain the root index.html file and other elements to be used as the visible part of the project.

# Development Cycle

## Branches

Two main branches will represent the stable builds of the site and the alpha/beta build.

- Master (Stable Branch)
- Development (Alpha Branch)

We will add a new branch for each feature we want to add, trying to make them as specific and small as possible.

The feature branch will be added to development to check how the new features integrate with what is already being built and on the end of a cycle (1~4 features) they will merge with the master one.

We could have a pre-stable branch to use as beta and keep development as alpha.

## Pull Requests

Avoid pushing directly to master (Unless absolutely necessary) and work using **Pull requests**, this will help us mitigate possible errors and give a smooth learning curve to solve issues that may arise.

## Issues

If possible, link the tasks given on [Trello](https://trello.com/b/SRGw6xvf/wecode-gym) to a new issue on the repository so anyone can see the progress on the project and
we can set milestones based on what we have accomplished.

## Milestones

Each new feature should have it's own milestone, doing so will help us to keep track of the projected dates and how we are performing. Each set of pull requests should also be included in a new milestone representing a new version to be merged with development and after that, production. This will allow us to keep releases clean and organized through the whole development.

## Releases

If one milestone is big enough and is mature enough we will create a new release, starting from version _0.0.1_ (Current empty repository one). We should try to keep releases as small as possible so the user experience is not drastically changed. Every release should be correctly documented with a description of what it includes (i.e: bug fixes, features, quality of life improvements, etc ).

**Happy Coding!**
