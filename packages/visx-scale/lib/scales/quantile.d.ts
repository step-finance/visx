import { DefaultOutput } from '../types/Base';
import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
export declare const updateQuantileScale: <Output = DefaultOutput, DiscreteInput extends import("../types/Base").StringLike = import("../types/Base").StringLike, ThresholdInput extends string | number | Date = string | number | Date>(scale: import("d3-scale").ScaleQuantile<Output, never>, config?: Pick<Pick<import("../types/BaseScaleConfig").BaseScaleConfig<"quantile", import("../types/ScaleConfig").ContinuousDomain, Output[]>, "reverse" | "type" | "domain" | "range">, "reverse" | "domain" | "range"> | undefined) => import("d3-scale").ScaleQuantile<Output, never>;
export default function createQuantileScale<Output = DefaultOutput>(config?: PickScaleConfigWithoutType<'quantile', Output>): import("d3-scale").ScaleQuantile<Output, never>;
//# sourceMappingURL=quantile.d.ts.map