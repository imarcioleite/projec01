# Comandos Git
## Configurando/Usando o Git
### Definindo Usuario Git
git config --global user.name "nome"<br>
git config --global user.email "email"<br>
git config --global core.editor vscode<br>
git config user.name<br>
git config user.email<br>
git config --list<br>
### Iniciando um Repositório
git init<br>
### Comandos Iniciais
git status<br>
git add<br>
git add -A<br>
git log<br>
git log --online (verifica o nome do commit e numero)<br>
git log --online --graph --all (verifica os merge graficamente)<br>
git log --graph --all<br>
### Conceitos
- **branch**: verções diferente do seu sistema<br>
- ex: a branch principal do seu sistema e a **master** mais, vc pode ter outras<br>
- git branch<br>
- **commit**: enviar as suas alterações para o git<br>
- ex1: git commit -m "mensagen"<br>
- ex2: git commit -am "mensagem" (commit sem passar pelo add)<br>
### Revertendo Modificações
git reset --soft/--mixed/--hard + id do commit<br>
(ambiente de trabalho mais usado --soft)<br>
### Branchs
git branch<br>
git branch teste (criando um novo branch)<br>
git checkout teste (mudando de branch)<br>
git branch -D teste (deletando o branch local teste)<br>
git push origin :teste (deletando branch teste no github)<br>
### Diferença entre Arquivos
git diff<br>
git diff --name-only (nome do arquivo odificado)<br>
git diff teste.css (expecificando qual arquivo)<br>
git checkout HEAD -- teste.css (retornando a ultima verção do arquivo)<br>
### Conectando o local com o Remoto
git remote add origin "endereço do git"<br>
git remote<br>
git remote -v<br>
git pull origin master (do git hubb para local)<br>
git push origin master (do local para github)<br>
**OBS** sempre fazer um **pull** antes de um **push**, evita conflitos<br>
### Ignorando arquivos tanto no local e no github
Criar um arquivo chamado **.gitignore**<br>
dentro do arquivo ex:<br>
teste.txt;<br>
*.txt<br>
pasta/<br>
pasta/(+ asteristico)<br>
### Revertendo sem perder o código
git revert --no-edit + o codigo do commit que deu errado que vc quer reverter para não perder o codigo que ta funcionando.
### Clone
git clone + a url(html) do projeto que vc quer clonar
### Fork
1. No github vc clica em fork<br>
2. O gitrub criara um branch do fork (projeto)<br>
3. Pegar a url do projeto (fork) criar um clone no terminal<br>
4. Alterar arquivo local<br>
5. Add e commitar arquivo modificado
6. Verifica em que **branch** está. e o servirdor remoto "git remove -v",<br>
7. git push origen 5.x, no caso servidor (origem), branch(5.x)<br> 
8. No meu github no projeto alterado clicar em "New pull request"<br>
9. Verificar se ta tudo certo, clicar em "Create pull request"<br>
### Mesclando Projetos
Vc tem que esta na **master** e mandar o comando de mesclar o projeto<br>
git merge teste (no caso teste e a sua **branch** se juntando a master)<br>
**OBS** caso tenha conflito existe um menu de opções que o git faz para corrigir o comflito



