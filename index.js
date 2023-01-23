class MyString 
{
    constructor(str)
    {
        this.str = str;
    }
    reverse()
    {
        let strTmp = this.str;
        let revStr = "";
    
         for (let i = strTmp.length-1; i >= 0; i--)
         {
            revStr += strTmp[i];
         }
         return console.log(revStr);
    }

    ucFirst()
    {
        let ucStr;
        ucStr = this.str[0].toUpperCase() + this.str.slice(1);
        return console.log(ucStr);
    }

    ucWords()
    {
        let words = this.str.split(" ");
        
        let plase = " ";
        for (let i = 0; i < words.length; i++)
        {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        } 

        let newStr = words.join(" ");
        return console.log(newStr);
    }
};

let str1 = "Привет, я Саша!"

let String1 = new MyString(str1);
String1.reverse();
String1.ucFirst();
String1.ucWords();