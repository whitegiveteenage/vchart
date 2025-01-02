import { Datum } from '@visactor/vchart/src/typings/common';
import {
  ITextGraphicAttribute,
  ISymbolGraphicAttribute,
  IRectGraphicAttribute,
  EasingType
} from '@visactor/vrender-core';

type IRankingListData = Datum[];

export interface IRankingListSpec {
  /**
   * 图表类型
   */
  type: 'rankingList';
  /**
   * 数据
   */
  data: IRankingListData;
  /**
   * x轴字段
   */
  xField: string;
  /**
   * y轴字段
   */
  yField: string;
  width?: number;
  height?: number;
  /**
   * 标签布局
   * @default 'top'
   */
  labelLayout?: 'top' | 'bothEnd';
  /**
   * 柱样式
   */
  bar?: {
    height?: number;
    style?: IRectGraphicAttribute;
  };
  /**
   * 柱图背景
   */
  barBackground?: {
    visible?: boolean;
    type?: string;
    style?: ISymbolGraphicAttribute | IRectGraphicAttribute;
  };
  /**
   * 排名图标
   */
  rankingIcon?: {
    visible?: boolean;
    style?: ISymbolGraphicAttribute;
  };
  /**
   * 装饰图元
   */
  decorateHaloIcons?: [
    {
      visible?: boolean;
      // type?: 'circle' | 'square' | 'emptyCircle' | 'diamond' | 'halo' | 'concentric' | 'custom';
      style?: ISymbolGraphicAttribute;
    }
  ];
  /**
   * 排名序号
   */
  orderLabel?: {
    visible?: boolean;
    style?: ITextGraphicAttribute;
    formatMethod?: (text: string, ctx: any) => string;
  };
  /**
   * 名称标签(yField对应的标签)
   */
  nameLabel?: {
    visible?: boolean;
    style?: ITextGraphicAttribute;
    formatMethod?: (text: string, ctx: any) => string;
  };
  /**
   * 值标签(xField对应的标签)
   */
  valueLabel?: {
    visible?: boolean;
    style?: ITextGraphicAttribute;
    formatMethod?: (text: string, ctx: any) => string;
  };
  /**
   * 每页行数
   */
  pageSize?: number;
  /**
   * 滚动行数
   */
  scrollSize?: number;
  /**
   * 动画
   */
  animation?: {
    /**
     * 动画类型
     * @default 'both'
     * 'scroll' 滚动
     * 'grow' 伸展
     */
    type?: 'scroll' | 'grow' | 'both';
    /**
     * 动画间隔
     */
    interval?: number;
    /**
     * 动画时长
     */
    duration?: number;
    /**
     * 动画缓动效果
     */
    easing?: EasingType;
  };
}
