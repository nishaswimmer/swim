export function isPassword(pass){
       
            let len = pass.length
            if (len < 8) {
                alert("enter 8 no")
                return false
            }

            let s = "!@#$%^&*()"
            isSymbol = false
            isNumber = false
            isUpper = false
            isLower = false
            // console.log(length);
            for (let i = 0; i <= len; i++) {
                let char = a.charAt(i)
                
                if (char >= "A" && char <= "Z") {
                    isUpper = true
                }
                else if (char >= "a" && char <= "z") {
                    isLower = true
                }
                else if (!isNaN(char)) {
                    isNumber = true
                }
                else if (s.includes(char)) {
                    isSymbol = true
                }
                
            }
            console.log(isLower, isNumber, isSymbol, isUpper);
            
            if (isLower && isNumber && isSymbol && isUpper) {
                return true
            } else {
                return false
            } 
}





