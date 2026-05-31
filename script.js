let boxVisible = false;

// Array of funny emojis for the "NO" button
const noEmojis = ["🥺", "💨", "😭", "😔", "⛔", "🚫", "🤡", "❌"];

function yes() {
    let box = document.getElementById("box");
    let noBtn = document.getElementById("noBtn");
    let appPage = document.getElementById("approvalPage");

    // 1. FIX: If Approval page is open, reset everything first
    if (appPage.style.display === "block") {
        appPage.style.display = "none";
    }

    // 💙 TOGGLE: YES again closes it
    if (boxVisible) {
        box.style.display = "none";
        boxVisible = false;
        noBtn.style.display = "inline-block"; // Bring NO back
        document.getElementById("msg").innerHTML = "Yes na yan 😏";
        return;
    }

    document.getElementById("msg").innerHTML = "🥰";
    box.style.display = "block";
    boxVisible = true;

    // FIX: Hide NO button
    noBtn.style.display = "none"; 
    
    document.getElementById("dateMsg").innerHTML = "";
}

function moveNo() {
    let btn = document.getElementById("noBtn");

    btn.style.position = "absolute";

    let maxX = window.innerWidth - 120;
    let maxY = window.innerHeight - 120;

    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";

    let randomEmoji = noEmojis[Math.floor(Math.random() * noEmojis.length)];
    btn.innerHTML = "NO " + randomEmoji;
}

function confirmDate() {
    let input = document.getElementById("datePick").value;

    if (input === "") {
        document.getElementById("dateMsg").innerHTML = "Please choose a date 🙏";
        return;
    }

    let selectedDate = new Date(input);
    let today = new Date();

    // Fix date comparison
    today.setHours(0,0,0,0);

    // Past date check
    if (selectedDate < today) {
        document.getElementById("dateMsg").innerHTML = "Stop trolling 😐";
    } else {
        // 3. FIX: Switch to Approval Page
        showApprovalPage(input);
    }
}

function showApprovalPage(dateString) {
    // Hide the date picker box
    document.getElementById("box").style.display = "none";
    boxVisible = false;
    
    // Show the approval page
    let appPage = document.getElementById("approvalPage");
    appPage.style.display = "block";
    
    // Format the date nicely
    let dateObj = new Date(dateString);
    let niceDate = dateObj.toLocaleString();
    
    document.getElementById("finalDetails").innerHTML = 
        "Date: " + niceDate + "<br>Status: Pending Approval";
}

function reset() {
    // Go back to the date picker
    document.getElementById("approvalPage").style.display = "none";
    document.getElementById("box").style.display = "block";
    boxVisible = true;
}


