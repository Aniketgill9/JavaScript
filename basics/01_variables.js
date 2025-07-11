const accountId = 1233
let accountEmail = "aniket@gmail.com"
var accountPasswolrd = "1234"
accoutCity = "kolkata"

// accountId = 45  not allowed, const cannot be reassigned
accountEmail= "manan"
accountPasswolrd = "76894"
accoutCity = "delhi"

// console.log(accountId);

// prefer not to use var, use let or const instead   ,  because of issue in block scpe and functonal scope
console.log(accountId, accountEmail, accountPasswolrd, accoutCity);
console.table([accountId, accountEmail, accountPasswolrd, accoutCity]);