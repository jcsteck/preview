/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    class NewMeshComponent extends BABYLON.MeshComponent {
        constructor(owner, scene, tick = true, propertyBag = {}) {
            super(owner, scene, tick, propertyBag);
        }
        ready() {
            // Scene execute when ready
        }
        start() {
            // Start component function
        }
        update() {
            // Update render loop function
        }
        after() {
            // After render loop function
        }
        destroy() {
            // Destroy component function
        }
    }
    PROJECT.NewMeshComponent = NewMeshComponent;
})(PROJECT || (PROJECT = {}));
/* Babylon Shader Controller Template */
var PROJECT;
/* Babylon Shader Controller Template */
(function (PROJECT) {
    class WaterMaterialController extends BABYLON.UniversalShaderMaterial {
        constructor(name, scene, tick = true) {
            super(name, scene, tick);
            this.program = "default";
            // Example runtime property
            this.setFloat("time", 0.0);
        }
        ready() {
            // Scene execute when ready
        }
        start() {
            // Start component function
            this.setFloat("time", 0.0);
        }
        update() {
            // Update render loop function
            this.setFloat("time", this.getManager().time);
        }
        define(locals) {
            // Shader define loop function
            locals.defineBoolean("TIME");
        }
        after() {
            // After render loop function
        }
        destroy() {
            // Destroy component function
        }
        /* Shader Material Factory Class Functions */
        clone(name) {
            var result = BABYLON.SerializationHelper.Clone(() => new PROJECT.WaterMaterialController(name, this.getScene()), this);
            BABYLON.UniversalShaderMaterial.CloneCustomProperties(this, result);
            return result;
        }
        serialize() {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "PROJECT.WaterMaterialController";
            BABYLON.UniversalShaderMaterial.SerializeCustomProperties(this, serializationObject);
            return serializationObject;
        }
        static Parse(source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(() => new PROJECT.WaterMaterialController(source.name, scene), source, scene, rootUrl);
            BABYLON.UniversalShaderMaterial.ParseCustomProperties(material, source, scene, rootUrl);
            return material;
        }
    }
    PROJECT.WaterMaterialController = WaterMaterialController;
})(PROJECT || (PROJECT = {}));
/* Babylon Scene Controller Template */
var PROJECT;
/* Babylon Scene Controller Template */
(function (PROJECT) {
    class SceneController extends BABYLON.MeshComponent {
        constructor(owner, scene, tick = true, propertyBag = {}) {
            super(owner, scene, tick, propertyBag);
        }
        ready() {
            // Scene execute when ready
        }
        start() {
            // Start component function
            let hello = this.getProperty("hello", "Hello World");
            console.log("scene Controller says: " + hello);
        }
        update() {
            // Update render loop function
        }
        after() {
            // After render loop function
        }
        destroy() {
            // Destroy component function
        }
    }
    PROJECT.SceneController = SceneController;
})(PROJECT || (PROJECT = {}));
/* Babylon Camera Component Template */
var PROJECT;
/* Babylon Camera Component Template */
(function (PROJECT) {
    class VRCamera extends BABYLON.CameraComponent {
        constructor(owner, scene, tick = true, propertyBag = {}) {
            super(owner, scene, tick, propertyBag);
        }
        ready() {
            // Scene execute when ready
        }
        start() {
            // Start component function
        }
        update() {
            // Update render loop function
        }
        after() {
            // After render loop function
        }
        destroy() {
            // Destroy component function
        }
    }
    PROJECT.VRCamera = VRCamera;
})(PROJECT || (PROJECT = {}));
