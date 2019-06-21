var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Babylon Scene Controller Template */
var PROJECT;
/* Babylon Scene Controller Template */
(function (PROJECT) {
    var SceneController = /** @class */ (function (_super) {
        __extends(SceneController, _super);
        function SceneController(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        SceneController.prototype.ready = function () {
            // Scene execute when ready
        };
        SceneController.prototype.start = function () {
            // Start component function
            var hello = this.getProperty("hello", "Hello World");
            console.log("scene Controller says: " + hello);
        };
        SceneController.prototype.update = function () {
            // Update render loop function
        };
        SceneController.prototype.after = function () {
            // After render loop function
        };
        SceneController.prototype.destroy = function () {
            // Destroy component function
        };
        return SceneController;
    }(BABYLON.MeshComponent));
    PROJECT.SceneController = SceneController;
})(PROJECT || (PROJECT = {}));
/* Babylon Camera Component Template */
var PROJECT;
/* Babylon Camera Component Template */
(function (PROJECT) {
    var VRCamera = /** @class */ (function (_super) {
        __extends(VRCamera, _super);
        function VRCamera(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        VRCamera.prototype.ready = function () {
            // Scene execute when ready
        };
        VRCamera.prototype.start = function () {
            // Start component function
        };
        VRCamera.prototype.update = function () {
            // Update render loop function
        };
        VRCamera.prototype.after = function () {
            // After render loop function
        };
        VRCamera.prototype.destroy = function () {
            // Destroy component function
        };
        return VRCamera;
    }(BABYLON.CameraComponent));
    PROJECT.VRCamera = VRCamera;
})(PROJECT || (PROJECT = {}));
