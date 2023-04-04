


for (var i = 0; i < accounts.length; i++) {
    var accountData = accounts[i].split(":");
    var password = toolkit.rot13(accountData[1]);
    var account = { username: accountData[0], password: password };
    accounts[i] = account;
}

console.log(accounts);

var next = function(description) {
    console.log(description);
};


toolkit.bruteForce(terminal, accounts, function(username, password) {
    console.log(username, password);
    var success = terminal.login(username, password);
    toolkit.spy(terminal, "root", next);
});



//how to fixed a image