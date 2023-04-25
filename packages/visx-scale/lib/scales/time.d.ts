import { DefaultOutput } from '../types/Base';
import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
export declare const updateTimeScale: <Output = DefaultOutput, DiscreteInput extends import("../types/Base").StringLike = import("../types/Base").StringLike, ThresholdInput extends string | number | Date = string | number | Date>(scale: import("d3-scale").ScaleTime<Output, Output, never>, config?: Pick<import("../types/ScaleConfig").TimeScaleConfig<Output>, "reverse" | "domain" | "range" | "clamp" | "interpolate" | "nice" | "round"> | undefined) => import("d3-scale").ScaleTime<Output, Output, never>;
export default function createTimeScale<Output = DefaultOutput>(config?: PickScaleConfigWithoutType<'time', Output>): import("d3-scale").ScaleTime<Output, Output, never>;
//# sourceMappingURL=time.d.ts.map