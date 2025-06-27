export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />

      <spotLight position={[-7, 4.5, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      <spotLight position={[7, 4.5, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      <spotLight position={[0, 4.5, -15]} angle={0.4} penumbra={0.8} intensity={1.2} castShadow />
    </>
  );
}
