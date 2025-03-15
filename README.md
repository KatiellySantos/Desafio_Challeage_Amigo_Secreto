# Desafio Challeage Amigo Secreto - Alura
Este código foi desenvolvido para criar um programa simples de "Amigo Secreto" em JavaScript. Ele permite que os usuários adicionem nomes de amigos a uma lista e, em seguida, realize um sorteio aleatório para determinar quem é o "amigo secreto".

Abaixo está a explicação com  detalhes sobre o código feito.
```sql
1. Criação de um array vazio chamado nomes, que será usado para armazenar os nomes dos participantes.
2. A função adicionarAmigo() é responsável por pegar o nome digitado no campo de entrada.
3. O document.getElementById("amigo").value.trim() captura o valor do campo de entrada e remove espaços extras no
começo e no fim.
4. Se o nome for válido (não estiver vazio), ele é adicionado ao array nomes usando push().
5. Após adicionar, o campo de entrada é limpo para facilitar a inserção de novos nomes.
6. O nome também é exibido na lista na tela dentro de um elemento <li>.
7. Se o usuário tentar adicionar um nome vazio, um alerta será exibido pedindo um nome válido.
8. A função sortearAmigo() é chamada quando o usuário deseja sortear um nome aleatório.
9. document.getElementById("resultado") captura o elemento onde o nome sorteado será exibido.
10. Se houver nomes na lista, o código gera um número aleatório entre 0 e o tamanho da lista, arredonda para baixo
com Math.floor() e escolhe um nome do array nomes. Isso funciona assim:
   ▪️Math.random() gera um número decimal entre 0 e 1.
   ▪️Multiplicamos esse número pelo tamanho do array (nomes.length), fazendo com que o valor resultante esteja
dentro do intervalo de índices possíveis para o array.
   ▪️Math.floor() arredonda esse número para baixo, garantindo que seja um número inteiro válido, ou seja, um índice
que pode ser usado para acessar um elemento do array.
11.  O nome sorteado é exibido na tela com a mensagem "O amigo secreto é: nome_sorteado".
12.  Se a lista estiver vazia, a mensagem "Lista vazia." será exibida.
