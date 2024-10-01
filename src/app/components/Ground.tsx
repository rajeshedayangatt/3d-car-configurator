import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export function Ground() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "texture/Concrete_Blocks_012_basecolor.jpg",
      "texture/Concrete_Blocks_012_height.png",
      "texture/Concrete_Blocks_012_normal.jpg",
      "texture/Concrete_Blocks_012_roughness.jpg",
      "texture/Concrete_Blocks_012_ambientOcclusion.jpg",
    ]
  );

  return (
    <mesh
      position={[0, 0.4, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[1, 1, 1]}
      receiveShadow={true}
    >
      <planeGeometry args={[50, 50, 100, 1]} />
      <meshStandardMaterial
        side={2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}
