// Required Geotab API objects
var api;
var authenticateCallback;

document.addEventListener("DOMContentLoaded", function() {

    initializeSignIn();

    api = GeotabApi(function(detailsCallback) {
        authenticateCallback = detailsCallback;

        // Not signed in so display the login area
        document.getElementById("signin-content").style.display = "block";
        document.getElementById("example-content").style.display = "none";
    }, {
        rememberMe: true,
        jsonp: false
    });

    document.getElementById("signin").addEventListener("click", function(event) {
        event.preventDefault();

        var server   = document.getElementById("server").value,
            database = document.getElementById("database").value,
            email    = document.getElementById("email").value,
            password = document.getElementById("password").value;

        authenticateCallback(server, database, email, password, function(error) {
            alert(error);
            signOut();
        });

        document.getElementById("signin-content").style.display = "none";
        document.getElementById("example-content").style.display = "block";
    });

    document.getElementById("signout").addEventListener("click", function(event) {
        event.preventDefault();

        if (api !== undefined) {
            api.forget();
        }
        signOut();
    });

    document.getElementById("help").addEventListener("click", function(event) {
        event.preventDefault();

        showHelp();
    });
});

var initializeSignIn = function() {
    var createLabel = function(options) {
        var element = document.createElement("label");
        element.setAttribute("for", options.for);
        element.innerHTML = options.html;
        return element;
    };

    var createInput = function(options) {
        var element = document.createElement("input");
        element.setAttribute("id", options.id);
        element.setAttribute("type", options.type);
        element.setAttribute("placeholder", options.placeholder);
        if (options.value !== undefined) {
            element.setAttribute("value", options.value);
        }
        return element;
    };

    // When developing with the SDK samples, it you may find that signing in every time you refresh the page
    // gets in the way of what you're doing. Set the boolean below to true, and fill in the information to
    // automatically populate the sign in form.
    var debugEnabled = true,
        debugServer = "my.geotab.com",
        debugDatabase = "tyler_testing",
        debugEmail = "tyler.c.carson@gmail.com",
        debugPassword = "Chri$Webber4";

    // Build sign in form
    var form = document.createElement("form");
    var legend = document.createElement("legend");
    legend.innerHTML = "Sign in to continue";

    // Build server field
    var paragraph1 = document.createElement("p");
    paragraph1.appendChild(createLabel({
        for: "server",
        html: "Server name"
    }));
    paragraph1.appendChild(createInput({
        id: "server",
        type: "text",
        placeholder: "Example: my.geotab.com",
        value: (debugEnabled === true ? debugServer : undefined)
    }));

    // Build database field
    var paragraph2 = document.createElement("p");
    paragraph2.appendChild(createLabel({
        for: "database",
        html: "Database"
    }));
    paragraph2.appendChild(createInput({
        id: "database",
        type: "text",
        placeholder: "Example: MyCompany",
        value: (debugEnabled === true ? debugDatabase : undefined)
    }));

    // Build email field
    var paragraph3 = document.createElement("p");
    paragraph3.appendChild(createLabel({
        for: "email",
        html: "Email"
    }));
    paragraph3.appendChild(createInput({
        id: "email",
        type: "email",
        placeholder: "",
        value: (debugEnabled === true ? debugEmail : undefined)
    }));

    // Build password field
    var paragraph4 = document.createElement("p");
    paragraph4.appendChild(createLabel({
        for: "password",
        html: "Password"
    }));
    paragraph4.appendChild(createInput({
        id: "password",
        type: "password",
        placeholder: "",
        value: (debugEnabled === true ? debugPassword : undefined)
    }));

    var button = document.createElement("button");
    button.setAttribute("id", "signin");
    button.innerHTML = "Sign in";

    form.appendChild(legend);
    form.appendChild(paragraph1);
    form.appendChild(paragraph2);
    form.appendChild(paragraph3);
    form.appendChild(paragraph4);
    form.appendChild(button);

    document.getElementById("signin-content").appendChild(form);
};

var signOut = function(reason) {
    if (reason !== undefined) {
        alert(reason);
    }

    document.getElementById("signin-content").style.display = "block";
    document.getElementById("example-content").style.display = "none";
};

var showHelp = function() {
    var blanket = document.createElement("div");
    blanket.setAttribute("id", "blanket");
    blanket.setAttribute("class", "blanket");
    blanket.onclick = function() {
        closeModal();
    };
    document.body.appendChild(blanket);

    var modalClose = document.createElement("button");
    modalClose.setAttribute("class", "modalClose");
    modalClose.onclick = function() {
        closeModal();
    };
    modalClose.innerHTML = "OK";

    var modal = document.createElement("div");
    modal.setAttribute("id", "help-modal");
    modal.setAttribute("class", "modal bordered");
    modal.innerHTML = document.getElementById("help-content").innerHTML;

    modal.appendChild(modalClose);
    document.body.appendChild(modal);
};

var closeModal = function() {
    var modal = document.getElementById("help-modal");
    var blanket = document.getElementById("blanket");

    modal.parentNode.removeChild(modal);
    blanket.parentNode.removeChild(blanket);
};

