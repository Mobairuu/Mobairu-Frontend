# Mobairu Frontend

The Awesome frontend site for Mobairu!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Info

This project has several parts. Here is the information to help you understand.

- `pages/` folder contains the files to be rendered. It has auto routing feature, as provided by NextJS
- `styles/` folder contains the Styling files. We're using SCSS a.k.a SASS for styling.
- `components/` folder contains the components for the project. As in react, they can be re-used and 
  helps in keeping code DRY.
- `public/` contains all the assets and Images (Static files)

### Project layout info

In `components/` folder, we'll have a layout Components which will return following things:
```
<Navbar />
{ children }
<Footer />
```

To have navbar, footer for each page, we'll add them, Remember `Navbar.jsx` and `Footer.jsx` are 
components too in components folder, which we import in `Layout.jsx` and use, Then in `pages/_app.js` 
which contains the basic structure of an App.

By default, it's like this

```
const MyApp = ({Component, pageProps}) => {
    return <Component {...pageProps} />
}
```

And after having the layout attribute, It'll be like this
```
return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
```

And `Layout.jsx` is like this
```
return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
  );
```

Children being the page's content, whichever thing is between nav and footer and Navbar and 
footer to keep things DRY.

Edit the `Navbar.jsx` and `Footer.jsx` to update the Navbar and Footer, As the layout is defined,
they're Auto added to all the pages.

## 🤝 Contributing

Contributions, issues and feature requests are welcome. After cloning & setting up project locally, you can just submit
a PR to this repo and it will be deployed once it's accepted.

⚠️ It’s good to have descriptive commit messages, or PR titles so that other contributors can understand about your
commit or the PR Created. Read [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) before
making the commit message.

## 💬 Get in touch

If you have various suggestions, questions or want to discuss things with our community, Join our discord server!

[![Discord](https://discordapp.com/api/guilds/761191148223987723/widget.png?style=shield)](https://discord.gg/fXGyhkPeMw)

## Show your support

We love people's support in growing and improving. Be sure to leave a ⭐️ if you like the project and
also be sure to contribute, if you're interested!

## License

- [GPL V3](https://github.com/Mobairuu/Mobairu-Frontend/blob/main/LICENSE)
