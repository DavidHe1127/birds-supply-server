// save it into ~/.mongorc.js
// prettify output find().unpretty() to unformat output
DBQuery.prototype._prettyShell = true
DBQuery.prototype.unpretty = function () {
        this._prettyShell = false;
        return this;
}
