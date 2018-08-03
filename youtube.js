var youtube = /** @class */ (function () {
    function youtube(v_title, v_hostname, v_dateofupload, v_view, v_likes, v_dislikes) {
        var _this = this;
        this.getNoOfview = function () {
            return _this.views;
        };
        this.setNoOfview = function (updateview) {
            return _this.views = updateview;
        };
        this.title = v_title,
            this.hostname = v_hostname,
            this.dateofupload = v_dateofupload,
            this.views = v_view,
            this.likes = v_likes,
            this.dislikes = v_dislikes;
    }
    return youtube;
}());
var hViews = new youtube("Angular", "shalini", 03 - 08 - 2018, 10000, 8000, 90);
var youTubeViews = hViews.getNoOfview();
console.log(("Angular has" + " " + youTubeViews + " " + "Views"));
console.log(hViews);
var videoViews = hViews.setNoOfview(90000);
console.log("updated views" + " " + videoViews + " " + "views");
