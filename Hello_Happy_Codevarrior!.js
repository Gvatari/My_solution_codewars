/*
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

class Warrior {
    constructor(n) {
        let name = n;
        this.name = function (n) {
            if (n)
                name = n;
            return name;
        };
    }
    toString() {
        return "Hi! my name's " + this.name();
    }
}

