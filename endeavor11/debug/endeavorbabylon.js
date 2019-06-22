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
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.cellMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.cellMaterial.ts"/>
(function (BABYLON) {
    var CellMaterialController = /** @class */ (function (_super) {
        __extends(CellMaterialController, _super);
        function CellMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        CellMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.CellMaterialController(name, _this.getScene()); }, this);
        };
        CellMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.CellMaterialController";
            return serializationObject;
        };
        CellMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.CellMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.floats) {
                property = "_ComputeHighLevel";
                if (source.floats[property]) {
                    var compute = source.floats[property];
                    material.computeHighLevel = (compute > 0.0);
                }
            }
            return material;
        };
        return CellMaterialController;
    }(BABYLON.CellMaterial));
    BABYLON.CellMaterialController = CellMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Fire Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.fireMaterial.ts"/>
var BABYLON;
/* Babylon Fire Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.fireMaterial.ts"/>
(function (BABYLON) {
    var FireMaterialController = /** @class */ (function (_super) {
        __extends(FireMaterialController, _super);
        function FireMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        FireMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.FireMaterialController(name, _this.getScene()); }, this);
        };
        FireMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.FireMaterialController";
            return serializationObject;
        };
        FireMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.FireMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.textures) {
                property = "_DistortionTex";
                if (source.textures[property]) {
                    var texture1 = source.textures[property];
                    if (texture1) {
                        material.distortionTexture = BABYLON.Texture.Parse(texture1, scene, rootUrl);
                    }
                }
                property = "_OpacityTex";
                if (source.textures[property]) {
                    var texture2 = source.textures[property];
                    if (texture2) {
                        material.opacityTexture = BABYLON.Texture.Parse(texture2, scene, rootUrl);
                    }
                }
            }
            if (source.floats) {
                property = "_FireSpeed";
                if (source.floats[property]) {
                    material.speed = source.floats[property];
                }
            }
            return material;
        };
        return FireMaterialController;
    }(BABYLON.FireMaterial));
    BABYLON.FireMaterialController = FireMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Fur Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.furMaterial.ts"/>
var BABYLON;
/* Babylon Fur Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.furMaterial.ts"/>
(function (BABYLON) {
    var FurMaterialController = /** @class */ (function (_super) {
        __extends(FurMaterialController, _super);
        function FurMaterialController(name, scene) {
            var _this = _super.call(this, name, scene) || this;
            _this._furifyQuality = 50;
            _this._generatedFurShells = [];
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////// Start Component Life - Cycle Only /////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            _this._started = false;
            _this._register = null;
            _this._before = null;
            _this._after = null;
            _this._destroy = null;
            _this.furTexture = BABYLON.FurMaterial.GenerateTexture("furTexture_" + _this.id, scene);
            _this.initializeInstance();
            return _this;
        }
        FurMaterialController.prototype.start = function () {
            var _this = this;
            var meshes = this.getBindedMeshes();
            if (meshes != null && meshes.length > 0) {
                meshes.forEach(function (mesh) {
                    var shells = BABYLON.FurMaterial.FurifyMesh(mesh, _this._furifyQuality);
                    _this._generatedFurShells.push(shells);
                });
            }
        };
        FurMaterialController.prototype.destroy = function () {
            //for (var i=0; i < shells.length; i++) {
            //    shells[i].material.dispose();
            //    shells[i].dispose();
            //}
        };
        /* Shader Material Factory Class Functions */
        FurMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.FurMaterialController(name, _this.getScene()); }, this);
        };
        FurMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.FurMaterialController";
            return serializationObject;
        };
        FurMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.FurMaterialController(source.name, scene); }, source, scene, rootUrl);
            material.furLength = 4;
            material.furAngle = 0;
            material.furSpacing = 6;
            material.furDensity = 10;
            material.furSpeed = 200;
            material.furGravity = new BABYLON.Vector3(0, -1, 0);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.vectors4) {
                property = "_FurColor";
                if (source.vectors4[property]) {
                    material.furColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
            }
            if (source.floats) {
                property = "_FurifyQuality";
                if (source.floats[property]) {
                    material._furifyQuality = source.floats[property];
                }
            }
            return material;
        };
        FurMaterialController.prototype.initializeInstance = function () {
            this._started = false;
            var me = this;
            me._register = function () { me.registerInstance(me); };
            me._before = function () { me.updateInstance(me); };
            me._destroy = function () { me.destoryInstance(me); };
            me._register();
        };
        FurMaterialController.prototype.registerInstance = function (me) {
            me.getScene().registerBeforeRender(me._before);
        };
        FurMaterialController.prototype.updateInstance = function (me) {
            if (!me._started) {
                me._started = true;
                me.getScene().unregisterBeforeRender(me._before);
                me.start();
            }
        };
        FurMaterialController.prototype.destoryInstance = function (me) {
            me.destroy();
            me._started = false;
            me._register = null;
            me._before = null;
            me._after = null;
            me._destroy = null;
        };
        FurMaterialController.prototype.dispose = function (forceDisposeEffect) {
            this._destroy();
            _super.prototype.dispose.call(this, forceDisposeEffect);
        };
        return FurMaterialController;
    }(BABYLON.FurMaterial));
    BABYLON.FurMaterialController = FurMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.gradientMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.gradientMaterial.ts"/>
(function (BABYLON) {
    var GradientMaterialController = /** @class */ (function (_super) {
        __extends(GradientMaterialController, _super);
        function GradientMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        GradientMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.GradientMaterialController(name, _this.getScene()); }, this);
        };
        GradientMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.GradientMaterialController";
            return serializationObject;
        };
        GradientMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.GradientMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.vectors4) {
                property = "_TopColor";
                if (source.vectors4[property]) {
                    material.topColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
                property = "_BottomColor";
                if (source.vectors4[property]) {
                    material.bottomColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
            }
            if (source.floats) {
                property = "_TopColorAlpha";
                if (source.floats[property]) {
                    material.topColorAlpha = source.floats[property];
                }
                property = "_BottomColorAlpha";
                if (source.floats[property]) {
                    material.bottomColorAlpha = source.floats[property];
                }
                property = "_GradientOffset";
                if (source.floats[property]) {
                    material.offset = source.floats[property];
                }
                property = "_GradientSmoothness";
                if (source.floats[property]) {
                    material.smoothness = source.floats[property];
                }
            }
            return material;
        };
        return GradientMaterialController;
    }(BABYLON.GradientMaterial));
    BABYLON.GradientMaterialController = GradientMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.gridMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.gridMaterial.ts"/>
(function (BABYLON) {
    var GridMaterialController = /** @class */ (function (_super) {
        __extends(GridMaterialController, _super);
        function GridMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        GridMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.GridMaterialController(name, _this.getScene()); }, this);
        };
        GridMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.GridMaterialController";
            return serializationObject;
        };
        GridMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.GridMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.vectors4) {
                property = "_MainColor";
                if (source.vectors4[property]) {
                    material.mainColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
                property = "_LineColor";
                if (source.vectors4[property]) {
                    material.lineColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
            }
            if (source.floats) {
                property = "_GridRatio";
                if (source.floats[property]) {
                    material.gridRatio = source.floats[property];
                }
                property = "_MajorUnitFrequency";
                if (source.floats[property]) {
                    material.majorUnitFrequency = source.floats[property];
                }
                property = "_MinorUnitVisibility";
                if (source.floats[property]) {
                    material.minorUnitVisibility = source.floats[property];
                }
                property = "_GridOpacity";
                if (source.floats[property]) {
                    material.opacity = source.floats[property];
                }
            }
            return material;
        };
        return GridMaterialController;
    }(BABYLON.GridMaterial));
    BABYLON.GridMaterialController = GridMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Lava Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.lavaMaterial.ts"/>
var BABYLON;
/* Babylon Lava Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.lavaMaterial.ts"/>
(function (BABYLON) {
    var LavaMaterialController = /** @class */ (function (_super) {
        __extends(LavaMaterialController, _super);
        function LavaMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        LavaMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.LavaMaterialController(name, _this.getScene()); }, this);
        };
        LavaMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.LavaMaterialController";
            return serializationObject;
        };
        LavaMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.LavaMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.textures) {
                property = "_NoiseTex";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.noiseTexture = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
            }
            if (source.vectors4) {
                property = "_FogColor";
                if (source.vectors4[property]) {
                    material.fogColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
            }
            if (source.floats) {
                property = "_Speed";
                if (source.floats[property]) {
                    material.speed = source.floats[property];
                }
                property = "_MoveSpeed";
                if (source.floats[property]) {
                    material.movingSpeed = source.floats[property];
                }
                property = "_LowFreqSpeed";
                if (source.floats[property]) {
                    material.lowFrequencySpeed = source.floats[property];
                }
                property = "_FogDensity";
                if (source.floats[property]) {
                    material.fogDensity = source.floats[property];
                }
                property = "_FogEnabled";
                if (source.floats[property]) {
                    var fogging = source.floats[property];
                    material.fogEnabled = (fogging > 0.0);
                }
            }
            return material;
        };
        return LavaMaterialController;
    }(BABYLON.LavaMaterial));
    BABYLON.LavaMaterialController = LavaMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.normalMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.normalMaterial.ts"/>
(function (BABYLON) {
    var NormalMaterialController = /** @class */ (function (_super) {
        __extends(NormalMaterialController, _super);
        function NormalMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        NormalMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.NormalMaterialController(name, _this.getScene()); }, this);
        };
        NormalMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.NormalMaterialController";
            return serializationObject;
        };
        NormalMaterialController.Parse = function (source, scene, rootUrl) {
            return BABYLON.SerializationHelper.Parse(function () { return new BABYLON.NormalMaterialController(source.name, scene); }, source, scene, rootUrl);
        };
        return NormalMaterialController;
    }(BABYLON.NormalMaterial));
    BABYLON.NormalMaterialController = NormalMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.shadowOnlyMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.shadowOnlyMaterial.ts"/>
(function (BABYLON) {
    var ShadowOnlyMaterialController = /** @class */ (function (_super) {
        __extends(ShadowOnlyMaterialController, _super);
        function ShadowOnlyMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        ShadowOnlyMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.ShadowOnlyMaterialController(name, _this.getScene()); }, this);
        };
        ShadowOnlyMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.ShadowOnlyMaterialController";
            return serializationObject;
        };
        ShadowOnlyMaterialController.Parse = function (source, scene, rootUrl) {
            return BABYLON.SerializationHelper.Parse(function () { return new BABYLON.ShadowOnlyMaterialController(source.name, scene); }, source, scene, rootUrl);
        };
        return ShadowOnlyMaterialController;
    }(BABYLON.ShadowOnlyMaterial));
    BABYLON.ShadowOnlyMaterialController = ShadowOnlyMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.skyMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.skyMaterial.ts"/>
(function (BABYLON) {
    var SkyMaterialController = /** @class */ (function (_super) {
        __extends(SkyMaterialController, _super);
        function SkyMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        SkyMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.SkyMaterialController(name, _this.getScene()); }, this);
        };
        SkyMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.SkyMaterialController";
            return serializationObject;
        };
        SkyMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.SkyMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.floats) {
                property = "_Luminance";
                if (source.floats[property]) {
                    material.luminance = source.floats[property];
                }
                property = "_Turbidity";
                if (source.floats[property]) {
                    material.turbidity = source.floats[property];
                }
                property = "_Rayleigh";
                if (source.floats[property]) {
                    material.rayleigh = source.floats[property];
                }
                property = "_MieCoefficient";
                if (source.floats[property]) {
                    material.mieCoefficient = source.floats[property];
                }
                property = "_MieDirectionalG";
                if (source.floats[property]) {
                    material.mieDirectionalG = source.floats[property];
                }
                property = "_Distance";
                if (source.floats[property]) {
                    material.distance = source.floats[property];
                }
                property = "_Azimuth";
                if (source.floats[property]) {
                    material.azimuth = source.floats[property];
                }
                property = "_UseSunPosition";
                if (source.floats[property]) {
                    var sun = source.floats[property];
                    material.useSunPosition = (sun > 0.0);
                }
                var sunPosX = 0.0;
                var sunPosY = 100.0;
                var sunPosZ = 0.0;
                property = "_SunPositionX";
                if (source.floats[property]) {
                    sunPosX = source.floats[property];
                }
                property = "_SunPositionY";
                if (source.floats[property]) {
                    sunPosY = source.floats[property];
                }
                property = "_SunPositionZ";
                if (source.floats[property]) {
                    sunPosZ = source.floats[property];
                }
                material.sunPosition = new BABYLON.Vector3(sunPosX, sunPosY, sunPosZ);
            }
            return material;
        };
        return SkyMaterialController;
    }(BABYLON.SkyMaterial));
    BABYLON.SkyMaterialController = SkyMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.terrainMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.terrainMaterial.ts"/>
(function (BABYLON) {
    var TerrainMaterialController = /** @class */ (function (_super) {
        __extends(TerrainMaterialController, _super);
        function TerrainMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        TerrainMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.TerrainMaterialController(name, _this.getScene()); }, this);
        };
        TerrainMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.TerrainMaterialController";
            return serializationObject;
        };
        TerrainMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.TerrainMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.textures) {
                property = "_MixTex";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.mixTexture = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_MainTexX";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.diffuseTexture1 = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_MainTexY";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.diffuseTexture2 = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_MainTexZ";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.diffuseTexture3 = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_BumpMapX";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.bumpTexture1 = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_BumpMapY";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.bumpTexture2 = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_BumpMapZ";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.bumpTexture3 = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
            }
            return material;
        };
        return TerrainMaterialController;
    }(BABYLON.TerrainMaterial));
    BABYLON.TerrainMaterialController = TerrainMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.triPlanarMaterial.ts"/>
var BABYLON;
/* Babylon Shader Controller Template */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.triPlanarMaterial.ts"/>
(function (BABYLON) {
    var TriPlanarMaterialController = /** @class */ (function (_super) {
        __extends(TriPlanarMaterialController, _super);
        function TriPlanarMaterialController(name, scene) {
            return _super.call(this, name, scene) || this;
        }
        /* Shader Material Factory Class Functions */
        TriPlanarMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.TriPlanarMaterialController(name, _this.getScene()); }, this);
        };
        TriPlanarMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.TriPlanarMaterialController";
            return serializationObject;
        };
        TriPlanarMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.TriPlanarMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.textures) {
                property = "_MixTex";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.mixTexture = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_MainTexX";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.diffuseTextureX = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_MainTexY";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.diffuseTextureY = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_MainTexZ";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.diffuseTextureZ = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_BumpMapX";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.normalTextureY = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_BumpMapY";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.normalTextureY = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
                property = "_BumpMapZ";
                if (source.textures[property]) {
                    var texture = source.textures[property];
                    if (texture) {
                        material.normalTextureZ = BABYLON.Texture.Parse(texture, scene, rootUrl);
                    }
                }
            }
            if (source.floats) {
                property = "_TileSize";
                if (source.floats[property]) {
                    material.tileSize = source.floats[property];
                }
            }
            return material;
        };
        return TriPlanarMaterialController;
    }(BABYLON.TriPlanarMaterial));
    BABYLON.TriPlanarMaterialController = TriPlanarMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Light Component Template */
var PROJECT;
/* Babylon Light Component Template */
(function (PROJECT) {
    var NewLightComponent = /** @class */ (function (_super) {
        __extends(NewLightComponent, _super);
        function NewLightComponent(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        NewLightComponent.prototype.ready = function () {
            // Scene execute when ready
        };
        NewLightComponent.prototype.start = function () {
            // Start component function
        };
        NewLightComponent.prototype.update = function () {
            // Update render loop function
        };
        NewLightComponent.prototype.after = function () {
            // After render loop function
        };
        NewLightComponent.prototype.destroy = function () {
            // Destroy component function
        };
        return NewLightComponent;
    }(BABYLON.LightComponent));
    PROJECT.NewLightComponent = NewLightComponent;
})(PROJECT || (PROJECT = {}));
/* Babylon Water Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.waterMaterial.ts"/>
var BABYLON;
/* Babylon Water Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.waterMaterial.ts"/>
(function (BABYLON) {
    var WaterMaterialController = /** @class */ (function (_super) {
        __extends(WaterMaterialController, _super);
        function WaterMaterialController(name, scene, renderTargetSize) {
            if (renderTargetSize === void 0) { renderTargetSize = new BABYLON.Vector2(512, 512); }
            var _this = _super.call(this, name, scene, renderTargetSize) || this;
            _this.renderTargetSize = renderTargetSize;
            /* Shader Material Water Tag Functions */
            _this._waterTagLabel = "WATER_TAG_0";
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////// Start Component Life - Cycle Only /////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            _this._started = false;
            _this._register = null;
            _this._before = null;
            _this._after = null;
            _this._destroy = null;
            _this.initializeInstance();
            return _this;
        }
        WaterMaterialController.prototype.start = function () {
            var _this = this;
            var meshes = this.getScene().getMeshesByTags(this.getWaterTagLabel());
            if (meshes != null && meshes.length > 0) {
                meshes.forEach(function (mesh) {
                    _this.addToRenderList(mesh);
                });
            }
        };
        WaterMaterialController.prototype.getWaterTagLabel = function () {
            return this._waterTagLabel;
        };
        WaterMaterialController.prototype.setWaterTagIndex = function (index) {
            var tagIndex = (index >= 0) ? index : 0;
            this._waterTagLabel = "WATER_TAG_" + tagIndex.toString();
        };
        /* Shader Material Factory Class Functions */
        WaterMaterialController.prototype.clone = function (name) {
            var _this = this;
            return BABYLON.SerializationHelper.Clone(function () { return new BABYLON.WaterMaterialController(name, _this.getScene()); }, this);
        };
        WaterMaterialController.prototype.serialize = function () {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.WaterMaterialController";
            return serializationObject;
        };
        WaterMaterialController.Parse = function (source, scene, rootUrl) {
            var material = BABYLON.SerializationHelper.Parse(function () { return new BABYLON.WaterMaterialController(source.name, scene); }, source, scene, rootUrl);
            var property = "_Properties";
            // Parse custom shader properties
            if (source.vectors4) {
                property = "_WaterColor";
                if (source.vectors4[property]) {
                    material.waterColor = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
                property = "_SecondColor";
                if (source.vectors4[property]) {
                    material.waterColor2 = BABYLON.Color3.FromArray(source.vectors4[property]);
                }
            }
            if (source.floats) {
                var tagIndex = 0;
                property = "_TagIndex";
                if (source.floats[property]) {
                    tagIndex = source.floats[property];
                }
                if (tagIndex <= 0)
                    tagIndex = 0;
                material.setWaterTagIndex(tagIndex);
                property = "_WindForce";
                if (source.floats[property]) {
                    material.windForce = source.floats[property];
                }
                property = "_WaveSpeed";
                if (source.floats[property]) {
                    material.waveSpeed = source.floats[property];
                }
                property = "_WaveLength";
                if (source.floats[property]) {
                    material.waveLength = source.floats[property];
                }
                property = "_WaveHeight";
                if (source.floats[property]) {
                    material.waveHeight = source.floats[property];
                }
                property = "_BumpHeight";
                if (source.floats[property]) {
                    material.bumpHeight = source.floats[property];
                }
                property = "_ColorBlendFactor";
                if (source.floats[property]) {
                    material.colorBlendFactor = source.floats[property];
                }
                property = "_SecondBlendFactor";
                if (source.floats[property]) {
                    material.colorBlendFactor2 = source.floats[property];
                }
                var windDirX = 0.0;
                var windDirY = 1.0;
                property = "_WindDirectionX";
                if (source.floats[property]) {
                    windDirX = source.floats[property];
                }
                property = "_WindDirectionY";
                if (source.floats[property]) {
                    windDirY = source.floats[property];
                }
                material.windDirection = new BABYLON.Vector2(windDirX, windDirY);
            }
            return material;
        };
        WaterMaterialController.prototype.initializeInstance = function () {
            this._started = false;
            var me = this;
            me._register = function () { me.registerInstance(me); };
            me._before = function () { me.updateInstance(me); };
            me._destroy = function () { me.destoryInstance(me); };
            me._register();
        };
        WaterMaterialController.prototype.registerInstance = function (me) {
            me.getScene().registerBeforeRender(me._before);
        };
        WaterMaterialController.prototype.updateInstance = function (me) {
            if (!me._started) {
                me._started = true;
                me.getScene().unregisterBeforeRender(me._before);
                me.start();
            }
        };
        WaterMaterialController.prototype.destoryInstance = function (me) {
            me._started = false;
            me._register = null;
            me._before = null;
            me._after = null;
            me._destroy = null;
        };
        WaterMaterialController.prototype.dispose = function (forceDisposeEffect) {
            this._destroy();
            _super.prototype.dispose.call(this, forceDisposeEffect);
        };
        return WaterMaterialController;
    }(BABYLON.WaterMaterial));
    BABYLON.WaterMaterialController = WaterMaterialController;
})(BABYLON || (BABYLON = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var water = /** @class */ (function (_super) {
        __extends(water, _super);
        function water(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        water.prototype.ready = function () {
            // Scene execute when ready
        };
        water.prototype.start = function () {
            // Start component function
        };
        water.prototype.update = function () {
            // Update render loop function
        };
        water.prototype.after = function () {
            // After render loop function
        };
        water.prototype.destroy = function () {
            // Destroy component function
        };
        return water;
    }(BABYLON.MeshComponent));
    PROJECT.water = water;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var NewMeshComponent = /** @class */ (function (_super) {
        __extends(NewMeshComponent, _super);
        function NewMeshComponent(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        NewMeshComponent.prototype.ready = function () {
            // Scene execute when ready
        };
        NewMeshComponent.prototype.start = function () {
            // Start component function
        };
        NewMeshComponent.prototype.update = function () {
            // Update render loop function
        };
        NewMeshComponent.prototype.after = function () {
            // After render loop function
        };
        NewMeshComponent.prototype.destroy = function () {
            // Destroy component function
        };
        return NewMeshComponent;
    }(BABYLON.MeshComponent));
    PROJECT.NewMeshComponent = NewMeshComponent;
})(PROJECT || (PROJECT = {}));
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
