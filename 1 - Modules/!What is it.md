# Módulos
Módulos em JavaScript são uma forma de organizar e reutilizar código em aplicações grandes. Eles permitem que você divida seu aplicativo em módulos independentes, cada um com seus próprios recursos, que podem ser compartilhados com outros módulos. Os módulos podem ser importados em outros módulos ou arquivos usando a sintaxe de importação/exportação. Este padrão de design ajuda a manter o código limpo, organizado e fácil de gerenciar.

</br>

Nesta pasta por exemplo, o arquivo "calcs" é como se fosse a parte das "engrenagens", é o que está rodando por tras dos panos, é este arquivo que guarda os códigos que irão fazer os cálculos. Enquanto o arquivo "app" tem apenas a função de dar os resultados das funções, pois ele importa os códigos do arquivo "calcs.js".

</br>

______________________________________________________________________

## Exportando módulos 
Neste momento você possui um arquivo onde guarda códigos, e você deseja reutilizar estes mesmos códigos em outros arquivos.. Para fazer isto, você pode utilizar do "module.exports", em tradução pt-br, seria algo como "exportação de módulos".

```js
const ERROR_MESSAGE = "SORRY, THIS CONTENT CAN'T BE LOADED ;("  
const SUCEFULL_MESSAGE = "YOUR CONTENT IS READY TO BE WATCHED"

module.exports = {
    ERROR_MESSAGE, SUCEFULL_MESSAGE
}
```

</br>

* Agora que EXPORTAMOS o código que desejamos reutilizar em outros arquivos, podemos importar eles

```js 
const messages = require('diretório do arquivo que armzena os códigos exportados')

const error_msg = messages.ERROR_MESSAGE
```