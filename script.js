function calculateTax(income, expenses) {
    if(income && expenses > 0 && income > expenses){
        const difference = income-expenses;
        return difference*.20;
    }
    else if(income==expenses){
        return 0
    }
    else{
        return 'Invalid Input'
    }
}

function sendNotification(email) {
    if(email.includes('@') == true){
        const r = email.split('@');
        return r.join(' sent you an email from ')
    }
    else{
        return 'Invalid Email'
    }
}

function checkDigitsInName(name) {
    if(typeof(name) == 'string'){
        return /\d/.test(name);
    }
    else{
        return 'Invalid Input'
    }
}

function calculateFinalScore(obj) {
    let sum=0;
    if(typeof(obj)=='object'){
        if(obj.testScore<=50 && obj.schoolGrade<=30){
           sum += obj.testScore + obj.schoolGrade;
             if(obj.isFFamily == true){
                sum += 20
             }
        }
        if(sum>=80){
            return true
        }
        else{
            return false
        }
    }
    else{
        return 'Invalid Input'
    }
}

function  waitingTime(waitingTimes  , serialNumber) {
    let sum=0;
    if( typeof(waitingTimes) == 'object' && typeof(serialNumber) == 'number'){
       for(const time of waitingTimes){
        sum += time;
       }
       let val1 = sum /waitingTimes.length;
       val1Updated = Math.round(val1);

       let val2 = serialNumber - 1 - waitingTimes.length;

       return val1Updated * val2
    }
    else{
        return 'Invalid Input'
    }
}