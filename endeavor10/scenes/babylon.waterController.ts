/* Babylon Water Material Controller */
/* <reference path="{*path*}/Assets/Babylon/Library/babylon.d.ts" /> */
//// <reference path="babylon.waterMaterial.ts"/>

module BABYLON {
    export class WaterMaterialController extends BABYLON.WaterMaterial {
        constructor(name: string, scene: Scene, public renderTargetSize: Vector2 = new Vector2(512, 512)) {
            super(name, scene, renderTargetSize);
            this.initializeInstance();
        }

        protected start() :void {
            var meshes:BABYLON.Mesh[] = this.getScene().getMeshesByTags(this.getWaterTagLabel());
            if (meshes != null && meshes.length > 0) {
                meshes.forEach(mesh => {
                    this.addToRenderList(mesh);
                });
            }
        }

        /* Shader Material Water Tag Functions */

        private _waterTagLabel:string = "WATER_TAG_0";
        protected getWaterTagLabel():string {
            return this._waterTagLabel;
        }
        protected setWaterTagIndex(index:number) : void {
            var tagIndex = (index >= 0) ? index : 0;
            this._waterTagLabel = "WATER_TAG_" + tagIndex.toString();
        }

        /* Shader Material Factory Class Functions */
        
        public clone(name: string): BABYLON.WaterMaterialController {
            return BABYLON.SerializationHelper.Clone(() => new BABYLON.WaterMaterialController(name, this.getScene()), this);
        }

        public serialize(): any {
            var serializationObject = BABYLON.SerializationHelper.Serialize(this);
            serializationObject.customType = "BABYLON.WaterMaterialController";
            return serializationObject;
        }

        public static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.WaterMaterialController {
            var material =  BABYLON.SerializationHelper.Parse(() => new BABYLON.WaterMaterialController(source.name, scene), source, scene, rootUrl);
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
                var tagIndex:number = 0;
                property = "_TagIndex";
                if (source.floats[property]) {
                    tagIndex = source.floats[property];
                }
                if (tagIndex <= 0) tagIndex = 0;
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

                var windDirX:number = 0.0;
                var windDirY:number = 1.0;
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
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////// Start Component Life - Cycle Only /////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private _started: boolean = false;
        private _register: () => void = null;
        private _before: () => void = null;
        private _after: () => void = null;
        private _destroy: () => void = null;
        
        private initializeInstance() : void {
            this._started = false;
            var me: BABYLON.WaterMaterialController = this;
            me._register = function () { me.registerInstance(me); };
            me._before = function () { me.updateInstance(me); };
            me._destroy = function () { me.destoryInstance(me); };
            me._register();
        }

        private registerInstance(me: BABYLON.WaterMaterialController): void {
            me.getScene().registerBeforeRender(me._before);
        }

        private updateInstance(me: BABYLON.WaterMaterialController): void {
            if (!me._started) {
                me._started = true;
                me.getScene().unregisterBeforeRender(me._before);
                me.start();
            }
        }
        
        private destoryInstance(me: BABYLON.WaterMaterialController) {
            me._started = false;
            me._register = null;
            me._before = null;
            me._after = null;
            me._destroy = null;
        }

        public dispose(forceDisposeEffect?: boolean) : void {
            this._destroy();
            super.dispose(forceDisposeEffect);
        }
    }
}