    var Temperature = function (cDegree) {
        this.getKevin = function () {
            if (cDegree < -273) {
                return console.log("nhiet do qua thap, hay nhap lai: ");
            } else {
                return cDegree + 273;
            }
        }
        this.getFahrenheit = function () {
            if (cDegree < -273) {
                return console.log("nhiet do qua thap, hay nhap lai: ");
            } else {
                return (cDegree * 1.8) + 32;
            }
        }
        this.display = function () {
            console.log("do K la: " + this.getKevin());
            console.log("do F la: " + this.getFahrenheit());
        }
    }

    function main() {
        var Temperature1 = new Temperature(-275);
        Temperature1.display();
    }
    main();