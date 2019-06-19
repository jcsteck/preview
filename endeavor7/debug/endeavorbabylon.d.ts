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
    class WaterMaterialController extends BABYLON.UniversalShaderMaterial {
        constructor(name: string, scene: BABYLON.Scene, tick?: boolean);
        protected ready(): void;
        protected start(): void;
        protected update(): void;
        protected define(locals: BABYLON.UniversalShaderDefines): void;
        protected after(): void;
        protected destroy(): void;
        clone(name: string): PROJECT.WaterMaterialController;
        serialize(): any;
        static Parse(source: any, scene: BABYLON.Scene, rootUrl: string): PROJECT.WaterMaterialController;
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
