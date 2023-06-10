# Developer Portfolio

## This is a fully responsive and awesome developer portlofio template

![Home](/public/homepageImage.jpg)

Edit `src/portfolio.ts` to get your personal data. Also in `src/portfolio.ts`, you can edit the visibility of some sections by simply changing the display to `false`. The default theme is `dark mode`. If you need `light mode` as your default theme, edit `src/ThemeContext.tsx`. 

The template is aimed to be open source. If you'd like to contribute, fork, create and after creating something awesome or solved an error, feel free to create a `Pull Request`.

# Getting started

```
# Clone the repo
git clone https://github.com/Leestan360/portfolio.git

# Navigate into the repo
cd portfolio

# Install dependencies
npm install

# Start the server
npm start
```

# Linking portfolio to GitHub
First, generate a classin GitHub personal access token by following the [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). The token is like a password. Ensure to use it only in environment variables.

Second, on your editor:

1. Create a new file named `.env` in the root of the project directory.
   
   ```
   Portfolio
     - node_modules
     - public
     - src
     - .env       <-- create it here
     - .gitignore
     - package-lock.json
     - package.json
     - README.md
     - tailwind.config.js
     - tsconfig.json
   ```

2. In the `.env` file, add your GITHUB_TOKEN and GITHUB_USERNAME.
   
   ```  
   // .env
   GITHUB_TOKEN = "YOUR GITHUB TOKEN"
   GITHUB_USERNAME = "YOUR GITHUB USERNAME"
   ```

Note: Open Source Projects section only show pinned items of your GitHub. Pin the projects you want to be displayed on your GitHub website account.

# Deployment

After you're done with setting up the website, you should host it online in a hosting platform of your choice starting with GitHub pages. 

There are many hosting platforms and you should choose one that suits you.

# Technologies Used
1. [React](https://react.dev/)
2. [TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app)
3. [Typescript](https://www.typescriptlang.org/)


# Project Maintainers
1. Stanley Mayore [GitHub](https://github.com/Leestan360), [Twitter](https://twitter.com/MayoreStanley), [LinkedIn](https://www.linkedin.com/in/stanley-mayore/)
2. Bebeto Nyamwamu [GitHub](https://github.com/realonbebeto), [Twitter](https://twitter.com/realonbebeto), [LinkedIn](https://www.linkedin.com/in/realonbebeto/), [Portfolio](https://realonbebeto.github.io)