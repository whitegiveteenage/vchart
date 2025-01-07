import { type IBoundsLike, type Maybe } from '@visactor/vutils';
import type { IEffect, IModelInitOption, IModelSpecInfo } from '../../../model/interface';
import type { ICartesianSeries } from '../../../series/interface';
import type { IRegion } from '../../../region/interface';
import type { ICartesianAxisCommonSpec, IAxisHelper } from './interface';
import type { IOrientType, IRect } from '../../../typings/space';
import type { IBaseScale } from '@visactor/vscale';
import type { StringOrNumber } from '../../../typings/common';
import type { IPoint } from '../../../typings/coordinate';
import type { ILayoutRect, ILayoutType } from '../../../typings/layout';
import type { IComponentOption } from '../../interface';
import { ComponentTypeEnum } from '../../interface/type';
import type { IAxis, ITick } from '../interface';
import type { ICartesianTickDataOpt } from '@visactor/vrender-components';
import type { DataSet } from '@visactor/vdataset';
import { AxisComponent } from '../base-axis';
import type { IGraphic } from '@visactor/vrender-core';
export declare abstract class CartesianAxis<T extends ICartesianAxisCommonSpec = ICartesianAxisCommonSpec> extends AxisComponent<T> implements IAxis {
    static type: ComponentTypeEnum;
    type: ComponentTypeEnum;
    name: string;
    static specKey: string;
    protected readonly _defaultBandPosition = 0.5;
    protected readonly _defaultBandInnerPadding = 0.1;
    protected readonly _defaultBandOuterPadding = 0.3;
    directionStr?: 'l2r' | 'r2l' | 't2b' | 'b2t';
    layoutType: ILayoutType;
    layoutZIndex: number;
    layoutLevel: number;
    protected _dataSet: DataSet;
    layout3dBox?: {
        width: number;
        height: number;
        length: number;
    };
    protected _orient: IOrientType;
    getOrient(): IOrientType;
    protected getDefaultInteractive(): boolean;
    protected _autoIndentOnce: boolean;
    protected _hasAutoIndent: boolean;
    set autoIndentOnce(v: boolean);
    protected _scales: IBaseScale[];
    getScales(): IBaseScale[];
    protected _tick: ITick | undefined;
    private _axisStyle;
    private _latestBounds;
    private _verticalLimitSize;
    private _unitText;
    protected _layoutCache: {
        width: number;
        height: number;
        _lastComputeOutBounds: IBoundsLike;
    };
    protected _innerOffset: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    constructor(spec: T, options: IComponentOption);
    static getSpecInfo(chartSpec: any): Maybe<IModelSpecInfo[]>;
    static createComponent(specInfo: IModelSpecInfo, options: IComponentOption): IAxis;
    initLayout(): void;
    setLayout3dBox(box3d: {
        width: number;
        height: number;
        length: number;
    }): void;
    effect: IEffect;
    protected abstract computeDomain(data: {
        min: number;
        max: number;
        values: any[];
    }[]): StringOrNumber[];
    abstract valueToPosition(value: any): number;
    protected getNewScaleRange(): number[];
    protected updateScaleRange(): boolean;
    init(option: IModelInitOption): void;
    setAttrFromSpec(): void;
    onLayoutStart(layoutRect: IRect, viewRect: ILayoutRect, ctx: any): void;
    protected getSeriesStatisticsField(s: ICartesianSeries): string[];
    protected _tickTransformOption(): ICartesianTickDataOpt;
    protected axisHelper(): IAxisHelper;
    afterCompile(): void;
    onRender(ctx: any): void;
    changeRegions(regions: IRegion[]): void;
    update(ctx: IComponentOption): void;
    resize(ctx: IComponentOption): void;
    protected collectScale(): IBaseScale[];
    protected collectSeriesField(depth: number, series: ICartesianSeries): string | string[];
    protected updateSeriesScale(): void;
    _transformLayoutPosition: (pos: Partial<IPoint>) => {
        x: number;
        y: number;
    };
    _transformLayoutRect: (result: ILayoutRect) => ILayoutRect;
    getBoundsInRect(rect: ILayoutRect): IBoundsLike;
    positionToData(pos: number, isViewPos?: boolean): any;
    private _getTitleLimit;
    protected _getUpdateAttribute(ignoreGrid: boolean): any;
    protected getLabelItems(length: number): any[];
    protected initEvent(): void;
    protected _updateAxisLayout: () => void;
    protected _getNormalizedValue(values: any[], length: number): number;
    private _fixAxisOnZero;
    protected _layoutCacheProcessing(rect: ILayoutRect): ILayoutRect;
    _clearLayoutCache(): void;
    onDataUpdate(): void;
    private _appendAxisUnit;
    protected _getNeedClearVRenderComponents(): IGraphic[];
    private _getLabelOverflowLimit;
}
