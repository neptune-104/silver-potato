var me = {
    firstName: "Nathan",
    lastName: "Pierce",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementsByTagName("html")[0].innerHTML = "Hello. My name is " + me.fullName() + ".";