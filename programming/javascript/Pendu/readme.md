# Le jeu du pendu
Jeu du pendu interactif

L'objectif était de réaliser une version interactive sur ordinateur du jeu du pendu, un utilisateur saisi un mot et un autre devra essayer de le deviner

Le projet est en 3 parties : le html, css et js mais la magie opère surtout dans le js
Mon Js est découper en 4 parties, l'initialisation des valeurs qui sont utilisés ou récupèrer du html car elles vont être changer, ensuite la fonction
preparatif pour préparer le jeu, la fonction saisie qui est le déroulement du jeu après saisie et enfin la fonction jouer qui permet de jouer jusqu'à ce que les conditions
soient remplies

Fonction principales
    J'ai créé la fonction preparatif pour permettre d'initialiser le jeu et avoir l'affichage du nombre de caractères du mot recherché
    J'ai créé la fonction saisie pour réagir en cas de faute dans la saisie d'une lettre et d'en récuperer une valable, puis elle vérifie si la lettre est présente ou non et change l'affichage du texte ou de l'image si nécessaire et affichera la lettre saisie pour éviter la répétition des entrées par l'utilisateur
    J'ai créé la fonction jouer pour permettre de jouer au jeu une fois lancé et de s'arrêter quand le nombre d'échecs est trop important ou le mot est trouvé.

J'ai utilisé la fonction prompt pour récupèrer le mot par un utilisateur et aussi comme une alerte en cas de mauvaise saisie pour que l'utilisateur soit obligé de ressaisir la lettre
J'ai utilisé la fonction toLowerCase pour changer le mot en minuscule au cas où une ou plusieurs lettres sont en majuscules ce qui entrainerait des problèmes dans la recherches des lettres
Et enfin j'ai utilisé la fonction getElementById pour récupèrer les élèments dans le html pour les modifier, que ce soit les textes affichés ou l'image du pendu