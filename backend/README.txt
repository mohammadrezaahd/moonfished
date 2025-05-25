Install dependencies:
    check requirements.txt for manage dependencies based on your OS

Start project:
    local: py manage.py runserver

    docker:
        set env file:
            powershell: $env:ENV_FILE=".env.production" or $env:ENV_FILE=".env.development"
            bash: export ENV_FILE=".env.production" or export ENV_FILE=".env.development"
        build:
            docker compose up --build


Migrations:
    bash: docker compose exec web python manage.py makemigrations
    shell:


Note: It is recommended to use local service for development mode. Otherwise, set the environment variables according to your system.