
// problem => TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.
// There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.



import * as readline from 'readline';

function generateURLID(length = 8) {
  
       const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      let  retVal = "";

    for (let i = 0; i < length; i++) {

    retVal += charset.charAt(
        Math.floor(Math.random() * charset.length));
    }
    return retVal;
}

const data = {}
/**
 * Encodes a URL to a shortened URL.
 */
     

function encode(longUrl: string): string {
    const base = "http://tinyurl.com/"
    let id;
    
    while (true) {
        // make a unique id store in it the link (string)
        id = Math.floor(Math.random()*1000000)
        if (!data[id]) {
            data[id] = longUrl
            break
        }
        
    }


    return base + id  
	
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    const base = "http://tinyurl.com/"
    const id = shortUrl.slice( base.length)
    
       return data[id]
       
};


console.log(encode("hello "));


const rl = readline.createInterface({
    input:process.stdin , 
     output: process.stdout
})

rl.question('What is your link? ', (dat) => {
      console.log(decode(dat));
    rl.close();
});

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */