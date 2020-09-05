<template>
  <div id="app">
    <div class="navbar">
      <nav id="nav">
        <router-link to="/">
          <img alt="Solaride logo" src="./assets/logo.png">
        </router-link>
        <ul>
          <li>
            <router-link to="/">RallyEstonia</router-link>
          </li>
          <li>
            <router-link to="/edetabel">Edetabel</router-link>
          </li>
          <li>
            <a class="alert" href="https://hooandja.ee" target="_blank">Toeta meid Hooandjas!</a>
          </li>
        </ul>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Montserrat:wght@400;500;700&display=swap');

@font-face {
  font-family: "Cera Pro Bold";
  src: url(./fonts/Cera-Pro-Bold.otf) format("truetype");
}

@font-face {
  font-family: "Cera Pro Medium";
  src: url(./fonts/Cera-Pro-Medium.otf) format("truetype");
}

/* Some resets */
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
figure,
blockquote,
dl,
dd { margin: 0; }

html { scroll-behavior: smooth;}

body {
  min-height: 100vh;
  text-rendering:optimizeSpeed;
  line-height:1.5;
}

ul[class] { list-style: none }
a:not([class]) { text-decoration-skip-ink: auto;}

img,
picture {
  max-width: 100%;
  display: block;
}

input, button, textarea, select { font: inherit }
img:not([alt]){ filter: blur(10px)}
@media(prefers-reduced-motion:reduce) {
  *{animation-duration: .01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration:.01ms !important;
  scroll-behavior: auto !important}
}

/* App styles */

$red:  #E52629;
$orange: rgb(231,149,66);

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 12px;

  @media(min-width: 900px) {
    font-size: 16px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 900px) {
    /* padding: 2rem 15rem 2rem 15rem; */
  }
}

#nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 125px;
  padding-left: 4rem;
  padding-right: 4rem;

  @media(min-width: 900px) {
    flex-direction: row;
  }

  img {
    width: 300px;
    height: auto;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;

    @media(min-width: 900px) {
      flex-direction: row;
    }
  }

  li {
    margin: 0;
    padding: 0;
    margin-top: 1rem;

    @media(min-width: 900px) {
      margin-top: 0;
    }

    &:not(:last-child) {

      @media(min-width: 900px) {
        margin-right: 2rem;
      }
    }
  }

  a {
    font-family: 'Cera Pro Medium';
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    white-space: nowrap;
    line-height: 20px;

    @media(min-width: 900px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &.router-link-exact-active,
    &:hover {
      color: $orange;
      font-family: 'Cera Pro Bold';
    }

    &.alert {
      color: $red;
    }
  }
}
</style>
