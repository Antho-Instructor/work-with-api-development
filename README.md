# Express API Project

## Description

Ce projet à pour but de vous excercer sur l'utilisation d'outils comme Postman, Insomnia, etc. pour tester des API RESTful. Il s'agit d'une API basique qui permet de récupérer des données stockées dans un fichier JSON.

## Technologies Utilisées

-   **Node.js** : Environnement d'exécution pour JavaScript côté serveur.
-   **Express.js** : Framework web pour Node.js, facilitant la création d'applications web et d'APIs.
-   **CORS** : Middleware pour gérer les requêtes entre différents domaines.

## Installation

Pour installer le projet, assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, suivez les étapes ci-dessous :

1. Clonez le dépôt

2. Installer le projet

    ```bash
    npm install
    npm run dev
    ```

## Terminaison API

#### Get root path

```http
  GET /
```

| Parameter | Type   | Description            |
| :-------- | :----- | :--------------------- |
| `none`    | `none` | Return welcome message |

#### Get all items

```http
  GET /api/items
```

| Parameter | Type   | Description      |
| :-------- | :----- | :--------------- |
| `none`    | `none` | Return all items |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

![boom GIF - Find & Share on GIPHY](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhiM2Z0cjRwbHA0cXdxYjVxYjA3b2tzanBvcWFqZ2N6eTl2ajl3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/O3GqAYR9jFxLi/giphy.gif)

NOOOOON, une bombe à explosé !! 😱

Le reste de la documentation à disparue.. Il faut donc que tu la recrée. Tu peux t'inspirer de ce qui a été fait pour les deux premières routes.

Tu peux bien évidemment le faire sur excalidraw, draw.io, ou tout autre outil de ton choix. Pas obligé de le faire en markdown.

De mémoire, il faut regarder le fichier qui se situe dans `api/index.ts` !

Pour t'aider, tu peux utiliser un outil qui a été créé par un de nos collègues [RequestBuilder Deploy](https://aimach.github.io/request-builder/).

## Challenges

-   Je souhaite avoir un screenshot de tous les articles.
-   Je souhaite avoir un screenshot de l'article avec l'id 2.
-   Je souhaite modifier l'article l'id 3 et avoir un screenshot.
-   Je souhaite supprimer l'article avec l'id 11 et avoir un screenshot. (il faut peut être la créer je ne sais pas 😁 [en fait, si je sais, mais je ne vais pas te le dire])
-   Je souhaite ajouter un nouvel article et avoir un screenshot.

## Contact Us

-   Email Us: help@drylead.agency
-   [Follow us on Linkedin](https://www.linkedin.com/company/drylead)
-   [Follow us on Instagram](https://www.instagram.com/drylead/)
-   [Follow us on Facebook](https://facebook.com/drylead/)

## License

Ce projet est sous la licence ISC. Consultez le fichier LICENSE pour plus de détails.

## Remarques

    • Assurez-vous que le fichier datas.json est présent dans le répertoire racine du projet.
    • Pour toute question ou suggestion, n’hésitez pas à envoyer un mail `help@drylead.agency`
