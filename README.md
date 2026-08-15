# Movieflix

Projeto desenvolvido em **Angular** com o objetivo de reproduzir o layout do **Movieflix** a partir do protótipo desenvolvido no Figma.

## 🎨 Layout

A interface do projeto será desenvolvida com base no seguinte protótipo:

[Figma — Páginas Horácio](https://www.figma.com/proto/FSkHiMRTRa09CljCjXmedJ/P%C3%A1ginas-Hor%C3%A1cio?page-id=195%3A20&node-id=195-28&p=f&viewport=93%2C29%2C0.29&t=BZ0d8wCey2K8NzLL-1&scaling=contain&content-scaling=fixed&utm_source=chatgpt.com)

A implementação seguirá o layout apresentado no Figma, adaptando os componentes e a estrutura para uma aplicação web utilizando Angular.

## 🚧 Desenvolvimento

O desenvolvimento do projeto será realizado inicialmente utilizando **Mocks**, permitindo construir e validar toda a interface e experiência do usuário antes da integração com o backend.

A evolução planejada é:

1. **Implementação do layout** conforme o Figma.
2. **Criação dos componentes Angular** necessários para a aplicação.
3. **Utilização de dados mockados** para simular filmes, categorias e demais informações.
4. **Integração com o backend Java**, substituindo gradualmente os dados mockados pelos dados reais da API.

## 🔌 Backend

Após a conclusão da primeira versão utilizando Mocks, o projeto será integrado ao backend desenvolvido em **Java**.

O código do backend está disponível no seguinte repositório:

[Backend Java — miniature-fortnight](https://github.com/renanlessa/miniature-fortnight?utm_source=chatgpt.com)

A integração será realizada posteriormente, mantendo inicialmente o frontend desacoplado do backend para facilitar o desenvolvimento e a validação da interface.

## 🛠️ Tecnologias

* **Angular 21**
* **TypeScript**
* **HTML**
* **CSS**
* **Vitest**
* **Java** — backend, em uma etapa posterior

## 💻 Servidor de desenvolvimento

Para iniciar o servidor local, execute:

```bash
ng serve
```

Depois, acesse:

```text
http://localhost:4200/
```

A aplicação será recarregada automaticamente sempre que os arquivos forem modificados.

## 🧩 Geração de componentes

O Angular CLI possui ferramentas para gerar componentes, diretivas, pipes e outros recursos.

Para criar um novo componente:

```bash
ng generate component component-name
```

Para visualizar todos os comandos disponíveis:

```bash
ng generate --help
```

## 📦 Build

Para gerar o build da aplicação:

```bash
ng build
```

Os arquivos gerados serão armazenados no diretório `dist/`.

Por padrão, o build de produção otimiza a aplicação para melhor desempenho.

## 🧪 Testes unitários

Os testes unitários utilizam o **Vitest**.

Para executá-los:

```bash
ng test
```

## 🔍 Testes end-to-end

Para executar os testes end-to-end:

```bash
ng e2e
```

O Angular CLI não inclui um framework de testes end-to-end por padrão. Caso necessário, um framework compatível poderá ser adicionado ao projeto.

## 📚 Documentação

Para mais informações sobre o Angular CLI, consulte a documentação oficial:

[Angular CLI — Documentação oficial](https://angular.dev/tools/cli?utm_source=chatgpt.com)
