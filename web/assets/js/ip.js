// Endpoints
const endpointIPv4 = "https://ip4.seeip.org/json";
const endpointIPv6 = "https://ip6.seeip.org/json";

// Debugging for developig purposes
const debugEnabled = true;

// On screen messages
const onScreenError = "Failed to fetch";
const onScreenCopied = "Copied to clipboard!";

// Style for console.log() messages
const consoleError = "color: red; font-size: 12px; padding-top:6px; padding-bottom:6px;";
const consoleSuccess = "color: green; font-size: 12px; padding-top:6px; padding-bottom:6px;"
const consoleInfo = "color: black; font-size: 12px; padding-top:6px; padding-bottom:6px;"

// Messages (console only)
const consoleMessageError = "❌ ERROR: Something went wrong\n\n";
const consoleMessageDOM = "✅ SUCCESS: Page fully loaded";
const consoleMessageCallIPv4 = "ℹ️ INFO: Calling to API endpoint for IPv4";
const consoleMessageCallIPv6 = "ℹ️ INFO: Calling to API endpoint for IPv6";
const consoleMessageDebug = "ℹ️ INFO: Debugging is enabled";
const consoleMessageCopied = "ℹ️ INFO: Copied ";

const ElememtIPv4 = document.getElementById("ipv4");
const ElememtIPv6 = document.getElementById("ipv6");

(async () => {

    // Print DEBUG mode
    if(debugEnabled == true) { 
        await console.log("%c" + consoleMessageDebug, consoleInfo); 
    }

    // Fetch IPv4
    if(debugEnabled == true) { 
        await console.log("%c" + consoleMessageCallIPv4, consoleInfo); 
    }

    await fetch(endpointIPv4)
        .then(res => res.json())
        .then(data => {
            const ipv4 = data["ip"];
            ElememtIPv4.innerHTML = ipv4;

            if(debugEnabled == true) { 
                console.log("%c✅ IPv4: " + ipv4, consoleSuccess); 
            }
        })
        .catch(function(error) {
            ElememtIPv4.innerHTML = onScreenError + " IPv4";
            ElememtIPv4.classList.add("error");

            console.log("%c" + consoleMessageError + error, consoleError);
        });

    // Fetch IPv6
    if(debugEnabled == true) { await console.log("%c" + consoleMessageCallIPv6, consoleInfo); }

    await fetch(endpointIPv6)
        .then(res => res.json())
        .then(data => {
            const ipv6 = data["ip"];
            ElememtIPv6.innerHTML = ipv6;

            if(debugEnabled == true) { 
                console.log("%c✅ IPv6: " + ipv6, consoleSuccess); 
            }
        })
        .catch(function(error) {
            ElememtIPv6.innerHTML = onScreenError + " IPv6";
            ElememtIPv6.classList.add("error");

            console.log("%c" + consoleMessageError + error, consoleError);
        });

    // Check if document is fully loaded
    if(debugEnabled == true) { 
        await console.log("%c" + consoleMessageDOM, consoleSuccess); 
    }

})();

// Event listener is used to copy the IP to the sers clipboard
[ElememtIPv4, ElememtIPv6].map(element => element.addEventListener("click", function() {

    const textCopied = ClipboardJS.copy(element.innerHTML);

    if(debugEnabled == true) { 
        console.log("%c" + consoleMessageCopied + '"' + textCopied + '"', consoleInfo); 
    }

    document.getElementById("clip").innerHTML = onScreenCopied;

}));