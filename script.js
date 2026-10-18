let balance = 10000;
const correctPin = "0000";

function sendMoney() {

    const phone = document.getElementById("phone").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const pin = document.getElementById("pin").value.trim();

    // Phone
    if (phone === "") {
        alert("Fadlan geli phone number");
        return;
    }

    // Amount
    if (amount <= 0 || isNaN(amount)) {
        alert("Fadlan geli amount sax ah");
        return;
    }

    // Balance
    if (amount > balance) {
        alert("Haraga kugu filan ma jiro");
        return;
    }

    // PIN
    if (pin !== correctPin) {
        alert("PIN-ka waa khalad");
        return;
    }

    // Lacagta ka jar
    balance -= amount;

    // Haraga cusub
    document.getElementById("balance").textContent =
        "$" + balance.toLocaleString("en-US", {
            minimumFractionDigits: 2
        });

    // History ku dar
    addHistory(phone, amount);

    // Inputs nadiifi
    document.getElementById("phone").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("pin").value = "";
}


function addHistory(phone, amount) {

    const historyList = document.getElementById("historyList");

    // Qoraalkii hore ka saar
    if (historyList.querySelector("p")) {
        historyList.querySelector("p").remove();
    }

    const history = document.createElement("div");

    history.className = "history-item";

    history.innerHTML = `
        <div>
            <h3>Lacag la diray</h3>
            <p>Phone: ${phone}</p>
            <small>${new Date().toLocaleTimeString()}</small>
        </div>

        <strong>-$${amount.toFixed(2)}</strong>
    `;

    historyList.prepend(history);
}