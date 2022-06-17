# symfonyreactproject

## Installer le projet
- Cloner le repo
- Créer un utilisateur dans phpmymadmin
- Créer le .env.local et renseigner les identifiants et mdp
- Exécuter la cmd "composer install" (si conflit avec la version de php : "composer install --ignore-platform-reqs")
- A la racine du projet, exécuter la cmd :  "php -S localhost:8000 -t public -d display_errors=1"
- Aller dans le dossier "frontend" et exécuter la cmd : "yarn" puis "yarn start"
