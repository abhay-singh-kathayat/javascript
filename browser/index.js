//url parameter as a object in javascript
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );

  getURLParameters('http://url.com/page?name=Adam&surname=Smith');
  //console.log(getURLParameters('http://url.com/page?name=Adam&surname=Smith'))



  const numberArray = [3.4,88.5,88.5,883.99];
  numberArray.reduce(getnumber,0);

  function getnumber(number,sum){
    return number + Math.ceil(sum)
  }

  //console.log(numberArray.reduce(getnumber,0))

  //const copy clipbord  using javascript
//   const copyClipbord = str =>{
//     if(navigator && navigator.clipboard && navigator.clipboard.writeText)
//       return navigator.clipboard.writeText(str);
//       return Promise.reject('The clipbord api is not aveliable')
//   } 


const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };


  const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '/':' ',
        '/':' ',
        '&': ' ',
        '<': ' ',
        '>': ' ',
        "'": ' ',
        '"': ' ',
      }[tag] || tag)
    
      
  );

 

  console.log(escapeHTML('<a>Hello Word</a>'));
