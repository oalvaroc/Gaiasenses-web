import Composition from "../composition";
import ChaosTreeSketch from "./chaos-tree-sketch";
import CompositionControls from "../composition-controls";

export type ChaosTreeProps = {
  lat: string;
  lon: string;
  play: boolean;
  debug?: boolean;
  today?: boolean;
};

export default async function ChaosTree(props: ChaosTreeProps) {
  const lat = Number(props.lat);
  const lon = Number(props.lon);

  return (
    <Composition>
      <ChaosTreeSketch
        lat={lat}
        lon={lon}
        play={props.play} />
      <CompositionControls play={props.play} />
    </Composition>
  );
}
