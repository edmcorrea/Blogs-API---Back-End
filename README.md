# Blogs-API- in NodeJs with Sequelize
<!-- Improved compatibility of back to top link: See: https://github.com/edmcorrea/project-app-de-receitas--/blob/main/README.md -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<div align="center">

  <h3 align="center">Blogs API</h3>
  
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#construído-com">Construído com</a></li>
      </ul>
    </li>
<!--     <li>
      <a href="#getting-started">Introdução</a>
      <ul>
        <li><a href="#pre-requisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li> -->
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog!

Para isso, utilizei `NodeJs`, `Express`, `MySql`, `JWT` e o maravilhoso `Sequelize`!
Depois de criar muita query SQL na unha, tive o prazer de aprender utilizar esse ORM maravilhoso para ler e manipular nossos bancos de dados relacionais!



<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>



### Construído com

<!-- This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->
 <table width="320px" align="center">
  <tbody>
    <tr valign="top">
       <td width="80px" align="center">
        <span><strong>Node.js</strong></span><br>
        <img height="32" src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png">
      </td>
      <td width="80px" align="center">
        <span><strong>Sequelize</strong></span><br>
        <img height="32" src="https://user-images.githubusercontent.com/98132078/200319967-83cfe4c7-6db5-4aec-9dba-e051a553aa5e.png">
      </td>
     <td width="80px" align="center">
      <span><strong>Express</strong></span><br>
      <img height="32" src="https://user-images.githubusercontent.com/98132078/200321834-cc7ba953-4bb0-47f3-b0bb-f679cc7f6d80.png">
    </td>
    <td width="80px" align="center">
      <span><strong>MySQL</strong></span><br>
      <img height="32" src="https://user-images.githubusercontent.com/98132078/200322066-f1beb621-0258-4c74-ba3a-ce829cee40da.png">
    </td>
   </tr>
  </tbody>   
</table> 
      
<!-- * [![Next][Next.js]][Next-url] -->
<!-- * [![React][React.js]][React-url] -->
     
<!-- * [![Vue][Vue.js]][Vue-url] -->
<!-- * [![Angular][Angular.io]][Angular-url] -->
<!-- * [![Svelte][Svelte.dev]][Svelte-url] -->
<!-- * [![Laravel][Laravel.com]][Laravel-url] -->
<!-- * [![Bootstrap][Bootstrap.com]][Bootstrap-url] -->
<!-- * [![JQuery][JQuery.com]][JQuery-url] -->
      
 

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- GETTING STARTED -->

<!-- ## Introdução

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->

<!-- ### Pré-requisitos

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->



<!-- ### Installation

 _Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- USAGE EXAMPLES -->
## Detalhes do desenvolvimento

Na aplicação foi necessário o uso do `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Desenvolvi endpoints que estão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto foi trabalhado a **relação entre** `user` e `post`; 

  3. Foi necessário a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.
  
  4. Foi reforçada a prática do `Express`;

  5. Com o `Sequelize`, foram criadas migrations e seeds, para criar e povoar as tabelas do `MySQL`;

  6. Foi utilizada o `JWT` para autenticação das contas e segurança no acesso as APIs e informações existentes.


<!-- _=For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- ROADMAP
## Roteiro de Execução

- [ ] Tela
- [ ] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- LICENSE 
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contato

Edmilson Corrêa - edm.correa@hotmail.com

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- ACKNOWLEDGMENTS 
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
