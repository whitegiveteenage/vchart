import { ChartTypeEnum } from '../interface/type';
import { SeriesTypeEnum } from '../../series/interface/type';
import type { IMosaicChartSpec } from './interface';
import { Factory } from '../../core/factory';
import { MosaicChartSpecTransformer } from './mosaic-transformer';
import { BaseChart } from '../base';
import { registerMosaicSeries } from '../../series/mosaic/mosaic';
import { Stack } from '../stack';
import type { IRegion } from '../../region';
import type { IStackCacheNode, IStackCacheRoot } from '../../util/data';
import { stackMosaic, stackMosaicTotal } from '../../util/data';

export class MosaicChart<T extends IMosaicChartSpec = IMosaicChartSpec> extends BaseChart<T> {
  static readonly type: string = ChartTypeEnum.mosaic;
  static readonly seriesType: string = SeriesTypeEnum.mosaic;
  static readonly transformerConstructor = MosaicChartSpecTransformer;
  readonly transformerConstructor = MosaicChartSpecTransformer;
  readonly type: string = ChartTypeEnum.mosaic;
  readonly seriesType: string = SeriesTypeEnum.mosaic;
  protected _canStack: boolean = true;

  afterCompile() {
    super.afterCompile();
  }

  protected _initStack() {
    this._stack = new Stack(this, {
      afterStackRegion: this.handleAfterStackRegion
    });
    this._stack.init();
  }

  handleAfterStackRegion = (region: IRegion, stackValueGroup: { [key: string]: IStackCacheRoot }) => {
    region.getSeries().forEach(s => {
      const stackData = s.getStackData();
      const stackValue = s.getStackValue();
      const stackValueField = s.getStackValueField(); // yField

      if (stackData && stackValueField) {
        stackMosaicTotal(stackValueGroup[stackValue] as IStackCacheNode, stackValueField);
        stackMosaic(s, stackValueGroup[stackValue] as IStackCacheNode);
      }
    });
  };
}

export const registerMosaicChart = () => {
  registerMosaicSeries();
  Factory.registerChart(MosaicChart.type, MosaicChart);
};
