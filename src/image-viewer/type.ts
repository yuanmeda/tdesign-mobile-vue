/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdImageViewerProps {
  /**
   * 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮
   * @default true
   */
  closeBtn?: boolean | TNode;
  /**
   * 是否展示删除按钮
   * @default true
   */
  deleteBtn?: boolean | TNode;
  /**
   * 图片数组
   * @default []
   */
  images?: Array<string>;
  /**
   * 当前预览图片所在的下标
   */
  index?: number;
  /**
   * 当前预览图片所在的下标，非受控属性
   */
  defaultIndex?: number;
  /**
   * 是否显示页码
   * @default false
   */
  showIndex?: boolean;
  /**
   * 触发图片预览的元素，可能是一个预览按钮，可能是一张缩略图，完全自定义
   */
  trigger?: string | TNode;
  /**
   * 隐藏/显示预览
   * @default false
   */
  visible?: boolean;
  /**
   * 隐藏/显示预览，非受控属性
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * 隐藏/显示预览
   * @default false
   */
  modelValue?: boolean;
  /**
   * 关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键
   */
  onClose?: (context: { trigger: 'close-btn' | 'overlay' | 'esc'; e: MouseEvent | KeyboardEvent }) => void;
  /**
   * 预览图片切换时触发，`context.prev` 切换到上一张图片，`context.next` 切换到下一张图片
   */
  onIndexChange?: (index: number, context: { trigger: 'prev' | 'next' }) => void;
}
