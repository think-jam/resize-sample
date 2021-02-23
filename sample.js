// function to find longest word length
function findLongestWordLength(str) {
    let lengths = str.split(' ').map(word => word.length)
    return Math.max(...lengths)
}

let addFontSize = false,
    fontSize;

const textLength = translation[key].length;
const wordLength = findLongestWordLength(translation[key]);

switch (fileName) {

    // EXAMPLE ASSET 
    // 1. case is documents file name
    case 'Guardians_3in1FloorDisinfectant_Laminate_SQ':
            //stamp must be set to true for all translations
            addFontSize = true;
            
            // Get all the translations for this file into one array so we can check it
            // NOTE: has to be SPECIFIC to the file name/case, and only used once in this whole JS. 
            // EG. if this is used in a second AE file, change the names
            let ft_laminateSQ = [];
            Object.keys(translation).forEach(function(prop) {
                ft_laminateSQ.push(translation[prop])
            });

            // create an array of words to check against. this is 0-indexed from the remake front end. 
            // Eg. Layer on the edit original page is 0 here
            let combined_laminateSQ1 = [ft_laminateSQ[12], ft_laminateSQ[13], ft_laminateSQ[14], ft_laminateSQ[15], ft_laminateSQ[16]]
            let combined_laminateSQ2 = [ft_laminateSQ[8], ft_laminateSQ[9]]

            // find the longest text length out of predefined translations
            var longestBlock_laminateSQ = combined_laminateSQ1.sort(function (a, b) { return b.length - a.length; })[0];

            // switch is for all layers in the document. A case for each layer
            switch (key) {
                // case is always the layer name defined in the document
                case 'REPLACE TEXT HERE':
                    // If the longest word in the transaltion is over or equal
                    // to 16 characters, adjust the fontSize to document suggestion
                    if(wordLength >= 16){
                        fontSize = 166;
                    }else{
                        fontSize = 182;
                    }
                    
                    
                break;
                // 1
                case 'Weve got Cif Pro Formula 3in1 Floor Disinfectant':
                    
                    if(wordLength >= 16){
                        console.log("OVER 16")
                        fontSize = 166;
                    }else{
                        console.log("OK 2")
                        fontSize = 182;
                    }
                    
                break;
                
                
                
                case 'Suma':
                    // font size doesnt need adjusting in this instance, but does need applying
                    fontSize = 35;
                break;
                case 'Floors can harbour harmful virusesbacteria':
                    fontSize = 50;
                break;
                
                case 'GERM COUNT':
                    // simple if/else to run though a range of options based on the text length
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                    // finally, LWR (Long word rule.)
                    // if the longest word in the translation is over 15 characters, 
                    // adjust the fontSize down by 15% (or whatever is labelled in the doc.)
                    if(wordLength >= 15){
                        fontSize = 85*fontSize/100;
                    }
                    
                    
                break;
                case 'Dose 10ml of product per 1L of water':
                    fontSize = 50;
                    
                break;
                case 'REPLACE TEXT HERE23':
                    //fontSize = 78   
                    // get the longest word in two different strings, 
                    // and find out if either of them has characters over 20 letters long
                    // this function is duplicated across the next translation, thus linking them together
                i   
                    if(findLongestWordLength(combined_laminateSQ2[0]) >= 20 || findLongestWordLength(combined_laminateSQ2[1]) >= 20 ){
                        fontSize = 70;
                    }else{
                        fontSize = 78;
                    }
                break;
                case 'REPLACE TEXT HERE2':
                    if(findLongestWordLength(combined_laminateSQ2[0]) >= 20 || findLongestWordLength(combined_laminateSQ2[1]) >= 20 ){
                        fontSize = 70
                        }else{
                            console.log("SQ SHRT WRD")
                            fontSize = 78
                        }
                break;
                case 'Degrease and disinfect in just 1 wipe':
                    fontSize = 50;
                break;
                case 'Cif pro formula 3in1 FLOOR DISINFECTANT':
                    
                    if (textLength <= 38) {
                        fontSize = 49;
                    }
                    else if (textLength == 39 ||textLength == 40 || textLength == 41) {
                        fontSize = 44;
                    }
                    else if (textLength == 42 ||textLength == 43 || textLength == 44) {
                        fontSize = 41;
                    }
                    else if (textLength == 45 ||textLength == 46 || textLength == 47) {
                        fontSize = 39;
                    }
                    else if (textLength == 48 ||textLength == 49 || textLength == 50) {
                        fontSize = 36;
                    }
                break;
                
                
                
                // 11
                case 'Degreasedisinfect':
                    
                    // earlier we predefined the longest translation out of a selection of translations
                    // (line 35) so we'll use that longest string for the next few translations
                    if(longestBlock_laminateSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_laminateSQ.length == 23 || longestBlock_laminateSQ.length == 24 || longestBlock_laminateSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_laminateSQ.length == 26 || longestBlock_laminateSQ.length == 27 || longestBlock_laminateSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_laminateSQ.length == 29 || longestBlock_laminateSQ.length == 30 || longestBlock_laminateSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_laminateSQ.length == 32 || longestBlock_laminateSQ.length == 33 || longestBlock_laminateSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_laminateSQ.length == 35 || longestBlock_laminateSQ.length == 36 || longestBlock_laminateSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_laminateSQ.length == 38 || longestBlock_laminateSQ.length == 39 || longestBlock_laminateSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_laminateSQ.length == 41 || longestBlock_laminateSQ.length == 42 || longestBlock_laminateSQ.length == 43 || longestBlock_laminateSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_laminateSQ.length == 45 || longestBlock_laminateSQ.length == 46 || longestBlock_laminateSQ.length == 47){
                        fontSize = 28
                    }
                    else if(longestBlock_laminateSQ.length == 48 || longestBlock_laminateSQ.length == 49 || longestBlock_laminateSQ.length == 50){
                        fontSize = 17
                    }
                    
                        
                break;
                case 'your floors':
                    // copied from previous layer, ensures all translations
                    // use the same font size
                    if(longestBlock_laminateSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_laminateSQ.length == 23 || longestBlock_laminateSQ.length == 24 || longestBlock_laminateSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_laminateSQ.length == 26 || longestBlock_laminateSQ.length == 27 || longestBlock_laminateSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_laminateSQ.length == 29 || longestBlock_laminateSQ.length == 30 || longestBlock_laminateSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_laminateSQ.length == 32 || longestBlock_laminateSQ.length == 33 || longestBlock_laminateSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_laminateSQ.length == 35 || longestBlock_laminateSQ.length == 36 || longestBlock_laminateSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_laminateSQ.length == 38 || longestBlock_laminateSQ.length == 39 || longestBlock_laminateSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_laminateSQ.length == 41 || longestBlock_laminateSQ.length == 42 || longestBlock_laminateSQ.length == 43 || longestBlock_laminateSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_laminateSQ.length == 45 || longestBlock_laminateSQ.length == 46 || longestBlock_laminateSQ.length == 47){
                        fontSize = 28
                    }
                    else if(longestBlock_laminateSQ.length == 48 || longestBlock_laminateSQ.length == 49 || longestBlock_laminateSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                case 'kill 99 of viruses':
                    // copied from previous layer, ensures all translations
                    // use the same font size
                    if(longestBlock_laminateSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_laminateSQ.length == 23 || longestBlock_laminateSQ.length == 24 || longestBlock_laminateSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_laminateSQ.length == 26 || longestBlock_laminateSQ.length == 27 || longestBlock_laminateSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_laminateSQ.length == 29 || longestBlock_laminateSQ.length == 30 || longestBlock_laminateSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_laminateSQ.length == 32 || longestBlock_laminateSQ.length == 33 || longestBlock_laminateSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_laminateSQ.length == 35 || longestBlock_laminateSQ.length == 36 || longestBlock_laminateSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_laminateSQ.length == 38 || longestBlock_laminateSQ.length == 39 || longestBlock_laminateSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_laminateSQ.length == 41 || longestBlock_laminateSQ.length == 42 || longestBlock_laminateSQ.length == 43 || longestBlock_laminateSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_laminateSQ.length == 45 || longestBlock_laminateSQ.length == 46 || longestBlock_laminateSQ.length == 47){
                        fontSize = 28
                    }
                    else if(longestBlock_laminateSQ.length == 48 || longestBlock_laminateSQ.length == 49 || longestBlock_laminateSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                case 'kill coronaviruses':
                    // copied from previous layer, ensures all translations
                    // use the same font size
                    if(longestBlock_laminateSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_laminateSQ.length == 23 || longestBlock_laminateSQ.length == 24 || longestBlock_laminateSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_laminateSQ.length == 26 || longestBlock_laminateSQ.length == 27 || longestBlock_laminateSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_laminateSQ.length == 29 || longestBlock_laminateSQ.length == 30 || longestBlock_laminateSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_laminateSQ.length == 32 || longestBlock_laminateSQ.length == 33 || longestBlock_laminateSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_laminateSQ.length == 35 || longestBlock_laminateSQ.length == 36 || longestBlock_laminateSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_laminateSQ.length == 38 || longestBlock_laminateSQ.length == 39 || longestBlock_laminateSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_laminateSQ.length == 41 || longestBlock_laminateSQ.length == 42 || longestBlock_laminateSQ.length == 43 || longestBlock_laminateSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_laminateSQ.length == 45 || longestBlock_laminateSQ.length == 46 || longestBlock_laminateSQ.length == 47){
                        fontSize = 28
                    }
                    else if(longestBlock_laminateSQ.length == 48 || longestBlock_laminateSQ.length == 49 || longestBlock_laminateSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                case 'in 60 seconds':
                    // copied from previous layer, ensures all translations
                    // use the same font size
                    if(longestBlock_laminateSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_laminateSQ.length == 23 || longestBlock_laminateSQ.length == 24 || longestBlock_laminateSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_laminateSQ.length == 26 || longestBlock_laminateSQ.length == 27 || longestBlock_laminateSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_laminateSQ.length == 29 || longestBlock_laminateSQ.length == 30 || longestBlock_laminateSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_laminateSQ.length == 32 || longestBlock_laminateSQ.length == 33 || longestBlock_laminateSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_laminateSQ.length == 35 || longestBlock_laminateSQ.length == 36 || longestBlock_laminateSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_laminateSQ.length == 38 || longestBlock_laminateSQ.length == 39 || longestBlock_laminateSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_laminateSQ.length == 41 || longestBlock_laminateSQ.length == 42 || longestBlock_laminateSQ.length == 43 || longestBlock_laminateSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_laminateSQ.length == 45 || longestBlock_laminateSQ.length == 46 || longestBlock_laminateSQ.length == 47){
                        fontSize = 28
                    }
                    else if(longestBlock_laminateSQ.length == 48 || longestBlock_laminateSQ.length == 49 || longestBlock_laminateSQ.length == 50){
                        fontSize = 17
                    }
                break;
                // 17
                case 'FIND OUT MORE ':
                    fontSize = 30;
                break;
                // 18
                case 'wwwproformulacom':
                    fontSize = 27;
                break;
              
                default: {
                    fontSize = 50;
                    break;
                }
                
            }
            break;
            // end domestos 10

    
        
        

        // start domestos 2
        case 'TOILETBLEACHLLGermKill':
        addFontSize = true;
        switch (key) {
            case 'YGTK_1':
                fontSize = 182;
            break;
            case 'WGDB_1':
                fontSize = 182;
            break;
            case 'TOILEt GERMS':
                fontSize = 60;
            break;
            case 'GERM DETECTORother thick bleach':
                fontSize = 60;
            break;
            case 'High GERM PRESENCE':
                fontSize = 60;
            break;
            
            case 'GERM COUNT 3':
                if (textLength <= 10) {
                    fontSize = 28;
                }
                else if (textLength == 11 || textLength == 12 || textLength == 13) {
                    fontSize = 23;
                }
                else if (textLength == 14 || textLength == 15 || textLength == 16 || textLength == 17) {
                    fontSize = 17;
                }
                else if (textLength == 18 || textLength == 19 || textLength == 20) {
                    fontSize = 16;
                }
                
            break;
            case 'OutroText':
                fontSize = 41;
            break;
            case 'FOMMM':
                fontSize = 30;
            break;
            case 'wwwproformulacom':
                fontSize = 27;
            break;
            default: {
                fontSize = 60;
                break;
            }
            
        }
        break;

        case '04TOILETEDITORIZZ1x1':
        addFontSize = true;


        let finalTranslation = [];
        Object.keys(translation).forEach(function(prop) {
            finalTranslation.push(translation[prop])
        });

        let combinedBlock1 = [finalTranslation[12], finalTranslation[13], finalTranslation[14], finalTranslation[15], finalTranslation[16]]
        let combinedBlock2 = [finalTranslation[6], finalTranslation[7]]

        var longestBlock1 = combinedBlock1.sort(function (a, b) { return b.length - a.length; })[0];

        switch (key) {
            // 0
            case 'REPLACE TEXT HERE':
                fontSize = 182;
            break;
            // 1
            case 'Weve got Cif Pro Formula Alcohol Disinfectant':
                fontSize = 182;
            break;
            // 2
            case 'Divosan ETHAPlus':
                fontSize = 35;
            break;
            // 3
            case 'Bacteria and flu viruses  be passed on through surfaces':
                fontSize = 43;
            break;
            // 4
            case 'Germ detector':
                if (textLength <= 14) {
                    fontSize = 48;
                }
                else if (textLength == 15 || textLength == 16) {
                    fontSize = 41;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 36;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 31;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 27;
                }
                else if (textLength == 26 || textLength == 27 || textLength == 28) {
                    fontSize = 24;
                }
            break;
            // 5
            case 'GERM COUNT':
                if (textLength <= 13) {
                    fontSize = 67;
                }
                else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                    fontSize = 63;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 52;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 44;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 39;
                }
                
            break;
            // 6 
            case 'Leave 15s to kill bacteria':
                
                if(findLongestWordLength(combinedBlock2[0]) >= 10 ||findLongestWordLength(combinedBlock2[1]) >= 10 ){
                    fontSize = 35
                }else{
                    fontSize = 41
                }
            break;
            // 7 
            case 'Leave 60ss':
                if(findLongestWordLength(combinedBlock2[0]) >= 10 ||findLongestWordLength(combinedBlock2[1]) >= 10 ){
                    fontSize = 35
                }else{
                    fontSize = 41
                }
            break;
            // 8
            case 'Powerful alcohol-based disinfection. 2':
                fontSize = 50;
            break;
            // 9 
            case 'Non-alcohol spray':
                fontSize = 50;
            break;
            // 10
            case 'Evaporatesleaves no residue':
                fontSize = 50;
            break;
            // 11
            case 'Cif pro formula  Alcohol Disinfectant':
                if (textLength <= 38) {
                    fontSize = 47;
                }
                else if (textLength == 39 ||textLength == 40 || textLength == 41) {
                    fontSize = 44;
                }
                else if (textLength == 42 || textLength == 43 || textLength == 44) {
                    fontSize = 38;
                }
                else if (textLength == 45 || textLength == 46 || textLength == 47) {
                    fontSize = 36;
                }
                else if (textLength == 48 || textLength == 49 || textLength == 50) {
                    fontSize = 36;
                }else if(textLength >= 51){
                    fontSize = 32;
                }
                
                
            break;
            // 12
            case 'Kills99':
                //combined 1.
                if(longestBlock1.length <= 26){
                    fontSize = 35
                }else if(longestBlock1.length == 27 || longestBlock1.length == 28 || longestBlock1.length == 29){
                    fontSize = 32
                }
                else if(longestBlock1.length == 30 || longestBlock1.length == 31 || longestBlock1.length == 32){
                    fontSize = 29
                } 
                else if(longestBlock1.length == 33 || longestBlock1.length == 34 || longestBlock1.length == 35){
                    fontSize = 26
                }
                else if(longestBlock1.length == 36 || longestBlock1.length == 37 || longestBlock1.length == 38){
                    fontSize = 25
                }  
                else if(longestBlock1.length == 39 || longestBlock1.length == 40 || longestBlock1.length == 41){
                    fontSize = 23
                } 
                else if(longestBlock1.length == 42 || longestBlock1.length == 43 || longestBlock1.length == 44){
                    fontSize = 21
                }
                else if(longestBlock1.length == 45 || longestBlock1.length == 46 || longestBlock1.length == 47){
                    fontSize = 20
                } 
                else if(longestBlock1.length == 48 || longestBlock1.length == 49 || longestBlock1.length == 50){
                    fontSize = 18
                }     
            break;
            // 13
            case 'Kills100':
                //combined 2.
                if(longestBlock1.length <= 26){
                    fontSize = 35
                }else if(longestBlock1.length == 27 || longestBlock1.length == 28 || longestBlock1.length == 29){
                    fontSize = 32
                }
                else if(longestBlock1.length == 30 || longestBlock1.length == 31 || longestBlock1.length == 32){
                    fontSize = 29
                } 
                else if(longestBlock1.length == 33 || longestBlock1.length == 34 || longestBlock1.length == 35){
                    fontSize = 26
                }
                else if(longestBlock1.length == 36 || longestBlock1.length == 37 || longestBlock1.length == 38){
                    fontSize = 25
                }  
                else if(longestBlock1.length == 39 || longestBlock1.length == 40 || longestBlock1.length == 41){
                    fontSize = 23
                } 
                else if(longestBlock1.length == 42 || longestBlock1.length == 43 || longestBlock1.length == 44){
                    fontSize = 21
                }
                else if(longestBlock1.length == 45 || longestBlock1.length == 46 || longestBlock1.length == 47){
                    fontSize = 20
                } 
                else if(longestBlock1.length == 48 || longestBlock1.length == 49 || longestBlock1.length == 50){
                    fontSize = 18
                }    
            break;
            // 14
            case 'Kills101':
                //combined 3.
                if(longestBlock1.length <= 26){
                    fontSize = 35
                }else if(longestBlock1.length == 27 || longestBlock1.length == 28 || longestBlock1.length == 29){
                    fontSize = 32
                }
                else if(longestBlock1.length == 30 || longestBlock1.length == 31 || longestBlock1.length == 32){
                    fontSize = 29
                } 
                else if(longestBlock1.length == 33 || longestBlock1.length == 34 || longestBlock1.length == 35){
                    fontSize = 26
                }
                else if(longestBlock1.length == 36 || longestBlock1.length == 37 || longestBlock1.length == 38){
                    fontSize = 25
                }
                else if(longestBlock1.length == 39 || longestBlock1.length == 40 || longestBlock1.length == 41){
                    fontSize = 23
                } 
                else if(longestBlock1.length == 42 || longestBlock1.length == 43 || longestBlock1.length == 44){
                    fontSize = 21
                }
                else if(longestBlock1.length == 45 || longestBlock1.length == 46 || longestBlock1.length == 47){
                    fontSize = 20
                } 
                else if(longestBlock1.length == 48 || longestBlock1.length == 49 || longestBlock1.length == 50){
                    fontSize = 18
                }      
            break;
            // 15
            case 'Kills102':
                //combined 4.
                if(longestBlock1.length <= 26){
                    fontSize = 35
                }else if(longestBlock1.length == 27 || longestBlock1.length == 28 || longestBlock1.length == 29){
                    fontSize = 32
                }
                else if(longestBlock1.length == 30 || longestBlock1.length == 31 || longestBlock1.length == 32){
                    fontSize = 29
                } 
                else if(longestBlock1.length == 33 || longestBlock1.length == 34 || longestBlock1.length == 35){
                    fontSize = 26
                }
                else if(longestBlock1.length == 36 || longestBlock1.length == 37 || longestBlock1.length == 38){
                    fontSize = 25
                } 
                else if(longestBlock1.length == 39 || longestBlock1.length == 40 || longestBlock1.length == 41){
                    fontSize = 23
                } 
                else if(longestBlock1.length == 42 || longestBlock1.length == 43 || longestBlock1.length == 44){
                    fontSize = 21
                }
                else if(longestBlock1.length == 45 || longestBlock1.length == 46 || longestBlock1.length == 47){
                    fontSize = 20
                } 
                else if(longestBlock1.length == 48 || longestBlock1.length == 49 || longestBlock1.length == 50){
                    fontSize = 18
                }     
            break;
            // 16
            case 'Kills103':
                //combined 5.
                if(longestBlock1.length <= 26){
                    fontSize = 35
                }else if(longestBlock1.length == 27 || longestBlock1.length == 28 || longestBlock1.length == 29){
                    fontSize = 32
                }
                else if(longestBlock1.length == 30 || longestBlock1.length == 31 || longestBlock1.length == 32){
                    fontSize = 29
                } 
                else if(longestBlock1.length == 33 || longestBlock1.length == 34 || longestBlock1.length == 35){
                    fontSize = 26
                }
                else if(longestBlock1.length == 36 || longestBlock1.length == 37 || longestBlock1.length == 38){
                    fontSize = 25
                }  
                else if(longestBlock1.length == 39 || longestBlock1.length == 40 || longestBlock1.length == 41){
                    fontSize = 23
                } 
                else if(longestBlock1.length == 42 || longestBlock1.length == 43 || longestBlock1.length == 44){
                    fontSize = 21
                }
                else if(longestBlock1.length == 45 || longestBlock1.length == 46 || longestBlock1.length == 47){
                    fontSize = 20
                } 
                else if(longestBlock1.length == 48 || longestBlock1.length == 49 || longestBlock1.length == 50){
                    fontSize = 18
                }    
            break;
            // 17
            case 'find out more':
                fontSize = 30;
            break;
            // 18
            case 'wwwproformulacom':
                fontSize = 27;
            break;
            

            
            default: {
                fontSize = 50;
                break;
            }
            
        }
        break;

        case '04TOILETEDITORIZZ16x9':
        addFontSize = true;

        let finalTranslationDomestos = [];
        Object.keys(translation).forEach(function(prop) {
            finalTranslationDomestos.push(translation[prop])
        });

        let combinedBlockDomestos1 = [finalTranslationDomestos[12], finalTranslationDomestos[13], finalTranslationDomestos[14], finalTranslationDomestos[15], finalTranslationDomestos[16]]
        let combinedBlockDomestos2 = [finalTranslationDomestos[6], finalTranslationDomestos[7]]
        

        var longestBlockDomestos1 = combinedBlockDomestos1.sort(function (a, b) { return b.length - a.length; })[0];
        

        switch (key) {
            // 0
            case 'REPLACE TEXT HERE':
                fontSize = 182;
            break;
            // 1
            case 'Weve got Cif Pro Formula Alcohol Disinfectant':
                fontSize = 182;
            break;
            // 2
            case 'Divosan ETHAPlus':
                fontSize = 35;
            break;
            // 3
            case 'Bacteria and flu viruses  be passed on through surfaces':
                fontSize = 43;
            break;
            // 4
            case 'Germ detector':
                if (textLength <= 14) {
                    fontSize = 48;
                }
                else if (textLength == 15 || textLength == 16) {
                    fontSize = 41;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 36;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 31;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 27;
                }
                else if (textLength == 26 || textLength == 27 || textLength == 28) {
                    fontSize = 24;
                }
            break;
            // 5
            case 'GERM COUNT':
                if (textLength <= 13) {
                    fontSize = 67;
                }
                else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                    fontSize = 63;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 52;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 44;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 39;
                }
                
            break;
            // 6 
            case 'Leave 15s to kill bacteria':
                //fontSize = 46;
                if(findLongestWordLength(combinedBlockDomestos2[0]) >= 10 ||findLongestWordLength(combinedBlockDomestos2[1]) >= 10 ){
                    fontSize = 40
                }else{
                    fontSize = 46
                }
            break;
            // 7 
            case 'Leave 60s':
                if(findLongestWordLength(combinedBlockDomestos2[0]) >= 10 ||findLongestWordLength(combinedBlockDomestos2[1]) >= 10 ){
                    fontSize = 40
                }else{
                    fontSize = 46
                }
            break;
            // 8
            case 'Powerful alcohol-based disinfection. 2':
                fontSize = 50;
            break;
            // 9 
            case 'Non-alcohol spray':
                fontSize = 50;
            break;
            // 10
            case 'Evaporates1':
                fontSize = 50;
            break;
            // 11
            case 'Cif pro formula Alcohol Disinfectant':
                if (textLength <= 38) {
                    fontSize = 47;
                }
                else if (textLength == 39 ||textLength == 40 || textLength == 41) {
                    fontSize = 44;
                }
                else if (textLength == 42 || textLength == 43 || textLength == 44) {
                    fontSize = 38;
                }
                else if (textLength == 45 || textLength == 46 || textLength == 47) {
                    fontSize = 36;
                }
                else if (textLength == 48 || textLength == 49 || textLength == 50) {
                    fontSize = 36;
                }
                
                
                
            break;
            // 12
            case 'Kills':
                //combined 1.
                if(longestBlockDomestos1.length <= 30){
                    fontSize = 35
                }else if(longestBlockDomestos1.length == 31 || longestBlockDomestos1.length == 32){
                    fontSize = 32
                }
                else if(longestBlockDomestos1.length == 33 || longestBlockDomestos1.length == 34 || longestBlockDomestos1.length == 35){
                    fontSize = 30
                } 
                else if(longestBlockDomestos1.length == 36 || longestBlockDomestos1.length == 37 || longestBlockDomestos1.length == 38){
                    fontSize = 28
                }
                else if(longestBlockDomestos1.length == 39 || longestBlockDomestos1.length == 40 || longestBlockDomestos1.length == 41){
                    fontSize = 26
                } 
                else if(longestBlockDomestos1.length == 42 || longestBlockDomestos1.length == 43 || longestBlockDomestos1.length == 44){
                    fontSize = 24
                }
                else if(longestBlockDomestos1.length == 45 || longestBlockDomestos1.length == 46 || longestBlockDomestos1.length == 47){
                    fontSize = 22
                } 
                else if(longestBlockDomestos1.length == 48 || longestBlockDomestos1.length == 49 || longestBlockDomestos1.length == 50){
                    fontSize = 21
                }     
            break;
            // 13
            case 'Kills 2':
                //combined 2.
                if(longestBlockDomestos1.length <= 30){
                    fontSize = 35
                }else if(longestBlockDomestos1.length == 31 || longestBlockDomestos1.length == 32){
                    fontSize = 32
                }
                else if(longestBlockDomestos1.length == 33 || longestBlockDomestos1.length == 34 || longestBlockDomestos1.length == 35){
                    fontSize = 30
                } 
                else if(longestBlockDomestos1.length == 36 || longestBlockDomestos1.length == 37 || longestBlockDomestos1.length == 38){
                    fontSize = 28
                }
                else if(longestBlockDomestos1.length == 39 || longestBlockDomestos1.length == 40 || longestBlockDomestos1.length == 41){
                    fontSize = 26
                } 
                else if(longestBlockDomestos1.length == 42 || longestBlockDomestos1.length == 43 || longestBlockDomestos1.length == 44){
                    fontSize = 24
                }
                else if(longestBlockDomestos1.length == 45 || longestBlockDomestos1.length == 46 || longestBlockDomestos1.length == 47){
                    fontSize = 22
                } 
                else if(longestBlockDomestos1.length == 48 || longestBlockDomestos1.length == 49 || longestBlockDomestos1.length == 50){
                    fontSize = 21
                }  
            break;
            // 14
            case 'Bacteria':
                //combined 3.
                if(longestBlockDomestos1.length <= 30){
                    fontSize = 35
                }else if(longestBlockDomestos1.length == 31 || longestBlockDomestos1.length == 32){
                    fontSize = 32
                }
                else if(longestBlockDomestos1.length == 33 || longestBlockDomestos1.length == 34 || longestBlockDomestos1.length == 35){
                    fontSize = 30
                } 
                else if(longestBlockDomestos1.length == 36 || longestBlockDomestos1.length == 37 || longestBlockDomestos1.length == 38){
                    fontSize = 28
                }
                else if(longestBlockDomestos1.length == 39 || longestBlockDomestos1.length == 40 || longestBlockDomestos1.length == 41){
                    fontSize = 26
                } 
                else if(longestBlockDomestos1.length == 42 || longestBlockDomestos1.length == 43 || longestBlockDomestos1.length == 44){
                    fontSize = 24
                }
                else if(longestBlockDomestos1.length == 45 || longestBlockDomestos1.length == 46 || longestBlockDomestos1.length == 47){
                    fontSize = 22
                } 
                else if(longestBlockDomestos1.length == 48 || longestBlockDomestos1.length == 49 || longestBlockDomestos1.length == 50){
                    fontSize = 21
                }    
            break;
            // 15
            case 'Evaporates':
                //combined 4.
                if(longestBlockDomestos1.length <= 30){
                    fontSize = 35
                }else if(longestBlockDomestos1.length == 31 || longestBlockDomestos1.length == 32){
                    fontSize = 32
                }
                else if(longestBlockDomestos1.length == 33 || longestBlockDomestos1.length == 34 || longestBlockDomestos1.length == 35){
                    fontSize = 30
                } 
                else if(longestBlockDomestos1.length == 36 || longestBlockDomestos1.length == 37 || longestBlockDomestos1.length == 38){
                    fontSize = 28
                }
                else if(longestBlockDomestos1.length == 39 || longestBlockDomestos1.length == 40 || longestBlockDomestos1.length == 41){
                    fontSize = 26
                } 
                else if(longestBlockDomestos1.length == 42 || longestBlockDomestos1.length == 43 || longestBlockDomestos1.length == 44){
                    fontSize = 24
                }
                else if(longestBlockDomestos1.length == 45 || longestBlockDomestos1.length == 46 || longestBlockDomestos1.length == 47){
                    fontSize = 22
                } 
                else if(longestBlockDomestos1.length == 48 || longestBlockDomestos1.length == 49 || longestBlockDomestos1.length == 50){
                    fontSize = 21
                }  
            break;
            // 16
            case 'No Need':
                //combined 5.
                if(longestBlockDomestos1.length <= 30){
                    fontSize = 35
                }else if(longestBlockDomestos1.length == 31 || longestBlockDomestos1.length == 32){
                    fontSize = 32
                }
                else if(longestBlockDomestos1.length == 33 || longestBlockDomestos1.length == 34 || longestBlockDomestos1.length == 35){
                    fontSize = 30
                } 
                else if(longestBlockDomestos1.length == 36 || longestBlockDomestos1.length == 37 || longestBlockDomestos1.length == 38){
                    fontSize = 28
                }
                else if(longestBlockDomestos1.length == 39 || longestBlockDomestos1.length == 40 || longestBlockDomestos1.length == 41){
                    fontSize = 26
                } 
                else if(longestBlockDomestos1.length == 42 || longestBlockDomestos1.length == 43 || longestBlockDomestos1.length == 44){
                    fontSize = 24
                }
                else if(longestBlockDomestos1.length == 45 || longestBlockDomestos1.length == 46 || longestBlockDomestos1.length == 47){
                    fontSize = 22
                } 
                else if(longestBlockDomestos1.length == 48 || longestBlockDomestos1.length == 49 || longestBlockDomestos1.length == 50){
                    fontSize = 21
                }     
            break;
            // 17
            case 'find out more':
                fontSize = 30;
            break;
            // 18
            case 'wwwproformulacom':
                fontSize = 27;
            break;
            

            
            default: {
                fontSize = 50;
                break;
            }
            
        }
        break;

        case 'Guardians_4in1_Washroom_Cleaner_OR':
        addFontSize = true;

            let ft_guardiansOR = [];
        Object.keys(translation).forEach(function(prop) {
            ft_guardiansOR.push(translation[prop])
        });

            let combined_guardiansOR1 = [ft_guardiansOR[11], ft_guardiansOR[12], ft_guardiansOR[13], ft_guardiansOR[14], ft_guardiansOR[15]]
            let combined_guardiansOR2 = [ft_guardiansOR[7], ft_guardiansOR[8]]
        

            var longestBlock_guardians = combined_guardiansOR1.sort(function (a, b) { return b.length - a.length; })[0];
        

        switch (key) {
            // 0
            case 'CLEAN BACKGROUND TEXT':
                fontSize = 81;
            break;
            // 1
            case 'DIRT BACKGROUND TEXT':
                fontSize = 81;
            break;
            
            // 3
            case 'Bacteria and flu viruses  be passed on through surfaces':
                fontSize = 43;
            break;
            // 4
            case 'VirusBacteria':
                fontSize = 50;
            break;
            // 5
            case 'GERM DETECTOR':
                if (textLength <= 13) {
                    fontSize = 48;
                }
                else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                    fontSize = 41;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 36;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 31;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 27;
                }
                else if (textLength == 26 || textLength == 27 || textLength == 28) {
                    fontSize = 24;
                }
                
            break;
            case 'GERM COUNT':
                if (textLength <= 13) {
                    fontSize = 67;
                }
                else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                    fontSize = 54;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 44;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 39;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 33;
                }
                
                
            break;
            // 7
            case 'TIMER 60s':
                //fontSize = 46;
                if(findLongestWordLength(combined_guardiansOR2[0]) >= 15 ||findLongestWordLength(combined_guardiansOR2[1]) >= 15 ){
                    fontSize = 40
                }else{
                    fontSize = 46
                }
            break;
            // 8
            case 'TIMER 5min':
                if(findLongestWordLength(combined_guardiansOR2[0]) >= 15 ||findLongestWordLength(combined_guardiansOR2[1]) >= 15 ){
                    fontSize = 40
                }else{
                    fontSize = 46
                }
            break;
            // 9
            case 'CleansKills':
                fontSize = 50;
            break;
            // 10
            case 'FINAL FRAME TEXT':
                if (textLength <= 38) {
                    fontSize = 47;
                } 
                else if (textLength == 39 ||textLength == 40 || textLength == 41 || textLength == 42 ) {
                    fontSize = 42;
                }
                
                else if (textLength == 43 ||textLength == 44 || textLength == 44) {
                    fontSize = 39;
                }
                else if (textLength == 46 ||textLength == 47 || textLength == 48) {
                    fontSize = 37;
                }
                else if (textLength == 49 ||textLength == 50 || textLength == 51) {
                    fontSize = 34;
                }
                else if (textLength == 52 ||textLength == 53 || textLength == 54) {
                    fontSize = 33;
                }

                if(wordLength >= 19){
                    fontSize = fontSize - 8;
                }

            break;
            
            // 11
            case 'CLEANS':
                //combined 1.
                if(longestBlock_guardians.length <= 22){
                    fontSize = 47
                }else if(longestBlock_guardians.length == 23 || longestBlock_guardians.length == 24 || longestBlock_guardians.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_guardians.length == 26 || longestBlock_guardians.length == 27 || longestBlock_guardians.length == 28){
                    fontSize = 37
                } 
                else if(longestBlock_guardians.length == 29 || longestBlock_guardians.length == 30 || longestBlock_guardians.length == 31){
                    fontSize = 34
                }
                else if(longestBlock_guardians.length == 32 || longestBlock_guardians.length == 33 || longestBlock_guardians.length == 34){
                    fontSize = 31
                } 
                else if(longestBlock_guardians.length == 35 || longestBlock_guardians.length == 36 || longestBlock_guardians.length == 37){
                    fontSize = 29
                }
                else if(longestBlock_guardians.length == 38 || longestBlock_guardians.length == 39 || longestBlock_guardians.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_guardians.length == 41 || longestBlock_guardians.length == 42 || longestBlock_guardians.length == 43 || longestBlock_guardians.length == 44){
                    fontSize = 24
                }
                else if(longestBlock_guardians.length == 45 || longestBlock_guardians.length == 46 || longestBlock_guardians.length == 47 ){
                    fontSize = 22
                } 
                else if(longestBlock_guardians.length == 48 || longestBlock_guardians.length == 49 || longestBlock_guardians.length == 50 ){
                    fontSize = 21
                } 
                    
            break;
            case 'DESCALES':
                //combined 1.
                if(longestBlock_guardians.length <= 22){
                    fontSize = 47
                }else if(longestBlock_guardians.length == 23 || longestBlock_guardians.length == 24 || longestBlock_guardians.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_guardians.length == 26 || longestBlock_guardians.length == 27 || longestBlock_guardians.length == 28){
                    fontSize = 37
                } 
                else if(longestBlock_guardians.length == 29 || longestBlock_guardians.length == 30 || longestBlock_guardians.length == 31){
                    fontSize = 34
                }
                else if(longestBlock_guardians.length == 32 || longestBlock_guardians.length == 33 || longestBlock_guardians.length == 34){
                    fontSize = 31
                } 
                else if(longestBlock_guardians.length == 35 || longestBlock_guardians.length == 36 || longestBlock_guardians.length == 37){
                    fontSize = 29
                }
                else if(longestBlock_guardians.length == 38 || longestBlock_guardians.length == 39 || longestBlock_guardians.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_guardians.length == 41 || longestBlock_guardians.length == 42 || longestBlock_guardians.length == 43 || longestBlock_guardians.length == 44){
                    fontSize = 24
                }
                else if(longestBlock_guardians.length == 45 || longestBlock_guardians.length == 46 || longestBlock_guardians.length == 47 ){
                    fontSize = 22
                } 
                else if(longestBlock_guardians.length == 48 || longestBlock_guardians.length == 49 || longestBlock_guardians.length == 50 ){
                    fontSize = 21
                } 
                    
            break;
            case 'DEODARIZES':
                //combined 1.
                if(longestBlock_guardians.length <= 22){
                    fontSize = 47
                }else if(longestBlock_guardians.length == 23 || longestBlock_guardians.length == 24 || longestBlock_guardians.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_guardians.length == 26 || longestBlock_guardians.length == 27 || longestBlock_guardians.length == 28){
                    fontSize = 37
                } 
                else if(longestBlock_guardians.length == 29 || longestBlock_guardians.length == 30 || longestBlock_guardians.length == 31){
                    fontSize = 34
                }
                else if(longestBlock_guardians.length == 32 || longestBlock_guardians.length == 33 || longestBlock_guardians.length == 34){
                    fontSize = 31
                } 
                else if(longestBlock_guardians.length == 35 || longestBlock_guardians.length == 36 || longestBlock_guardians.length == 37){
                    fontSize = 29
                }
                else if(longestBlock_guardians.length == 38 || longestBlock_guardians.length == 39 || longestBlock_guardians.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_guardians.length == 41 || longestBlock_guardians.length == 42 || longestBlock_guardians.length == 43 || longestBlock_guardians.length == 44){
                    fontSize = 24
                }
                else if(longestBlock_guardians.length == 45 || longestBlock_guardians.length == 46 || longestBlock_guardians.length == 47 ){
                    fontSize = 22
                } 
                else if(longestBlock_guardians.length == 48 || longestBlock_guardians.length == 49 || longestBlock_guardians.length == 50 ){
                    fontSize = 21
                } 
                    
            break;
            case 'KILLS ENVELOPED VIRUSES':
                //combined 1.
                if(longestBlock_guardians.length <= 22){
                    fontSize = 47
                }else if(longestBlock_guardians.length == 23 || longestBlock_guardians.length == 24 || longestBlock_guardians.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_guardians.length == 26 || longestBlock_guardians.length == 27 || longestBlock_guardians.length == 28){
                    fontSize = 37
                } 
                else if(longestBlock_guardians.length == 29 || longestBlock_guardians.length == 30 || longestBlock_guardians.length == 31){
                    fontSize = 34
                }
                else if(longestBlock_guardians.length == 32 || longestBlock_guardians.length == 33 || longestBlock_guardians.length == 34){
                    fontSize = 31
                } 
                else if(longestBlock_guardians.length == 35 || longestBlock_guardians.length == 36 || longestBlock_guardians.length == 37){
                    fontSize = 29
                }
                else if(longestBlock_guardians.length == 38 || longestBlock_guardians.length == 39 || longestBlock_guardians.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_guardians.length == 41 || longestBlock_guardians.length == 42 || longestBlock_guardians.length == 43 || longestBlock_guardians.length == 44){
                    fontSize = 24
                }
                else if(longestBlock_guardians.length == 45 || longestBlock_guardians.length == 46 || longestBlock_guardians.length == 47 ){
                    fontSize = 22
                } 
                else if(longestBlock_guardians.length == 48 || longestBlock_guardians.length == 49 || longestBlock_guardians.length == 50 ){
                    fontSize = 21
                } 
                    
            break;
            case 'INCLCORONAVIRUSES':
                //combined 1.
                if(longestBlock_guardians.length <= 22){
                    fontSize = 47
                }else if(longestBlock_guardians.length == 23 || longestBlock_guardians.length == 24 || longestBlock_guardians.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_guardians.length == 26 || longestBlock_guardians.length == 27 || longestBlock_guardians.length == 28){
                    fontSize = 37
                } 
                else if(longestBlock_guardians.length == 29 || longestBlock_guardians.length == 30 || longestBlock_guardians.length == 31){
                    fontSize = 34
                }
                else if(longestBlock_guardians.length == 32 || longestBlock_guardians.length == 33 || longestBlock_guardians.length == 34){
                    fontSize = 31
                } 
                else if(longestBlock_guardians.length == 35 || longestBlock_guardians.length == 36 || longestBlock_guardians.length == 37){
                    fontSize = 29
                }
                else if(longestBlock_guardians.length == 38 || longestBlock_guardians.length == 39 || longestBlock_guardians.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_guardians.length == 41 || longestBlock_guardians.length == 42 || longestBlock_guardians.length == 43 || longestBlock_guardians.length == 44){
                    fontSize = 24
                }
                else if(longestBlock_guardians.length == 45 || longestBlock_guardians.length == 46 || longestBlock_guardians.length == 47 ){
                    fontSize = 22
                } 
                else if(longestBlock_guardians.length == 48 || longestBlock_guardians.length == 49 || longestBlock_guardians.length == 50 ){
                    fontSize = 21
                } 
                    
            break;
            // 17
            case 'FIND OUT MORE1':
                fontSize = 30;
            break;
            // 18
            case 'WWW1':
                fontSize = 27;
            break;
            // 2
            case 'ASTERISK':
                fontSize = 33;
            break;
            

            
            default: {
                fontSize = 50;
                break;
            }
            
        }
        break;

        case 'Guardians_4in1_Washroom_Cleaner_SQ':
        addFontSize = true;

            let ft_guardiansSQ = [];
            Object.keys(translation).forEach(function(prop) {
                ft_guardiansSQ.push(translation[prop])
            });

            let combined_guardiansSQ1 = [ft_guardiansSQ[12], ft_guardiansSQ[13], ft_guardiansSQ[14], ft_guardiansSQ[15], ft_guardiansSQ[16]]
            let combined_guardiansSQ2 = [ft_guardiansSQ[8], ft_guardiansSQ[9]]
        

            var longestBlock_guardiansSQ = combined_guardiansSQ1.sort(function (a, b) { return b.length - a.length; })[0];
        

        switch (key) {
            // 0
            case 'CLEAN BACKGROUND TEXT':
                if(wordLength >= 16){
                    fontSize = 70;
                }else{
                    fontSize = 79;
                }
                
            break;
            // 1
            case 'DIRT BACKGROUND TEXT':
                if(wordLength >= 14){
                    fontSize = 70;
                }else{
                    fontSize = 79;
                }
            break;
            
            
            // 4
            case 'VirusBacteria':
                fontSize = 50;
            break;
            // 5
            case 'GERM DETECTOR':
                if (textLength <= 13) {
                    fontSize = 48;
                }
                else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                    fontSize = 41;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 36;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 31;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 27;
                }
                else if (textLength == 26 || textLength == 27 || textLength == 28) {
                    fontSize = 24;
                }
                
            break;
            case 'GERM COUNT':
                if (textLength <= 13) {
                    fontSize = 67;
                }
                else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                    fontSize = 54;
                }
                else if (textLength == 17 || textLength == 18 || textLength == 19) {
                    fontSize = 44;
                }
                else if (textLength == 20 || textLength == 21 || textLength == 22) {
                    fontSize = 39;
                }
                else if (textLength == 23 || textLength == 24 || textLength == 25) {
                    fontSize = 33;
                }
                
                
            break;
            // 7
            case 'TIMER 60s':
                //fontSize = 46;
                if(findLongestWordLength(combined_guardiansSQ2[0]) >= 15 ||findLongestWordLength(combined_guardiansSQ2[1]) >= 15 ){
                    fontSize = 36
                }else{
                    fontSize = 46
                }
            break;
            // 8
            case 'TIMER 5min':
                if(findLongestWordLength(combined_guardiansSQ2[0]) >= 15 ||findLongestWordLength(combined_guardiansSQ2[1]) >= 15 ){
                    fontSize = 36
                }else{
                    fontSize = 46
                }
            break;
            // 9
            case 'CleansKills':
                fontSize = 50;
            break;
            // 10
            case 'FINAL FRAME TEEXT':
                if (textLength <= 38) {
                    fontSize = 43;
                } 
                else if (textLength == 39 ||textLength == 40 || textLength == 41 || textLength == 42 ) {
                    fontSize = 39;
                }
                
                else if (textLength == 43 ||textLength == 44 || textLength == 44) {
                    fontSize = 36;
                }
                else if (textLength == 46 ||textLength == 47 || textLength == 48) {
                    fontSize = 34;
                }
                else if (textLength == 49 ||textLength == 50 || textLength == 51) {
                    fontSize = 32;
                }
                else if (textLength == 52 ||textLength == 53 || textLength == 54) {
                    fontSize = 31;
                }

                if(wordLength >= 19){
                    fontSize = fontSize - 8;
                }

            break;
            
            // 11
            case 'CLEANS':
                //combined 1.
                if(longestBlock_guardiansSQ.length <= 20){
                    fontSize = 43
                }else if(longestBlock_guardiansSQ.length == 21 || longestBlock_guardiansSQ.length == 22 || longestBlock_guardiansSQ.length == 23){
                    fontSize = 37
                }
                else if(longestBlock_guardiansSQ.length == 24 || longestBlock_guardiansSQ.length == 25 || longestBlock_guardiansSQ.length == 26){
                    fontSize = 33
                }
                else if(longestBlock_guardiansSQ.length == 27 || longestBlock_guardiansSQ.length == 28 || longestBlock_guardiansSQ.length == 29){
                    fontSize = 30
                } 
                else if(longestBlock_guardiansSQ.length == 30 || longestBlock_guardiansSQ.length == 31 || longestBlock_guardiansSQ.length == 32){
                    fontSize = 27
                }
                else if(longestBlock_guardiansSQ.length == 33 || longestBlock_guardiansSQ.length == 34 || longestBlock_guardiansSQ.length == 35){
                    fontSize = 25
                }
                else if(longestBlock_guardiansSQ.length == 36 || longestBlock_guardiansSQ.length == 37 || longestBlock_guardiansSQ.length == 38){
                    fontSize = 23
                }
                else if(longestBlock_guardiansSQ.length == 39 || longestBlock_guardiansSQ.length == 40 || longestBlock_guardiansSQ.length == 41){
                    fontSize = 21
                }
                else if(longestBlock_guardiansSQ.length == 42 || longestBlock_guardiansSQ.length == 43 || longestBlock_guardiansSQ.length == 44){
                    fontSize = 20
                }
                else if(longestBlock_guardiansSQ.length == 45 || longestBlock_guardiansSQ.length == 46 || longestBlock_guardiansSQ.length == 47){
                    fontSize = 18
                }
                else if(longestBlock_guardiansSQ.length == 48 || longestBlock_guardiansSQ.length == 49 || longestBlock_guardiansSQ.length == 50){
                    fontSize = 17
                }
                
                    
            break;
            case 'DESCALES':
                //combined 1.
                if(longestBlock_guardiansSQ.length <= 20){
                    fontSize = 43
                }else if(longestBlock_guardiansSQ.length == 21 || longestBlock_guardiansSQ.length == 22 || longestBlock_guardiansSQ.length == 23){
                    fontSize = 37
                }
                else if(longestBlock_guardiansSQ.length == 24 || longestBlock_guardiansSQ.length == 25 || longestBlock_guardiansSQ.length == 26){
                    fontSize = 33
                }
                else if(longestBlock_guardiansSQ.length == 27 || longestBlock_guardiansSQ.length == 28 || longestBlock_guardiansSQ.length == 29){
                    fontSize = 30
                } 
                else if(longestBlock_guardiansSQ.length == 30 || longestBlock_guardiansSQ.length == 31 || longestBlock_guardiansSQ.length == 32){
                    fontSize = 27
                }
                else if(longestBlock_guardiansSQ.length == 33 || longestBlock_guardiansSQ.length == 34 || longestBlock_guardiansSQ.length == 35){
                    fontSize = 25
                }
                else if(longestBlock_guardiansSQ.length == 36 || longestBlock_guardiansSQ.length == 37 || longestBlock_guardiansSQ.length == 38){
                    fontSize = 23
                }
                else if(longestBlock_guardiansSQ.length == 39 || longestBlock_guardiansSQ.length == 40 || longestBlock_guardiansSQ.length == 41){
                    fontSize = 21
                }
                else if(longestBlock_guardiansSQ.length == 42 || longestBlock_guardiansSQ.length == 43 || longestBlock_guardiansSQ.length == 44){
                    fontSize = 20
                }
                else if(longestBlock_guardiansSQ.length == 45 || longestBlock_guardiansSQ.length == 46 || longestBlock_guardiansSQ.length == 47){
                    fontSize = 18
                }
                else if(longestBlock_guardiansSQ.length == 48 || longestBlock_guardiansSQ.length == 49 || longestBlock_guardiansSQ.length == 50){
                    fontSize = 17
                }
                    
            break;
            case 'DEODORIZES':
                //combined 1.
                if(longestBlock_guardiansSQ.length <= 20){
                    fontSize = 43
                }else if(longestBlock_guardiansSQ.length == 21 || longestBlock_guardiansSQ.length == 22 || longestBlock_guardiansSQ.length == 23){
                    fontSize = 37
                }
                else if(longestBlock_guardiansSQ.length == 24 || longestBlock_guardiansSQ.length == 25 || longestBlock_guardiansSQ.length == 26){
                    fontSize = 33
                }
                else if(longestBlock_guardiansSQ.length == 27 || longestBlock_guardiansSQ.length == 28 || longestBlock_guardiansSQ.length == 29){
                    fontSize = 30
                } 
                else if(longestBlock_guardiansSQ.length == 30 || longestBlock_guardiansSQ.length == 31 || longestBlock_guardiansSQ.length == 32){
                    fontSize = 27
                }
                else if(longestBlock_guardiansSQ.length == 33 || longestBlock_guardiansSQ.length == 34 || longestBlock_guardiansSQ.length == 35){
                    fontSize = 25
                }
                else if(longestBlock_guardiansSQ.length == 36 || longestBlock_guardiansSQ.length == 37 || longestBlock_guardiansSQ.length == 38){
                    fontSize = 23
                }
                else if(longestBlock_guardiansSQ.length == 39 || longestBlock_guardiansSQ.length == 40 || longestBlock_guardiansSQ.length == 41){
                    fontSize = 21
                }
                else if(longestBlock_guardiansSQ.length == 42 || longestBlock_guardiansSQ.length == 43 || longestBlock_guardiansSQ.length == 44){
                    fontSize = 20
                }
                else if(longestBlock_guardiansSQ.length == 45 || longestBlock_guardiansSQ.length == 46 || longestBlock_guardiansSQ.length == 47){
                    fontSize = 18
                }
                else if(longestBlock_guardiansSQ.length == 48 || longestBlock_guardiansSQ.length == 49 || longestBlock_guardiansSQ.length == 50){
                    fontSize = 17
                }
                    
            break;
            case 'KILLSVIRUSES':
                //combined 1.
                if(longestBlock_guardiansSQ.length <= 20){
                    fontSize = 43
                }else if(longestBlock_guardiansSQ.length == 21 || longestBlock_guardiansSQ.length == 22 || longestBlock_guardiansSQ.length == 23){
                    fontSize = 37
                }
                else if(longestBlock_guardiansSQ.length == 24 || longestBlock_guardiansSQ.length == 25 || longestBlock_guardiansSQ.length == 26){
                    fontSize = 33
                }
                else if(longestBlock_guardiansSQ.length == 27 || longestBlock_guardiansSQ.length == 28 || longestBlock_guardiansSQ.length == 29){
                    fontSize = 30
                } 
                else if(longestBlock_guardiansSQ.length == 30 || longestBlock_guardiansSQ.length == 31 || longestBlock_guardiansSQ.length == 32){
                    fontSize = 27
                }
                else if(longestBlock_guardiansSQ.length == 33 || longestBlock_guardiansSQ.length == 34 || longestBlock_guardiansSQ.length == 35){
                    fontSize = 25
                }
                else if(longestBlock_guardiansSQ.length == 36 || longestBlock_guardiansSQ.length == 37 || longestBlock_guardiansSQ.length == 38){
                    fontSize = 23
                }
                else if(longestBlock_guardiansSQ.length == 39 || longestBlock_guardiansSQ.length == 40 || longestBlock_guardiansSQ.length == 41){
                    fontSize = 21
                }
                else if(longestBlock_guardiansSQ.length == 42 || longestBlock_guardiansSQ.length == 43 || longestBlock_guardiansSQ.length == 44){
                    fontSize = 20
                }
                else if(longestBlock_guardiansSQ.length == 45 || longestBlock_guardiansSQ.length == 46 || longestBlock_guardiansSQ.length == 47){
                    fontSize = 18
                }
                else if(longestBlock_guardiansSQ.length == 48 || longestBlock_guardiansSQ.length == 49 || longestBlock_guardiansSQ.length == 50){
                    fontSize = 17
                }
                    
            break;
            case 'CORONA':
                //combined 1.
                if(longestBlock_guardiansSQ.length <= 20){
                    fontSize = 43
                }else if(longestBlock_guardiansSQ.length == 21 || longestBlock_guardiansSQ.length == 22 || longestBlock_guardiansSQ.length == 23){
                    fontSize = 37
                }
                else if(longestBlock_guardiansSQ.length == 24 || longestBlock_guardiansSQ.length == 25 || longestBlock_guardiansSQ.length == 26){
                    fontSize = 33
                }
                else if(longestBlock_guardiansSQ.length == 27 || longestBlock_guardiansSQ.length == 28 || longestBlock_guardiansSQ.length == 29){
                    fontSize = 30
                } 
                else if(longestBlock_guardiansSQ.length == 30 || longestBlock_guardiansSQ.length == 31 || longestBlock_guardiansSQ.length == 32){
                    fontSize = 27
                }
                else if(longestBlock_guardiansSQ.length == 33 || longestBlock_guardiansSQ.length == 34 || longestBlock_guardiansSQ.length == 35){
                    fontSize = 25
                }
                else if(longestBlock_guardiansSQ.length == 36 || longestBlock_guardiansSQ.length == 37 || longestBlock_guardiansSQ.length == 38){
                    fontSize = 23
                }
                else if(longestBlock_guardiansSQ.length == 39 || longestBlock_guardiansSQ.length == 40 || longestBlock_guardiansSQ.length == 41){
                    fontSize = 21
                }
                else if(longestBlock_guardiansSQ.length == 42 || longestBlock_guardiansSQ.length == 43 || longestBlock_guardiansSQ.length == 44){
                    fontSize = 20
                }
                else if(longestBlock_guardiansSQ.length == 45 || longestBlock_guardiansSQ.length == 46 || longestBlock_guardiansSQ.length == 47){
                    fontSize = 18
                }
                else if(longestBlock_guardiansSQ.length == 48 || longestBlock_guardiansSQ.length == 49 || longestBlock_guardiansSQ.length == 50){
                    fontSize = 17
                }
                    
            break;
            // 17
            case 'FIND OUT MORE1':
                fontSize = 30;
            break;
            // 18
            case 'WWW1':
                fontSize = 27;
            break;
            // 2
            case 'ASTERISK':
                fontSize = 33;
            break;
            

            
            default: {
                fontSize = 50;
                break;
            }
            
        }
        break;
        // end domestos 6

            // start domestos 7
            case 'Guardians_3in1FloorDisinfectant_Ceramic_OR':
            addFontSize = true;


            let ft_ceramicOR = [];
            Object.keys(translation).forEach(function(prop) {
                ft_ceramicOR.push(translation[prop])
            });

            let combined_ceramicOR1 = [ft_ceramicOR[12], ft_ceramicOR[13], ft_ceramicOR[14], ft_ceramicOR[15], ft_ceramicOR[16]]
            let combined_ceramicOR2 = [ft_ceramicOR[8], ft_ceramicOR[9]]
            

            var longestBlock_ceramicOR = combined_ceramicOR1.sort(function (a, b) { return b.length - a.length; })[0];
            

            switch (key) {
                // 0
                case 'REPLACE TEXT HERE':
                    fontSize = 182
                    
                break;
                // 1
                case 'WeDisinfectant':
                    // if(wordLength >= 14){
                    //     fontSize = 70;
                    // }
                    fontSize = 182
                break;
                
                
                
                case 'Suma Chlorsan D104':
                    fontSize = 35;
                break;
                case 'Floors can harbour harmful virusesbacteria':
                    fontSize = 50;
                break;
                
                case 'GERM COUNT':
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                    
                    
                break;
                case 'Dose 10ml of product per 1L of water':
                    fontSize = 50;
                break;
                case 'REPLACE TEXT HERE12':
                    fontSize = 78;
                break;
                case 'REPLACE TEXT HERE2':
                    fontSize = 78;
                break;
                case 'Degrease and disinfect in just 1 wipe 2':
                    fontSize = 50;
                break;
                case 'Cif pro formula 3in1 FLOOR DISINFECTANT':
                    if(wordLength >= 26){
                        fontSize = 39;
                    }
                    else{
                        fontSize = 47;
                    }
                break;
                
                
                
                // 11
                case 'Degreasedisinfect ':
                    //combined 1.
                    if(longestBlock_ceramicOR.length <= 22){
                        fontSize = 47
                    }else if(longestBlock_ceramicOR.length == 23 || longestBlock_ceramicOR.length == 24 || longestBlock_ceramicOR.length == 25){
                        fontSize = 42
                    }
                    else if(longestBlock_ceramicOR.length == 26 || longestBlock_ceramicOR.length == 27 || longestBlock_ceramicOR.length == 28){
                        fontSize = 37
                    }
                    else if(longestBlock_ceramicOR.length == 29 || longestBlock_ceramicOR.length == 30 || longestBlock_ceramicOR.length == 31){
                        fontSize = 34
                    } 
                    else if(longestBlock_ceramicOR.length == 32 || longestBlock_ceramicOR.length == 33 || longestBlock_ceramicOR.length == 34){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicOR.length == 35 || longestBlock_ceramicOR.length == 36 || longestBlock_ceramicOR.length == 36){
                        fontSize = 29
                    }
                    else if(longestBlock_ceramicOR.length == 38 || longestBlock_ceramicOR.length == 39 || longestBlock_ceramicOR.length == 40){
                        fontSize = 27
                    }
                    else if(longestBlock_ceramicOR.length == 41 || longestBlock_ceramicOR.length == 42 || longestBlock_ceramicOR.length == 43 || longestBlock_ceramicOR.length == 44){
                        fontSize = 24
                    }
                    
                    else if(longestBlock_ceramicOR.length == 45 || longestBlock_ceramicOR.length == 46 || longestBlock_ceramicOR.length == 47){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicOR.length == 48 || longestBlock_ceramicOR.length == 49 || longestBlock_ceramicOR.length == 50){
                        fontSize = 21
                    }
                    
                        
                break;
                case 'your floors':
                    if(longestBlock_ceramicOR.length <= 22){
                        fontSize = 47
                    }else if(longestBlock_ceramicOR.length == 23 || longestBlock_ceramicOR.length == 24 || longestBlock_ceramicOR.length == 25){
                        fontSize = 42
                    }
                    else if(longestBlock_ceramicOR.length == 26 || longestBlock_ceramicOR.length == 27 || longestBlock_ceramicOR.length == 28){
                        fontSize = 37
                    }
                    else if(longestBlock_ceramicOR.length == 29 || longestBlock_ceramicOR.length == 30 || longestBlock_ceramicOR.length == 31){
                        fontSize = 34
                    } 
                    else if(longestBlock_ceramicOR.length == 32 || longestBlock_ceramicOR.length == 33 || longestBlock_ceramicOR.length == 34){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicOR.length == 35 || longestBlock_ceramicOR.length == 36 || longestBlock_ceramicOR.length == 36){
                        fontSize = 29
                    }
                    else if(longestBlock_ceramicOR.length == 38 || longestBlock_ceramicOR.length == 39 || longestBlock_ceramicOR.length == 40){
                        fontSize = 27
                    }
                    else if(longestBlock_ceramicOR.length == 41 || longestBlock_ceramicOR.length == 42 || longestBlock_ceramicOR.length == 43 || longestBlock_ceramicOR.length == 44){
                        fontSize = 24
                    }
                    
                    else if(longestBlock_ceramicOR.length == 45 || longestBlock_ceramicOR.length == 46 || longestBlock_ceramicOR.length == 47){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicOR.length == 48 || longestBlock_ceramicOR.length == 49 || longestBlock_ceramicOR.length == 50){
                        fontSize = 21
                    }
                        
                break;
                case 'kill 999 of viruses':
                    if(longestBlock_ceramicOR.length <= 22){
                        fontSize = 47
                    }else if(longestBlock_ceramicOR.length == 23 || longestBlock_ceramicOR.length == 24 || longestBlock_ceramicOR.length == 25){
                        fontSize = 42
                    }
                    else if(longestBlock_ceramicOR.length == 26 || longestBlock_ceramicOR.length == 27 || longestBlock_ceramicOR.length == 28){
                        fontSize = 37
                    }
                    else if(longestBlock_ceramicOR.length == 29 || longestBlock_ceramicOR.length == 30 || longestBlock_ceramicOR.length == 31){
                        fontSize = 34
                    } 
                    else if(longestBlock_ceramicOR.length == 32 || longestBlock_ceramicOR.length == 33 || longestBlock_ceramicOR.length == 34){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicOR.length == 35 || longestBlock_ceramicOR.length == 36 || longestBlock_ceramicOR.length == 36){
                        fontSize = 29
                    }
                    else if(longestBlock_ceramicOR.length == 38 || longestBlock_ceramicOR.length == 39 || longestBlock_ceramicOR.length == 40){
                        fontSize = 27
                    }
                    else if(longestBlock_ceramicOR.length == 41 || longestBlock_ceramicOR.length == 42 || longestBlock_ceramicOR.length == 43 || longestBlock_ceramicOR.length == 44){
                        fontSize = 24
                    }
                    
                    else if(longestBlock_ceramicOR.length == 45 || longestBlock_ceramicOR.length == 46 || longestBlock_ceramicOR.length == 47){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicOR.length == 48 || longestBlock_ceramicOR.length == 49 || longestBlock_ceramicOR.length == 50){
                        fontSize = 21
                    }
                        
                break;
                case 'kill coronaviruses':
                    if(longestBlock_ceramicOR.length <= 22){
                        fontSize = 47
                    }else if(longestBlock_ceramicOR.length == 23 || longestBlock_ceramicOR.length == 24 || longestBlock_ceramicOR.length == 25){
                        fontSize = 42
                    }
                    else if(longestBlock_ceramicOR.length == 26 || longestBlock_ceramicOR.length == 27 || longestBlock_ceramicOR.length == 28){
                        fontSize = 37
                    }
                    else if(longestBlock_ceramicOR.length == 29 || longestBlock_ceramicOR.length == 30 || longestBlock_ceramicOR.length == 31){
                        fontSize = 34
                    } 
                    else if(longestBlock_ceramicOR.length == 32 || longestBlock_ceramicOR.length == 33 || longestBlock_ceramicOR.length == 34){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicOR.length == 35 || longestBlock_ceramicOR.length == 36 || longestBlock_ceramicOR.length == 36){
                        fontSize = 29
                    }
                    else if(longestBlock_ceramicOR.length == 38 || longestBlock_ceramicOR.length == 39 || longestBlock_ceramicOR.length == 40){
                        fontSize = 27
                    }
                    else if(longestBlock_ceramicOR.length == 41 || longestBlock_ceramicOR.length == 42 || longestBlock_ceramicOR.length == 43 || longestBlock_ceramicOR.length == 44){
                        fontSize = 24
                    }
                    
                    else if(longestBlock_ceramicOR.length == 45 || longestBlock_ceramicOR.length == 46 || longestBlock_ceramicOR.length == 47){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicOR.length == 48 || longestBlock_ceramicOR.length == 49 || longestBlock_ceramicOR.length == 50){
                        fontSize = 21
                    }
                        
                break;
                case 'in 60 seconds':
                    if(longestBlock_ceramicOR.length <= 22){
                        fontSize = 47
                    }else if(longestBlock_ceramicOR.length == 23 || longestBlock_ceramicOR.length == 24 || longestBlock_ceramicOR.length == 25){
                        fontSize = 42
                    }
                    else if(longestBlock_ceramicOR.length == 26 || longestBlock_ceramicOR.length == 27 || longestBlock_ceramicOR.length == 28){
                        fontSize = 37
                    }
                    else if(longestBlock_ceramicOR.length == 29 || longestBlock_ceramicOR.length == 30 || longestBlock_ceramicOR.length == 31){
                        fontSize = 34
                    } 
                    else if(longestBlock_ceramicOR.length == 32 || longestBlock_ceramicOR.length == 33 || longestBlock_ceramicOR.length == 34){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicOR.length == 35 || longestBlock_ceramicOR.length == 36 || longestBlock_ceramicOR.length == 36){
                        fontSize = 29
                    }
                    else if(longestBlock_ceramicOR.length == 38 || longestBlock_ceramicOR.length == 39 || longestBlock_ceramicOR.length == 40){
                        fontSize = 27
                    }
                    else if(longestBlock_ceramicOR.length == 41 || longestBlock_ceramicOR.length == 42 || longestBlock_ceramicOR.length == 43 || longestBlock_ceramicOR.length == 44){
                        fontSize = 24
                    }
                    
                    else if(longestBlock_ceramicOR.length == 45 || longestBlock_ceramicOR.length == 46 || longestBlock_ceramicOR.length == 47){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicOR.length == 48 || longestBlock_ceramicOR.length == 49 || longestBlock_ceramicOR.length == 50){
                        fontSize = 21
                    }
                        
                break;
                // 17
                case 'FIND OUT MORE ':
                    fontSize = 30;
                break;
                // 18
                case 'wwwproformulacom':
                    fontSize = 27;
                break;
                
                

                
                default: {
                    fontSize = 50;
                    break;
                }
                
            }
            break;

            case 'Guardians_3in1FloorDisinfectant_Ceramic_SQ':
            addFontSize = true;

            let ft_ceramicSQ = [];
            Object.keys(translation).forEach(function(prop) {
                ft_ceramicSQ.push(translation[prop])
            });

            let combined_ceramicSQ1 = [ft_ceramicSQ[12], ft_ceramicSQ[13], ft_ceramicSQ[14], ft_ceramicSQ[15], ft_ceramicSQ[16]]
            let combined_ceramicSQ2 = [ft_ceramicSQ[8], ft_ceramicSQ[9]]


            var longestBlock_ceramicSQ = combined_ceramicSQ1.sort(function (a, b) { return b.length - a.length; })[0];


            switch (key) {
                // 0
                case 'REPLACE TEXT HERE':
                    if(wordLength >= 16){
                        
                        fontSize = 166;
                    }else{
                        
                        fontSize = 182;
                    }
                    
                break;
                // 1
                case 'Weve got Cif Pro Formula 3in1 Floor Disinfectant':
                    if(wordLength >= 16){
                        
                        fontSize = 166;
                    }else {
                        
                        fontSize = 182;
                    }
                break;
                
                
                
                case 'Suma':
                    fontSize = 37;
                break;
                case 'Floors can harbour harmful viruses bacteria':
                    fontSize = 50;
                break;
                
                case 'GERM COUNT':
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                    
                    
                break;
                case 'Dise 10ml of product per 1L of water':
                    fontSize = 50;
                    
                break;
                case 'REPLACE TEXT HERE2':
                    if(findLongestWordLength(combined_ceramicSQ2[0]) >= 15 ||findLongestWordLength(combined_ceramicSQ2[1]) >= 15 ){
                        fontSize = 78
                    }else{
                        fontSize = 70
                    }
                break;
                case 'REPLACE TEXT HERE23':
                    if(findLongestWordLength(combined_ceramicSQ2[0]) >= 15 ||findLongestWordLength(combined_ceramicSQ2[1]) >= 15 ){
                        fontSize = 78
                    }else{
                        fontSize = 70
                    }
                break;
                case 'Degrease and disinfect in just 1 wipe 2':
                    fontSize = 50;
                break;
                case 'Cif pro formula 3in1 FLOOR DISINFECTANT':
                    if (textLength <= 38) {
                        fontSize = 49;
                    }
                    else if (textLength == 39 ||textLength == 40 || textLength == 41) {
                        fontSize = 44;
                    }
                    else if (textLength == 42 ||textLength == 43 || textLength == 44) {
                        fontSize = 41;
                    }
                    else if (textLength == 45 ||textLength == 46 || textLength == 47) {
                        fontSize = 39;
                    }
                    else if (textLength == 48 ||textLength == 49 || textLength == 50) {
                        fontSize = 36;
                    }
                break;
                
                
                
                // 11
                case 'Degreasedisinfect ':
                    //combined 1.
                    if(longestBlock_ceramicSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_ceramicSQ.length == 23 || longestBlock_ceramicSQ.length == 24 || longestBlock_ceramicSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_ceramicSQ.length == 26 || longestBlock_ceramicSQ.length == 27 || longestBlock_ceramicSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicSQ.length == 29 || longestBlock_ceramicSQ.length == 30 || longestBlock_ceramicSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_ceramicSQ.length == 32 || longestBlock_ceramicSQ.length == 33 || longestBlock_ceramicSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_ceramicSQ.length == 35 || longestBlock_ceramicSQ.length == 36 || longestBlock_ceramicSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_ceramicSQ.length == 38 || longestBlock_ceramicSQ.length == 39 || longestBlock_ceramicSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicSQ.length == 41 || longestBlock_ceramicSQ.length == 42 || longestBlock_ceramicSQ.length == 43 || longestBlock_ceramicSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_ceramicSQ.length == 45 || longestBlock_ceramicSQ.length == 46 || longestBlock_ceramicSQ.length == 47){
                        fontSize = 18
                    }
                    else if(longestBlock_ceramicSQ.length == 48 || longestBlock_ceramicSQ.length == 49 || longestBlock_ceramicSQ.length == 50){
                        fontSize = 17
                    }
                    
                        
                break;
                case 'your floors':
                    if(longestBlock_ceramicSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_ceramicSQ.length == 23 || longestBlock_ceramicSQ.length == 24 || longestBlock_ceramicSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_ceramicSQ.length == 26 || longestBlock_ceramicSQ.length == 27 || longestBlock_ceramicSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicSQ.length == 29 || longestBlock_ceramicSQ.length == 30 || longestBlock_ceramicSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_ceramicSQ.length == 32 || longestBlock_ceramicSQ.length == 33 || longestBlock_ceramicSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_ceramicSQ.length == 35 || longestBlock_ceramicSQ.length == 36 || longestBlock_ceramicSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_ceramicSQ.length == 38 || longestBlock_ceramicSQ.length == 39 || longestBlock_ceramicSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicSQ.length == 41 || longestBlock_ceramicSQ.length == 42 || longestBlock_ceramicSQ.length == 43 || longestBlock_ceramicSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_ceramicSQ.length == 45 || longestBlock_ceramicSQ.length == 46 || longestBlock_ceramicSQ.length == 47){
                        fontSize = 18
                    }
                    else if(longestBlock_ceramicSQ.length == 48 || longestBlock_ceramicSQ.length == 49 || longestBlock_ceramicSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                case 'kill 99 of viruses':
                    if(longestBlock_ceramicSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_ceramicSQ.length == 23 || longestBlock_ceramicSQ.length == 24 || longestBlock_ceramicSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_ceramicSQ.length == 26 || longestBlock_ceramicSQ.length == 27 || longestBlock_ceramicSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicSQ.length == 29 || longestBlock_ceramicSQ.length == 30 || longestBlock_ceramicSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_ceramicSQ.length == 32 || longestBlock_ceramicSQ.length == 33 || longestBlock_ceramicSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_ceramicSQ.length == 35 || longestBlock_ceramicSQ.length == 36 || longestBlock_ceramicSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_ceramicSQ.length == 38 || longestBlock_ceramicSQ.length == 39 || longestBlock_ceramicSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicSQ.length == 41 || longestBlock_ceramicSQ.length == 42 || longestBlock_ceramicSQ.length == 43 || longestBlock_ceramicSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_ceramicSQ.length == 45 || longestBlock_ceramicSQ.length == 46 || longestBlock_ceramicSQ.length == 47){
                        fontSize = 18
                    }
                    else if(longestBlock_ceramicSQ.length == 48 || longestBlock_ceramicSQ.length == 49 || longestBlock_ceramicSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                case 'kill coronaviruses':
                    if(longestBlock_ceramicSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_ceramicSQ.length == 23 || longestBlock_ceramicSQ.length == 24 || longestBlock_ceramicSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_ceramicSQ.length == 26 || longestBlock_ceramicSQ.length == 27 || longestBlock_ceramicSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicSQ.length == 29 || longestBlock_ceramicSQ.length == 30 || longestBlock_ceramicSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_ceramicSQ.length == 32 || longestBlock_ceramicSQ.length == 33 || longestBlock_ceramicSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_ceramicSQ.length == 35 || longestBlock_ceramicSQ.length == 36 || longestBlock_ceramicSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_ceramicSQ.length == 38 || longestBlock_ceramicSQ.length == 39 || longestBlock_ceramicSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicSQ.length == 41 || longestBlock_ceramicSQ.length == 42 || longestBlock_ceramicSQ.length == 43 || longestBlock_ceramicSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_ceramicSQ.length == 45 || longestBlock_ceramicSQ.length == 46 || longestBlock_ceramicSQ.length == 47){
                        fontSize = 18
                    }
                    else if(longestBlock_ceramicSQ.length == 48 || longestBlock_ceramicSQ.length == 49 || longestBlock_ceramicSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                case 'in 60 seconds':
                    if(longestBlock_ceramicSQ.length <= 22){
                        fontSize = 36
                    }else if(longestBlock_ceramicSQ.length == 23 || longestBlock_ceramicSQ.length == 24 || longestBlock_ceramicSQ.length == 25){
                        fontSize = 34
                    }
                    else if(longestBlock_ceramicSQ.length == 26 || longestBlock_ceramicSQ.length == 27 || longestBlock_ceramicSQ.length == 28){
                        fontSize = 31
                    }
                    else if(longestBlock_ceramicSQ.length == 29 || longestBlock_ceramicSQ.length == 30 || longestBlock_ceramicSQ.length == 31){
                        fontSize = 28
                    } 
                    else if(longestBlock_ceramicSQ.length == 32 || longestBlock_ceramicSQ.length == 33 || longestBlock_ceramicSQ.length == 34){
                        fontSize = 25
                    }
                    else if(longestBlock_ceramicSQ.length == 35 || longestBlock_ceramicSQ.length == 36 || longestBlock_ceramicSQ.length == 36){
                        fontSize = 24
                    }
                    else if(longestBlock_ceramicSQ.length == 38 || longestBlock_ceramicSQ.length == 39 || longestBlock_ceramicSQ.length == 40){
                        fontSize = 22
                    }
                    else if(longestBlock_ceramicSQ.length == 41 || longestBlock_ceramicSQ.length == 42 || longestBlock_ceramicSQ.length == 43 || longestBlock_ceramicSQ.length == 44){
                        fontSize = 19
                    }
                    
                    else if(longestBlock_ceramicSQ.length == 45 || longestBlock_ceramicSQ.length == 46 || longestBlock_ceramicSQ.length == 47){
                        fontSize = 18
                    }
                    else if(longestBlock_ceramicSQ.length == 48 || longestBlock_ceramicSQ.length == 49 || longestBlock_ceramicSQ.length == 50){
                        fontSize = 17
                    }
                        
                break;
                // 17
                case 'FIND OUT MORE ':
                    fontSize = 30;
                break;
                // 18
                case 'wwwproformulacom':
                    fontSize = 27;
                break;
                
                

                
                default: {
                    fontSize = 50;
                    break;
                }
                
            }
            break;

            case 'Guardians_3in1FloorDisinfectant_Laminate_OR':
            addFontSize = true;

            let ft_laminateOR = [];
            Object.keys(translation).forEach(function(prop) {
                ft_laminateOR.push(translation[prop])
            });

            let combined_laminateOR1 = [ft_laminateOR[12], ft_laminateOR[13], ft_laminateOR[14], ft_laminateOR[15], ft_laminateOR[16]]
            let combined_laminateOR2 = [ft_laminateOR[8], ft_laminateOR[9]]


            var longestBlock_laminateOR = combined_laminateOR1.sort(function (a, b) { return b.length - a.length; })[0];


            switch (key) {
                // 0
                case 'REPLACE TEXT HERE':
                    fontSize = 182;
                break;
                // 1
                case 'WeDisinfectant':
                    
                        fontSize = 182;
                    
                break;
                
                case 'Suma Chlorsan D104':
                    fontSize = 35;
                break;

                case 'Floors can harbour harmful virusesbacteria':
                    fontSize = 50;
                break;
                
                case 'GERM COUNT':
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 ||textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                    
                    
                break;
                case 'Dose 10ml of product per 1L of water':
                    fontSize = 50;
                    
                break;
                case 'REPLACE TEXT HERE12':
                    fontSize = 78   
                break;
                case 'REPLACE TEXT HERE2':
                    fontSize = 78
                break;
                case 'Degrease and disinfect in just 1 wipe 2':
                    fontSize = 50;
                break;
                case 'Cif pro formula 3in1 FLOOR DISINFECTANT':
                    fontSize = 49;
                break;
                // 11
                case 'Degreasedisinfect ':
                    //combined 1.
                if(longestBlock_laminateOR.length <= 22){
                    fontSize = 47
                }else if(longestBlock_laminateOR.length == 23 || longestBlock_laminateOR.length == 24 || longestBlock_laminateOR.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_laminateOR.length == 26 || longestBlock_laminateOR.length == 27 || longestBlock_laminateOR.length == 28){
                    fontSize = 37
                }
                else if(longestBlock_laminateOR.length == 29 || longestBlock_laminateOR.length == 30 || longestBlock_laminateOR.length == 31){
                    fontSize = 34
                } 
                else if(longestBlock_laminateOR.length == 32 || longestBlock_laminateOR.length == 33 || longestBlock_laminateOR.length == 34){
                    fontSize = 31
                }
                else if(longestBlock_laminateOR.length == 35 || longestBlock_laminateOR.length == 36 || longestBlock_laminateOR.length == 36){
                    fontSize = 29
                }
                else if(longestBlock_laminateOR.length == 38 || longestBlock_laminateOR.length == 39 || longestBlock_laminateOR.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_laminateOR.length == 41 || longestBlock_laminateOR.length == 42 || longestBlock_laminateOR.length == 43 || longestBlock_laminateOR.length == 44){
                    fontSize = 24
                }

                else if(longestBlock_laminateOR.length == 45 || longestBlock_laminateOR.length == 46 || longestBlock_laminateOR.length == 47){
                    fontSize = 22
                }
                else if(longestBlock_laminateOR.length == 48 || longestBlock_laminateOR.length == 49 || longestBlock_laminateOR.length == 50){
                    fontSize = 21
                }
                    
                        
                break;
                case 'your floors':
                        //combined 1.
                if(longestBlock_laminateOR.length <= 22){
                    fontSize = 47
                }else if(longestBlock_laminateOR.length == 23 || longestBlock_laminateOR.length == 24 || longestBlock_laminateOR.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_laminateOR.length == 26 || longestBlock_laminateOR.length == 27 || longestBlock_laminateOR.length == 28){
                    fontSize = 37
                }
                else if(longestBlock_laminateOR.length == 29 || longestBlock_laminateOR.length == 30 || longestBlock_laminateOR.length == 31){
                    fontSize = 34
                } 
                else if(longestBlock_laminateOR.length == 32 || longestBlock_laminateOR.length == 33 || longestBlock_laminateOR.length == 34){
                    fontSize = 31
                }
                else if(longestBlock_laminateOR.length == 35 || longestBlock_laminateOR.length == 36 || longestBlock_laminateOR.length == 36){
                    fontSize = 29
                }
                else if(longestBlock_laminateOR.length == 38 || longestBlock_laminateOR.length == 39 || longestBlock_laminateOR.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_laminateOR.length == 41 || longestBlock_laminateOR.length == 42 || longestBlock_laminateOR.length == 43 || longestBlock_laminateOR.length == 44){
                    fontSize = 24
                }

                else if(longestBlock_laminateOR.length == 45 || longestBlock_laminateOR.length == 46 || longestBlock_laminateOR.length == 47){
                    fontSize = 22
                }
                else if(longestBlock_laminateOR.length == 48 || longestBlock_laminateOR.length == 49 || longestBlock_laminateOR.length == 50){
                    fontSize = 21
                }
                        
                break;
                case 'kill 999 of viruses':
                        //combined 1.
                        
                        if(longestBlock_laminateOR.length <= 22){
                        fontSize = 47
                    }else if(longestBlock_laminateOR.length == 23 || longestBlock_laminateOR.length == 24 || longestBlock_laminateOR.length == 25){
                        fontSize = 42
                    }
                    else if(longestBlock_laminateOR.length == 26 || longestBlock_laminateOR.length == 27 || longestBlock_laminateOR.length == 28){
                        fontSize = 37
                    }
                    else if(longestBlock_laminateOR.length == 29 || longestBlock_laminateOR.length == 30 || longestBlock_laminateOR.length == 31){
                        fontSize = 34
                    } 
                    else if(longestBlock_laminateOR.length == 32 || longestBlock_laminateOR.length == 33 || longestBlock_laminateOR.length == 34){
                        fontSize = 31
                    }
                    else if(longestBlock_laminateOR.length == 35 || longestBlock_laminateOR.length == 36 || longestBlock_laminateOR.length == 36){
                        fontSize = 29
                    }
                    else if(longestBlock_laminateOR.length == 38 || longestBlock_laminateOR.length == 39 || longestBlock_laminateOR.length == 40){
                        fontSize = 27
                    }
                    else if(longestBlock_laminateOR.length == 41 || longestBlock_laminateOR.length == 42 || longestBlock_laminateOR.length == 43 || longestBlock_laminateOR.length == 44){
                        fontSize = 24
                    }

                    else if(longestBlock_laminateOR.length == 45 || longestBlock_laminateOR.length == 46 || longestBlock_laminateOR.length == 47){
                        fontSize = 22
                    }
                    else if(longestBlock_laminateOR.length == 48 || longestBlock_laminateOR.length == 49 || longestBlock_laminateOR.length == 50){
                        fontSize = 21
                    }
                        
                break;
                case 'kill coronaviruses':
                        //combined 1.
                if(longestBlock_laminateOR.length <= 22){
                    fontSize = 47
                }else if(longestBlock_laminateOR.length == 23 || longestBlock_laminateOR.length == 24 || longestBlock_laminateOR.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_laminateOR.length == 26 || longestBlock_laminateOR.length == 27 || longestBlock_laminateOR.length == 28){
                    fontSize = 37
                }
                else if(longestBlock_laminateOR.length == 29 || longestBlock_laminateOR.length == 30 || longestBlock_laminateOR.length == 31){
                    fontSize = 34
                } 
                else if(longestBlock_laminateOR.length == 32 || longestBlock_laminateOR.length == 33 || longestBlock_laminateOR.length == 34){
                    fontSize = 31
                }
                else if(longestBlock_laminateOR.length == 35 || longestBlock_laminateOR.length == 36 || longestBlock_laminateOR.length == 36){
                    fontSize = 29
                }
                else if(longestBlock_laminateOR.length == 38 || longestBlock_laminateOR.length == 39 || longestBlock_laminateOR.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_laminateOR.length == 41 || longestBlock_laminateOR.length == 42 || longestBlock_laminateOR.length == 43 || longestBlock_laminateOR.length == 44){
                    fontSize = 24
                }

                else if(longestBlock_laminateOR.length == 45 || longestBlock_laminateOR.length == 46 || longestBlock_laminateOR.length == 47){
                    fontSize = 22
                }
                else if(longestBlock_laminateOR.length == 48 || longestBlock_laminateOR.length == 49 || longestBlock_laminateOR.length == 50){
                    fontSize = 21
                }
                        
                break;
                case 'in 60 seconds':
                        //combined 1.
                if(longestBlock_laminateOR.length <= 22){
                    fontSize = 47
                }else if(longestBlock_laminateOR.length == 23 || longestBlock_laminateOR.length == 24 || longestBlock_laminateOR.length == 25){
                    fontSize = 42
                }
                else if(longestBlock_laminateOR.length == 26 || longestBlock_laminateOR.length == 27 || longestBlock_laminateOR.length == 28){
                    fontSize = 37
                }
                else if(longestBlock_laminateOR.length == 29 || longestBlock_laminateOR.length == 30 || longestBlock_laminateOR.length == 31){
                    fontSize = 34
                } 
                else if(longestBlock_laminateOR.length == 32 || longestBlock_laminateOR.length == 33 || longestBlock_laminateOR.length == 34){
                    fontSize = 31
                }
                else if(longestBlock_laminateOR.length == 35 || longestBlock_laminateOR.length == 36 || longestBlock_laminateOR.length == 36){
                    fontSize = 29
                }
                else if(longestBlock_laminateOR.length == 38 || longestBlock_laminateOR.length == 39 || longestBlock_laminateOR.length == 40){
                    fontSize = 27
                }
                else if(longestBlock_laminateOR.length == 41 || longestBlock_laminateOR.length == 42 || longestBlock_laminateOR.length == 43 || longestBlock_laminateOR.length == 44){
                    fontSize = 24
                }

                else if(longestBlock_laminateOR.length == 45 || longestBlock_laminateOR.length == 46 || longestBlock_laminateOR.length == 47){
                    fontSize = 22
                }
                else if(longestBlock_laminateOR.length == 48 || longestBlock_laminateOR.length == 49 || longestBlock_laminateOR.length == 50){
                    fontSize = 21
                }
                        
                break;
                // 17
                case 'FIND OUT MORE ':
                    fontSize = 30;
                break;
                // 18
                case 'wwwproformulacom':
                    fontSize = 27;
                break;
                
                

                
                default: {
                    fontSize = 50;
                    break;
                }
                
            }
            break;

            


            // START * Guardians 2in1 Plant Based Disinfectant OR *
        case 'Guardians_2in1_Plant_Based_Disinfectant_OR':
            console.log("PB OR")
            addFontSize = true;

            let ft_disinfectantOR = [];
            Object.keys(translation).forEach(function(prop) {
                ft_disinfectantOR.push(translation[prop])
            });
            
            let combined_disinfectantOR1 = [ft_disinfectantOR[6], ft_disinfectantOR[7]]
            
            switch (key) {
                // 0
                case 'DIRT BACKGROUND TEXT':
                    console.log("DIRT BACKGROUND TEXT")
                    fontSize = 81;
                    console.log(fontSize);
                break;
                // 1
                case 'CLEAN BACKGROUND TEXT':
                    console.log("CLEAN BACKGROUND TEXT");
                    fontSize = 81;   
                    console.log(fontSize);
                break;
                // 2
                case 'Text1':
                    console.log("text1");
                    fontSize = 50;   
                    console.log(fontSize);
                break;
                // 3
                case 'GERM DETECTOR':
                    console.log("germ detector");
                    if (textLength <= 13) {
                        fontSize = 48;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 41;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 36;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 31;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 27;
                    }
                    else if (textLength == 26 || textLength == 27 || textLength == 28) {
                        fontSize = 24;
                    }
                    console.log(fontSize);
                break;
                // 4
                case 'GERM COUNT':
                    console.log("germ count");
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                    console.log(fontSize);
                break;
                // 5
                case 'TIMER 30s':
                    console.log("timer 30s");
                    if(findLongestWordLength(combined_disinfectantOR1[0]) >= 15 || findLongestWordLength(combined_disinfectantOR1[1]) >= 15 ){
                        console.log("timer 30s1");
                        fontSize = 40;
                    }else{
                        console.log("timer 30s2");
                        fontSize = 46;
                    }
                    console.log(fontSize);
                break;
                // 6
                case 'TIMER 5min':
                    console.log("Ctimer 5 mins");
                    
                    if(findLongestWordLength(combined_disinfectantOR1[0]) >= 15 || findLongestWordLength(combined_disinfectantOR1[1]) >= 15 ){
                        console.log("Ctimer 5 mins1");
                        fontSize = 40;
                    }else{
                        console.log("Ctimer 5 mins2");
                        fontSize = 46;
                    }
                    console.log(fontSize);
                break;
                // 7
                case 'Text2':
                    console.log("Ctext 2");
                    fontSize = 50;   
                    console.log(fontSize);
                break;
                // 8
                case 'Kills100':
                    console.log("kills 100");
                    fontSize = 47;
                    console.log(fontSize); 
                break;
                // 9
                case 'FIND OUT MORE1':
                    console.log("Cfind more");
                    fontSize = 30;
                    console.log(fontSize); 
                break;
                // 10
                case 'WWW1':
                    console.log("WWW 1");
                    fontSize = 27;
                    console.log(fontSize);
                break;
                case 'CONDITIONS':
                    console.log("CONDITIONS");
                    fontSize = 35;
                    console.log(fontSize);
                break;
                case 'KILLS VIRUS':
                    console.log("KILLS VIRUS");
                    fontSize = 35;
                    console.log(fontSize);
                break;
                default: {
                    fontSize = 50;
                    break;
                }
                
            }


        break;


            // START * Guardians 2in1 Plant Based Disinfectant SQ *
        case 'Guardians_2in1_Plant_Based_Disinfectant_SQ':
            console.log("PB SQ")
            addFontSize = true;

            let ft_disinfectantSQ = [];
            Object.keys(translation).forEach(function(prop) {
                ft_disinfectantSQ.push(translation[prop])
            });
            
            let combined_disinfectantSQ1 = [ft_disinfectantSQ[7], ft_disinfectantSQ[8]]
            
            switch (key) {
                // 0
                case 'DIRT BACKGROUND TEXT':
                    console.log("DIRT BACKGROUND TEXT")
                    
                    if(wordLength >= 14){
                        fontSize = 70;
                    }else{
                        fontSize = 81;
                    }
                    console.log(fontSize);
                break;
                // 1
                case 'CLEAN BACKGROUND TEXT':
                    console.log("CLEAN BACKGROUND TEXT");
                    if(wordLength >= 14){
                        fontSize = 70;
                    }else{
                        fontSize = 81;
                    }   
                    console.log(fontSize);
                break;
                // 2
                case 'Text1':
                    console.log("text1");
                    fontSize = 50;   
                    console.log(fontSize);
                break;
                // 3
                case 'GERM DETECTOR':
                    console.log("germ detector");
                    if (textLength <= 13) {
                        fontSize = 48;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 41;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 36;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 31;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 27;
                    }
                    else if (textLength == 26 || textLength == 27 || textLength == 28) {
                        fontSize = 24;
                    }
                    console.log(fontSize);
                break;
                // 4
                case 'GERM COUNT':
                    console.log("germ count");
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                    console.log(fontSize);
                break;
                // 5
                case 'TIMER 30s':
                    console.log("timer 30s");
                    if(findLongestWordLength(combined_disinfectantSQ1[0]) >= 13 || findLongestWordLength(combined_disinfectantSQ1[1]) >= 13 ){
                        console.log("timer 30s1");
                        fontSize = 40;
                    }else{
                        console.log("timer 30s2");
                        fontSize = 46;
                    }
                    console.log(fontSize);
                break;
                // 6
                case 'TIMER 5min':
                    console.log("Ctimer 5 mins");
                    
                    if(findLongestWordLength(combined_disinfectantSQ1[0]) >= 13 || findLongestWordLength(combined_disinfectantSQ1[1]) >= 13 ){
                        console.log("Ctimer 5 mins1");
                        fontSize = 40;
                    }else{
                        console.log("Ctimer 5 mins2");
                        fontSize = 46;
                    }
                    console.log(fontSize);
                break;
                // 7
                case 'Text2':
                    console.log("Ctext 2");
                    fontSize = 50;   
                    console.log(fontSize);
                break;
                // 8
                case 'Kills100':
                    console.log("kills 100");
                    if (textLength <= 104) {
                        fontSize = 47;
                    }
                    else if (textLength == 105 || textLength == 106 || textLength == 107) {
                        fontSize = 46;
                    }
                    else if (textLength == 108 || textLength == 109 || textLength == 110) {
                        fontSize = 44;
                    }
                    else if (textLength == 111 || textLength == 112 || textLength == 113) {
                        fontSize = 43;
                    }
                    else if (textLength == 114 || textLength == 115 || textLength == 116) {
                        fontSize = 42;
                    }
                    else if (textLength == 117 || textLength == 118 || textLength == 119) {
                        fontSize = 41;
                    }
                    else if (textLength == 120) {
                        fontSize = 40;
                    }
                    console.log(fontSize); 
                break;
                // 9
                case 'FIND OUT MORE111':
                    console.log("Cfind more");
                    fontSize = 30;
                    console.log(fontSize); 
                break;
                // 10
                case 'WWW2':
                    console.log("WWW 2");
                    fontSize = 27;
                    console.log(fontSize);
                break;
                case 'CONDITIONS':
                    console.log("CONDITIONS");
                    fontSize = 35;
                    console.log(fontSize);
                break;
                case 'KILLS VIRUS':
                    console.log("KILLS VIRUS");
                    fontSize = 35;
                    console.log(fontSize);
                break;
                default: {
                    fontSize = 50;
                    break;
                }
                
            }


        break;




            // START * Disinfectant_Spray_Disinfection_OR *
            case 'Disinfectant_Spray_Disinfection_OR':
            console.log("Disinfectant_Spray_Disinfection_OR")
            addFontSize = true;
            switch (key) {
                // 0
                case 'YouveGotGerms':
                    
                    if (textLength <= 67) {
                        fontSize = 71;
                    }
                    else if (textLength >= 68) {
                        fontSize = 58;
                    }
                    
                    if(wordLength >= 15){
                        fontSize = 85*fontSize/100;
                    }
                break;
                // 1
                case 'CifProFormula':
                    if (textLength <= 60) {
                        fontSize = 71;
                    }
                    else if (textLength >= 61) {
                        fontSize = 53;
                    }
                    
                    if(wordLength >= 15){
                        fontSize = 85*fontSize/100;
                    }
                break;
                // 2
                case 'DirtContains':
                    fontSize = 55;   
                break;
                // 3
                case 'GERM DETECTOR':
                    if (textLength <= 13) {
                        fontSize = 48;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 41;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 36;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 31;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 27;
                    }
                    else if (textLength == 26 || textLength == 27 || textLength == 28) {
                        fontSize = 24;
                    }
                    
                break;
                // 4
                case 'GERM COUNT':
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                break;
                // 5
                case '2in1Cleaning':
                    fontSize = 55;
                break;
                // 6
                case 'KILL 99':
                    if (textLength <= 69) {
                        fontSize = 47;
                    }
                    else if (textLength >= 70) {
                        fontSize = 35;
                    }
                    
                    if(wordLength >= 19){
                        fontSize = 85*fontSize/100;;
                    }
                

                break;
                
                // 9
                case 'FIND OUT MORE':
                    
                    fontSize = 30;
                    
                break;
                // 10
                case 'www.proformula.com':
                    
                    fontSize = 30;
                    console.log(fontSize);
                break;
                
                default: {
                    fontSize = 50;
                    break;
                }
                
            }


        break;
        // Disinfectant_Spray_Disinfection_OR

        // START * Disinfectant_Spray_Disinfection_SQ *
        case 'Disinfectant_Spray_Disinfection_SQ':
            console.log("Disinfectant_Spray_Disinfection_SQ")
            addFontSize = true;
            switch (key) {
                // 0
                case 'YouveGotGerms':
                    
                    if (textLength <= 58) {
                        fontSize = 80;
                    }
                    else if (textLength >= 59) {
                        fontSize = 60;
                    }
                    
                    if(wordLength >= 14){
                        fontSize = 85*fontSize/100;
                    }
                break;
                // 1
                case 'CifProFormula':
                    if (textLength <= 74) {
                        fontSize = 80;
                    }
                    else if (textLength >= 75) {
                        fontSize = 60;
                    }
                    
                    if(wordLength >= 14){
                        fontSize = 85*fontSize/100;
                    }
                break;
                // 2
                case 'DirtContains':
                    fontSize = 55;   
                break;
                // 3
                case 'GERM DETECTOR':
                    if (textLength <= 13) {
                        fontSize = 48;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 41;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 36;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 31;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 27;
                    }
                    else if (textLength == 26 || textLength == 27 || textLength == 28) {
                        fontSize = 24;
                    }
                    
                break;
                // 4
                case 'GERM COUNT':
                    if (textLength <= 13) {
                        fontSize = 67;
                    }
                    else if (textLength == 14 || textLength == 15 || textLength == 16) {
                        fontSize = 54;
                    }
                    else if (textLength == 17 || textLength == 18 || textLength == 19) {
                        fontSize = 44;
                    }
                    else if (textLength == 20 || textLength == 21 || textLength == 22) {
                        fontSize = 39;
                    }
                    else if (textLength == 23 || textLength == 24 || textLength == 25) {
                        fontSize = 33;
                    }
                break;
                // 5
                case '2in1Cleaning':
                    fontSize = 55;
                break;
                // 6
                case 'KILL 99':
                    if (textLength <= 69) {
                        fontSize = 47;
                    }
                    else if (textLength >= 70) {
                        fontSize = 35;
                    }
                    
                    if(wordLength >= 19){
                        fontSize = 85*fontSize/100;
                    }
                

                break;
                
                // 9
                case 'FIND OUT MORE':
                    
                    fontSize = 30;
                    
                break;
                // 10
                case 'www.proformula.com':
                    
                    fontSize = 30;
                    console.log(fontSize);
                break;
                
                default: {
                    fontSize = 50;
                    break;
                }
                
            }


        break;
        // Disinfectant_Spray_Disinfection_SQ
            


    default: {
        break;
    }
}