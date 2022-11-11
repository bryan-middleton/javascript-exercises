const removeFromArray = function(originalArray, ...checkValues) {
    if (checkValues.length>1){
        checkValues=Array.from(checkValues);
    }
    for(let i=0;i<originalArray.length;i++){
        if (Array.isArray(checkValues)){
            for (let j=0;j<checkValues.length;j++){
                if (originalArray[i]===checkValues[j]){
                    originalArray.splice(i,1);
                    i--;//makes sure no index is skipped when removing an item from the array
                }
            }
        }
        else {
            if(originalArray[i]===checkValues){
                originalArray.splice(i,1);
            }
        }
    }
    console.log(originalArray, ' | ' + checkValues);
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
