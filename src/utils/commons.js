function stringToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }
  
  // Function to convert Base64 to a string
  function base64ToString(base64) {
    return decodeURIComponent(escape(atob(base64)));
  }

  const commons = {
    stringToBase64,
    base64ToString
  }
  export default commons
  