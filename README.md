# AngularConcepts

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Angular CLI `ng generate` 指令總覽

Angular CLI 提供了 `ng generate`（或簡寫 `ng g`）來快速產生常見結構，如元件、服務、模組等。

## 📦 指令對照表

| 命令縮寫 (`x`) | 完整寫法                 | 說明                                 |
|----------------|--------------------------|--------------------------------------|
| `c`            | `component`              | 產生一個新元件                        |
| `d`            | `directive`              | 產生一個新指令                        |
| `p`            | `pipe`                   | 產生一個新管道                        |
| `s`            | `service`                | 產生一個新服務                        |
| `m`            | `module`                 | 產生一個新模組                        |
| `g`            | `guard`                  | 產生一個路由守衛                      |
| `i`            | `interface`              | 產生一個 TypeScript 介面              |
| `cl`           | `class`                  | 產生一個 TypeScript 類別              |
| `e`            | `enum`                   | 產生一個 TypeScript 列舉              |
| `t`            | `test`                   | 產生一個測試檔案                      |
| `r`            | `resolver`               | 產生一個路由資料解析器                |
| `a`            | `application`            | 產生一個新的 Angular 應用（多應用架構） |
| `lib`          | `library`                | 產生一個 Angular 函式庫               |
| `sc`           | `service-worker-config`  | 產生一個 service worker 設定檔         |
| `web-worker`   | `web-worker`             | 產生一個 Web Worker                   |

## 📌 使用範例

```bash
ng g c my-component       # 產生元件
ng g s my-service         # 產生服務
ng g m my-module          # 產生模組
ng g p my-pipe            # 產生管道
ng g d my-directive       # 產生指令
ng g i my-interface       # 產生介面
ng g cl my-class          # 產生類別
ng g e my-enum            # 產生列舉
ng g t my-test            # 產生測試檔
```

## 🧪 `--dry-run` 模擬模式

你可以使用 `--dry-run`（或簡寫 `-d`）來模擬 `ng generate` 指令的行為，預覽 CLI 會產生哪些檔案，不會真的寫入硬碟。

### 🔧 範例

```bash
ng g c my-component --dry-run
```
