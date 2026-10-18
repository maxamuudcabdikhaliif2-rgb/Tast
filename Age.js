function colculatorAge() {
    const birthDate = new Date(
    document.getElementById("birthDate").value
);
   const today = new Date();
    if (!document.getElementById("birthDate").value){ 
        document.getElementById("result").innerHTML = "please select your birth date";
        return;
    }
    let years = today.getFullYear()-birthDate.getFullYear();
    let months = today.getMonth()-birthDate.getMonth();
    let days = today.getDate()-birthDate.getDate();

    if(days < 0){
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += prevMonth.getDate();
    }

    if (months < 0){
        years--;
        months +=12;
    }
    document.getElementById("result").innerHTML = `you are ${years} years, ${months} months, and ${days} days old.`;
}

