export function PostData(type, userData) {
    let BaseURL = '/autenticacion';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    console.log(userData);
    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type, {
            method: 'POST',
          
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}