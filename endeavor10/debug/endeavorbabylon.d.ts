declare module BABYLON {
    class CellMaterialController extends BABYLON.CellMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.CellMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.CellMaterialController;
    }
}
declare module BABYLON {
    class FireMaterialController extends BABYLON.FireMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.FireMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.FireMaterialController;
    }
}
declare module BABYLON {
    class FurMaterialController extends BABYLON.FurMaterial {
        private _furifyQuality;
        private _generatedFurShells;
        constructor(name: string, scene: BABYLON.Scene);
        protected start(): void;
        protected destroy(): void;
        clone(name: string): BABYLON.FurMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.FurMaterialController;
        private _started;
        private _register;
        private _before;
        private _after;
        private _destroy;
        private initializeInstance;
        private registerInstance;
        private updateInstance;
        private destoryInstance;
        dispose(forceDisposeEffect?: boolean): void;
    }
}
declare module BABYLON {
    class GradientMaterialController extends BABYLON.GradientMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.GradientMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.GradientMaterialController;
    }
}
declare module BABYLON {
    class GridMaterialController extends BABYLON.GridMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.GridMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.GridMaterialController;
    }
}
declare module BABYLON {
    class LavaMaterialController extends BABYLON.LavaMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.LavaMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.LavaMaterialController;
    }
}
declare module BABYLON {
    class NormalMaterialController extends BABYLON.NormalMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.NormalMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.NormalMaterialController;
    }
}
declare module BABYLON {
    class ShadowOnlyMaterialController extends BABYLON.ShadowOnlyMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.ShadowOnlyMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.ShadowOnlyMaterialController;
    }
}
declare module BABYLON {
    class SkyMaterialController extends BABYLON.SkyMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.SkyMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.SkyMaterialController;
    }
}
declare module BABYLON {
    class TerrainMaterialController extends BABYLON.TerrainMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.TerrainMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.TerrainMaterialController;
    }
}
declare module BABYLON {
    class TriPlanarMaterialController extends BABYLON.TriPlanarMaterial {
        constructor(name: string, scene: BABYLON.Scene);
        clone(name: string): BABYLON.TriPlanarMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.TriPlanarMaterialController;
    }
}
declare module PROJECT {
    class NewLightComponent extends BABYLON.LightComponent {
        constructor(owner: BABYLON.Light, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
declare module BABYLON {
    class WaterMaterialController extends BABYLON.WaterMaterial {
        renderTargetSize: Vector2;
        constructor(name: string, scene: Scene, renderTargetSize?: Vector2);
        protected start(): void;
        private _waterTagLabel;
        protected getWaterTagLabel(): string;
        protected setWaterTagIndex(index: number): void;
        clone(name: string): BABYLON.WaterMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): BABYLON.WaterMaterialController;
        private _started;
        private _register;
        private _before;
        private _after;
        private _destroy;
        private initializeInstance;
        private registerInstance;
        private updateInstance;
        private destoryInstance;
        dispose(forceDisposeEffect?: boolean): void;
    }
}
declare module PROJECT {
    class water extends BABYLON.MeshComponent {
        constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    class NewMeshComponent extends BABYLON.MeshComponent {
        constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    class SceneController extends BABYLON.MeshComponent {
        constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    class VRCamera extends BABYLON.CameraComponent {
        constructor(owner: BABYLON.Camera, scene: BABYLON.Scene, tick?: boolean, propertyBag?: any);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
