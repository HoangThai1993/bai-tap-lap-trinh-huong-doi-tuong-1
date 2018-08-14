var Rectangle = function (width,height) {
    this.getArea = function () {
        return width * height;
    }

    //phuong thuc tinh dien tich
    this.display = function () {
        console.log("width :" + width + " height : " + height);
        console.log("area: " + this.getArea());
    }

    this.setWidth = function (width_new) {
        width = width_new;
    }

    this.setHeight = function (height_new) {
        height = height_new;
    }
    this.rectangleDisplay = function () {
        for (var i = 1 ; i <= width ; i++) {
            for ( var j = 1 ; j <= height ; j++) {
                console.log("#");
            }
            console.log('<br>');
        }
    }
}

function main() {
    var rec1 = new Rectangle(3,7);
    rec1.display();
    rec1.rectangleDisplay();
}
main();