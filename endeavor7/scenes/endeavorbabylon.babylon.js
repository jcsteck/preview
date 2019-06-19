window.project = true;

// Project Shader Store


// Browser Window Services

//////////////////////////////////////////////
// Babylon Toolkit - Browser Window Services
//////////////////////////////////////////////

/** Firelight Audio Shims */
window.firelightAudio = 0;
window.firelightDebug = false;
if (window.firelightAudio === 1 || window.firelightAudio === 2) {
	var fmodjs = "scripts/fmodstudio.js";
	if (window.firelightDebug === true) {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudioL.js" : "fmodL.js");
	} else {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudio.js" : "fmod.js");
	}
	var script2 = document.createElement('script');
	script2.setAttribute("type","text/javascript");
	script2.setAttribute("src", fmodjs);
	if (document.head != null) {
		document.head.appendChild(script2);
	} else if (document.body != null) {
		document.body.appendChild(script2);
	}
}

/** Windows Launch Mode */
window.preferredLaunchMode = 0;
if (typeof Windows !== "undefined" && typeof Windows.UI !== "undefined" && typeof Windows.UI.ViewManagement !== "undefined" &&typeof Windows.UI.ViewManagement.ApplicationView !== "undefined") {
	Windows.UI.ViewManagement.ApplicationView.preferredLaunchWindowingMode = (window.preferredLaunchMode === 1) ? Windows.UI.ViewManagement.ApplicationViewWindowingMode.fullScreen : Windows.UI.ViewManagement.ApplicationViewWindowingMode.auto;
}

/** Xbox Full Screen Shims */
document.querySelector('style').textContent += "@media (max-height: 1080px) { @-ms-viewport { height: 1080px; } }";

/** Xbox Live Plugin Shims */
window.xboxLiveServices = false;
window.isXboxLivePluginEnabled = function() {
	var isXboxLive = (typeof Windows !== "undefined" && typeof Microsoft !== "undefined" && typeof Microsoft.Xbox !== "undefined" && typeof Microsoft.Xbox.Services !== "undefined");
	var hasToolkit = (typeof BabylonToolkit !== "undefined" && typeof BabylonToolkit.XboxLive !== "undefined" && typeof BabylonToolkit.XboxLive.Plugin !== "undefined");
	return (window.xboxLiveServices === true && isXboxLive === true && hasToolkit === true);
}

/** Generic Promise Shims */
window.createGenericPromise = function(resolveRejectHandler) {
	return new Promise(resolveRejectHandler);
}
window.resolveGenericPromise = function(resolveObject) {
    return Promise.resolve(resolveObject);
}


// NewScript.js
/* Babylon Javascript Template */


// endeavorbabylon.ts
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


