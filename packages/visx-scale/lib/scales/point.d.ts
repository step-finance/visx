import { DefaultOutput, StringLike } from '../types/Base';
import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
export declare const updatePointScale: <Output = DefaultOutput, DiscreteInput extends StringLike = StringLike, ThresholdInput extends string | number | Date = string | number | Date>(scale: import("d3-scale").ScalePoint<DiscreteInput>, config?: Pick<Pick<import("../types/BaseScaleConfig").BaseScaleConfig<"point", DiscreteInput[], [number | import("../types/Base").NumberLike, number | import("../types/Base").NumberLike]>, "reverse" | "type" | "domain" | "range" | "align" | "padding" | "round">, "reverse" | "domain" | "range" | "align" | "padding" | "round"> | undefined) => import("d3-scale").ScalePoint<DiscreteInput>;
export default function createPointScale<DiscreteInput extends StringLike = StringLike>(config?: PickScaleConfigWithoutType<'point', DefaultOutput, DiscreteInput>): import("d3-scale").ScalePoint<DiscreteInput>;
//# sourceMappingURL=point.d.ts.map