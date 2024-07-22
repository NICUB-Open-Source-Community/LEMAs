# What is LEMAs?
LEMAs is a conversational e-learning app.
It is a platform for Conversational Learning Application, where teachers can monitor individual learner progress and engage with the learners in a chat through the platform, as well as launch class-wide campaigns, amongst other application. LEMAs is a form of digital learning that focuses on delivering a learning experience as simple as having a conversation, simultaneously providing a richer and more learner-centered experience compared to traditional eLearning experiences.

# Introduction
Welcome! (i mirëpritur; welkom; bienvenue; benvenuto; witamy; bienvenidos; 欢迎 أهلا بك; ようこそ; 환영; chào mừng; soo dhawow; karibu; Taŋyáŋ yahípi; Ẹ káàbọ̀; ndewo; barka da zuwa) and thank you for checking us out!

Following these guidelines helps to communicate that you respect the time of the people managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

We follow the standard Git workflow of fork -> change -> pull request -> merge -> update fork -> change ... (repeat forever). If you are new to open source, we recommend GitHub's excellent guide on "How to Contribute to Open Source". In addition, please feel free to reach out to any of the maintainers or other community members if you are struggling; we are here to help you learn!

# Your First Contribution
**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request).
At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first. 😸

# Getting Started
## Opening an issue
If you're experiencing an issue with CHAOSS Slack Bot or have a question you'd like help answering, please feel free to open an issue. To help us prevent duplicates, we kindly ask that you briefly search for your problem or question in our issues before opening a new one.
Please note that if you open a bug report, we cannot help you until you have provided us with all the relevant information. Respectfully, we do not have the time to try and recreate an error given with minimal or no context, so by providing this information you are helping us help you! Provide descriptions to the best of your ability, and please include screenshots and error logs if applicable.

## Fixing an issue
If you would like to fix an existing issue, leave a comment on it to indicate. This is to avoid having several people unknowingly working on the same issue.

## Contributing to the source code
1. Fork this repo, and then clone it
```
$ git clone https://github.com/NICUB-Open-Source-Community/LEMAs.git
$ cd LEMAS
```
2. Create a branch (ideally, key development features should belong to a branch): 
```$ git checkout -b new_branch```
3. Install dependencies ```$ npm install``` or ```$ yarn install``` or ```$ pnpm install```
4. Make your changes, we recommend you write tests
5. Commit the changes with a descriptive commit message and push to your fork. PS: here's a guide for  [writing good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/). if you’re not familiar with DCO, read the guide on [signing off commits](#signing-off-on-commits) before you come back to this step. 
```
$ git add .
$ git commit -s -m "descriptive commit message"
$ git push -u origin my-new-branch
```
6. Submit pull request.
At this point, you are waiting on our response. We like to atleast comment on pull requests within three business days, (and, typically, one business day). Once one of our maintainer(s) have/has had a chance to review your PR, we will either mark it as "needs review" and provide specific feedback on your changes, or we will go ahead and complete the pull request.

## Signing-off on Commits
To contribute to this project, you must agree to the Developer Certificate of Origin by the CHAOSS charter for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to make the contribution. To signify that you agree to the DCO for contributions, you simply add a line to each of your git commit messages:
Signed-off-by: Jane Smith <jane.smith@example.com>

This can be easily done by using the -s flag when using git commit. For example:
$ git commit -s -m "my commit message w/signoff"

To ensure all your commits are signed, you have to configure git properly by editing your global .gitconfig
```
$ git config --global user.name "John Doe" 
$ git config --global user.email johndoe@example.com
```

Any pull requests containing commits that are not signed off will not be eligible for merge until the commits have been signed off.

# Technical Resources
## Git & GitHub
- [How to contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub's "Hello World" tutorial](https://guides.github.com/activities/hello-world/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Commit message style guidelines](https://commit.style/)
- [No-nonsense Git reference](https://rogerdudler.github.io/git-guide/) (best to have a cursory understanding of Git before hand)
- [A Complete Guide to DCO for Open Source Developers](https://www.secondstate.io/articles/dco/)

## Testing
- [Official Jest documentation](https://jestjs.io/docs/getting-started)
- [Jest Tutorial for Beginners](https://www.valentinog.com/blog/jest/)