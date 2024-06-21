# Módulo 1 - HTML e css

## Arquitetura Cliente-Servidor para WEB

### HTTP - introdução
- **O que pensammos, inicialmente, quando se fala em "HTTP"?**
  - Sim, quando você acessa as páginas web, você o faz por meio do HTTP.
- **O que acontece quando você digita a  URL de uma página no seu navegador?**
  - Quando você digita a URL de uma página no navegador e pressiona Enter, várias etapas ocorrem nos bastidores para trazer o conteúdo da página para você. Aqui está uma visão geral simplificada do que acontece:

    1. **Resolução do DNS (Domain Name System)**:
      O navegador envia uma solicitação ao servidor DNS para traduzir o nome de domínio (por exemplo, www.example.com) em um endereço IP. Isso é necessário porque os computadores se comunicam entre si usando endereços IP, não nomes de domínio.

    2. **Estabelecimento da conexão TCP (Transmission Control Protocol)**:
      O navegador estabelece uma conexão TCP com o servidor que hospeda o site, usando o endereço IP obtido na etapa anterior. Isso envolve a troca de pacotes de dados entre o navegador e o servidor para estabelecer uma conexão confiável.

    3. **Envio da solicitação HTTP (Hypertext Transfer Protocol)**:
      Após estabelecer a conexão TCP, o navegador envia uma solicitação HTTP para o servidor, especificando o recurso específico que deseja obter (por exemplo, a página inicial, um arquivo de imagem, etc.).

    4. **Processamento da solicitação no servidor**:
      O servidor recebe a solicitação HTTP e a processa. Isso pode envolver a execução de código no servidor, acesso a bancos de dados, geração de conteúdo dinâmico, entre outras coisas, dependendo da natureza do site.

    5. **Envio da resposta HTTP**:
      O servidor responde à solicitação HTTP enviando de volta uma resposta. Isso geralmente inclui o conteúdo da página solicitada, junto com informações como o código de status da resposta (por exemplo, 200 para "OK", 404 para "não encontrado", etc.).

    6. **Renderização da página pelo navegador**:
      O navegador recebe a resposta do servidor e começa a renderizar a página. Isso envolve interpretar o HTML, CSS e JavaScript para exibir o conteúdo da página conforme projetado.

    7. **Exibição da página para o usuário**:
      Finalmente, o navegador exibe a página renderizada para o usuário, permitindo que ele visualize e interaja com o conteúdo.
- **HTTP**: do inglês, Hypertext Transfer Protocol, ou seja, Protocolo de transferência de Hipertexto.
  - Trata-se de um protocolo que define como as mensagens devem ser enviadas pelo cliente e pelo servidor em uma Rede IP.
  - É sobretudo utilizada para a solicitação/recebimento de páginas web pela Internet.
  - O HTTP utiliza o protocolo TCP/IP para o transporte das informações entre cliente e servidor.
  - O IP (Internet Protocol) é o "CPF" de um dispositivo dentro da Internet. Cada dispositivo possuí um IP único.
  - Exemplos:
    - 192.168.10.150
    - 3002:0bd6:0000:0000:0000:ee00:0033:6778 (endereço de ipv6)
- **Como sabemos o endereço IP do servidor, se digitamos apenas a URL do site?**
  - Para obter o endereço de IP de um servidor, é necessário consultar o servidor DNS (Domain Name System).
  - Existem cerca de 13 servidores DNS que são capazes de informar o endereço IP dos servidores a partir de seus domínios.
  - Com o endereço IP do servidor, é possível estabelecer uma comunicação entre ele e o cliente. Esse link será feito por meio do **protocolo TCP**.
  - O **TCP** (Transmission Control Protocol) **estabelece a conexão** entre cliente e servidor, e organiza os dados que serão **transmitidos** entre eles.
  - A conexão permanece ativa até que todos os dados sejam transferidos.
- **Vamos rever a Arquitetura Cliente-Servidor...**
![HTTP - conexão estabelecida](./prints/http-conexão%20estabelecida.png)
![HTTP - requisição HTTP](./prints/http%20-%20requisição%20HTTP.png)

### Métodos HTTP
- Especifica a ação que o cliente deseja executar.
- Normalmente o cliente deseja obter (GET) alguma informação do servidor ou enviar dados para o servidor (POST).
- Porém, existem outras ações que o cliente pode realizar.

  1. **GET**: utilizado quando se deseja obter um recurso do servidor.
  2. **POST**: utilizado para enviar dados (arquivos, formulários) para o servidor.
  3. **PUT**: utilizado quando se deseja modificar um dado do servidor.
  4. **DELETE**: utilizado quando se deseja deletar um dado do servidor
  5. **PATCH**: utilizado quando se deseja realizar alterações parciais em um dado do servidor.
- Outros métodos pouco usuais são:
  - Head
  - Connect
  - Options
  - Trace

### Mensagens HTTP
- As mensagens de requisição e resposta podem ser divididas em duas partes:
  - Cabeçalho (header)
  - Corpo (payload)

**Requisição**

![http request](./prints/http_request.png)

**Resposta**

![http response](./prints/http_response.png)

**Código de status**

![Código de status](./prints/codigos%20de%20status.png)

**E o HTTPS?** HTTP Seguro
- Do inglês, Hipertext Transfer Protocol Secure; ou seja, Protocolo de transferência de hipertexto seguro.
- É usado para criptografia e autenticação de comunicação entre o servidor web e o navegador.
- Sem criptografia, os dados na web seriam lidos como texto simples por qualquer pessoa com acesso à rede relevante.
- As páginas da Internet utilizam este protocolo para evitar que terceiros manipulem as informações trocadas entre o site e o usuário.