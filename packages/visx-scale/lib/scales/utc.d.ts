import { DefaultOutput } from '../types/Base';
import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
export declare const updateUtcScale: <Output = DefaultOutput, DiscreteInput extends import("../types/Base").StringLike = import("../types/Base").StringLike, ThresholdInput extends string | number | Date = string | number | Date>(scale: import("d3-scale").ScaleTime<Output, Output, never>, config?: Pick<import("../types/ScaleConfig").UtcScaleConfig<Output>, "reverse" | "domain" | "range" | "clamp" | "interpolate" | "nice" | "round"> | undefined) => import("d3-scale").ScaleTime<Output, Output, never>;
export default function createUtcScale<Output = DefaultOutput>(config?: PickScaleConfigWithoutType<'utc', Output>): import("d3-scale").ScaleTime<Output, Output, never>;
//# sourceMappingURL=utc.d.ts.map