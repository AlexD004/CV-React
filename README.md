# CV with React JS

There is a CV, designed and developped for my formation to become a fullstack developper.
It use React.JS to structure and edit the content.

## :magic_wand: Features

- ✨ CSS with Bootstrap
- ✨ Icons with FontAwesome
- ✨ Responsive
- ✨ Valid HTML5 & CSS3
- ✨ Contact form with required fields control (but no configuration to send mail)
- ✨ A component to display cards

## 🏗️ Getting Started

### 📄 Prerequisites

You'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en) (which comes with NPM) installed on your computer.

```
node@v16.4.2 or higher
npm@7.18.1 or higher
git@2.30.1 or higher
```

### 🔨 Installation

From your command line, first clone CV-React :

```sh
# Clone repository
$ git clone https://github.com/AlexD004/CV-React

# Move into repository
$ git cd cv-react
```

After that, you can install the dependencies either using NPM.

```
# Install dependencies
$ npm install

# Run the project in Dev Mode to see the result
$ npm start
```

## 🎚️ Custom set-up

### 📋 How to use CardsList Component

You can edit the CardsList component if you want. You can find it here :

📂 CV-React
--> 📂src
--> 📂components
--> 📄CardsList.jsx
        
1. In the main folder 'CV-React', search the folder 'src'
2. In the folder 'src', search the folder 'components'
3. In the folder 'components', search the file 'CardsList.jsx'
4. Open it !
5. Adjust like you need
   
You can call this components in all pages you want :

```

# On top of your page, adjust the path if necessary !
import CardsList from '../assets/components/CardsList'

# In the render (JSX)
<CardsList 
  dataCards={ [stateWithDatas] } 
  textAlign= "text-center" 
  gutterBetweenCards= "g-2" 
  col= "col-sm-12 col-md-4" 
  cardStyle= "cardShadow" 
  buttonStyle= "bg-primary my-3"
  buttonText= "Lire la suite"
/>

```

You can change all informations.
Props in CardsList are injected in elements className to change styles.
CardsList use Bootstrap, so use it you too !

```
# Example of datas, you can rename it, just adjust the prop "dataCards" when you call the component
const stateWithDatas = [
      { 
        id: 1,
        icon: <FontAwesomeIcon icon={[iconeCode]} size="3x"/>,
        imageURL: "path/to/image.jpg",
        title: "String",
        content: "string,
        buttonLink: "path/to/page.html",
        infoPlus: "string"
      }
    ];
```

You can add any objects needed.
Each objet will be deplayed as a card.

### 📋 How to use GithubProfil Component

You can edit the GithubProfil component if you want. Just open the file and change functions to call more (or less) informations, or update the JSX.
   
You can call this components in all pages you want :

```

# On top of your page, adjust the path if necessary !
import GithubProfil from 'path/to/GithubProfil'

# In the render (JSX)
<GithubProfil 
  user=" [THE.USERNAME.YOU.WANT.TO.DISPLAY.INFOS] "
/>

```
