# Resize Sample

Code contained `sample.js` is simple vanilla Javascript that is used to adjust and scale font sizes across custom video renders.



## Instructions
* Add a case to the existing main switch in the render.js file on unilever-trial for vidgen-v1 (link enclosed in word doc). The case will always be the filename
* For each 'Layer' in the google document, there must be a case applied to the javascript in the form of another switch.
* there may be some other adaptations you must make, please see below for an example, and glossary for some pointers
* Lines 17-340 contains an example that holds most of the interations of the fontSize changes needed. have a read and try use this as an example


### Example:

YGTK_1
* Original font size: 79px
* Original character length: 59
* ANYTHING ABOVE 59 characters: 60px 
* LWR RULE APPLIED - 12 characters and above minus 15%

In this example, the layer name is 'YGTK_1'. the addition here is the "LWR" (Long Word Rule) Long words will take the longest word in the translation into account. This will look like this:

``` js
case 'YGTK_1':    
    if (textLength <= 59) {
        fontSize = 79;
    }
    else if (textLength >= 60) {
        fontSize = 60;
    }
    if(wordLength >= 15){
        fontSize = 85*fontSize/100;
    }
break;
```

### Glossary

* **fontSize**: fontsize is the adjusted fontSize we must make for our render
* **textLength**: each case already has a textLength applied. this is the character length of the translation. E.g. if the translation is "I am some really long text" then the textLength is 26
* **wordLength**: each case already has a wordLength applied. This is the length of the longest word in each translation. E.g. if the translation is "I am some really long text" then the wordLength is 6 ('really')
* **compostion rule**: some translations must change fontsize if a related translation is changed. Eg. translations 1 & 2 are linked together and the longest length of either of these translations affects final fontSize
