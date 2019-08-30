import React from 'react';

/**
* Função para destacar partes de um texto
* @param {string} text Texto
* @param {string|RegExp} highlight Parte do texto a ser destacada
* @param {object} options Propriedades do <span> para as partes destacadas
* @return {Array} Array de elementos React
*/
export function applyHighlight(text, highlight, options = {}) {
   // text => o parmeira perdeu de novo e de novo e de novo sd fsad fasd f
   // highlight => de novo
   if (text && highlight) {
       const regex = highlight instanceof RegExp
           ? highlight
           : new RegExp(highlight, "gmi");
       let match;
       let lastIndex = 0;
       const textParts = [];
       while ((match = regex.exec(text))) {
           const start = match.index;
           const end = regex.lastIndex;
           // não precisa destacar
           if (lastIndex !== start) {
               textParts.push(
                   <span key={'text-' + lastIndex}>
                       {text.substring(lastIndex, start)}
                   </span>
               );
           }
           // precisa destacar
           textParts.push(
               <span {...options} key={'high-' + start} >
                   {text.substring(start, end)}
               </span>
           );
           lastIndex = end;
       }
       if (!textParts.length) return text;
       if (lastIndex !== text.lastIndex) {
           textParts.push(
               <span key={'text-' + lastIndex}>
                   {text.substring(lastIndex, text.lastIndex)}
               </span>
           );
       }
       return textParts;
   }
   return text;
}
