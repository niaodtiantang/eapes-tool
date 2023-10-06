---
comments: true
---
# ASCII转换工具

<script>
  /*用于把ASCII编码转为字符串 */
  function asciiToString(asciiStr,separator) {
      return asciiStr.split(separator).map(function(str) {  
          return String.fromCharCode(parseInt(str));  
      }).join('');}
  
  /*用于把字符串转为ASCII编码 */
  function stringToAscii(strTEXT,separator) {  
      return strTEXT.split('').map(function(char) {  
          return char.charCodeAt(0);  
      }).join(separator);  
  }

  /*用于转换进制*/

</script>
