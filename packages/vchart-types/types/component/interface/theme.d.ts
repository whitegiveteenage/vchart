import type { IAxisCommonTheme, ICartesianAxisCommonTheme, IPolarAxisCommonTheme } from '../axis';
import type { IBrushTheme } from '../brush';
import type { ICrosshairTheme } from '../crosshair/interface';
import type { IDataZoomTheme, IScrollBarTheme } from '../data-zoom';
import type { IIndicatorTheme } from '../indicator/interface';
import type { IDiscreteLegendTheme, IColorLegendTheme, ISizeLegendTheme } from '../legend';
import type { IMapLabelTheme } from '../map-label';
import type { IMarkAreaTheme } from '../marker/mark-area/interface';
import type { IMarkLineTheme } from '../marker/mark-line/interface';
import type { IMarkPointTheme } from '../marker/mark-point/interface';
import type { IPlayerTheme } from '../player';
import type { ITitleTheme } from '../title';
import type { ITooltipTheme } from '../tooltip/interface';
import type { ComponentTypeEnum } from './type';
import type { ITotalLabelTheme } from '../label';
import type { IPoptipTheme } from '../poptip/interface';
export interface IComponentTheme {
    axis?: IAxisCommonTheme;
    axisBand?: IAxisCommonTheme;
    axisLinear?: IAxisCommonTheme;
    axisX?: ICartesianAxisCommonTheme;
    axisY?: ICartesianAxisCommonTheme;
    axisRadius?: IPolarAxisCommonTheme;
    axisAngle?: IPolarAxisCommonTheme;
    [ComponentTypeEnum.discreteLegend]?: IDiscreteLegendTheme;
    [ComponentTypeEnum.colorLegend]?: IColorLegendTheme;
    [ComponentTypeEnum.sizeLegend]?: ISizeLegendTheme;
    [ComponentTypeEnum.markLine]?: IMarkLineTheme;
    [ComponentTypeEnum.markArea]?: IMarkAreaTheme;
    [ComponentTypeEnum.markPoint]?: IMarkPointTheme;
    [ComponentTypeEnum.tooltip]?: ITooltipTheme;
    [ComponentTypeEnum.crosshair]?: ICrosshairTheme;
    [ComponentTypeEnum.dataZoom]?: IDataZoomTheme;
    [ComponentTypeEnum.scrollBar]?: IScrollBarTheme;
    [ComponentTypeEnum.indicator]?: IIndicatorTheme;
    [ComponentTypeEnum.player]?: IPlayerTheme;
    [ComponentTypeEnum.brush]?: IBrushTheme;
    [ComponentTypeEnum.title]?: ITitleTheme;
    [ComponentTypeEnum.mapLabel]?: IMapLabelTheme;
    [ComponentTypeEnum.poptip]?: IPoptipTheme;
    [ComponentTypeEnum.totalLabel]?: ITotalLabelTheme;
}
