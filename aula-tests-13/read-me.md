É muito interessante adicionar o coverage, para saber quantos % o código está sendo testado, para isso mude o script test para:
"test": "npm run test:load-envs -- jest -- --coverage"

E também para impedir o paralelismo dos test, vamos usar o --runInBand ou -i:

"test": "npm run test:load-envs -- jest -- --coverage -- runInBand"