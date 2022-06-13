/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdImageViewerProps } from './type';
import { PropType } from 'vue';

export default {
  /** 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮 */
  closeBtn: {
    type: [Boolean, Function] as PropType<TdImageViewerProps['closeBtn']>,
    default: true,
  },
  /** 是否展示删除按钮 */
  deleteBtn: {
    type: [Boolean, Function] as PropType<TdImageViewerProps['deleteBtn']>,
    default: true,
  },
  /** 图片数组 */
  images: {
    type: Array as PropType<TdImageViewerProps['images']>,
    default: (): TdImageViewerProps['images'] => [],
  },
  /** 当前预览图片所在的下标 */
  index: {
    type: Number,
  },
  /** 当前预览图片所在的下标，非受控属性 */
  defaultIndex: {
    type: Number,
  },
  /** 是否显示页码 */
  showIndex: Boolean,
  /** 触发图片预览的元素，可能是一个预览按钮，可能是一张缩略图，完全自定义 */
  trigger: {
    type: [String, Function] as PropType<TdImageViewerProps['trigger']>,
  },
  /** 隐藏/显示预览 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  /** 隐藏/显示预览，非受控属性 */
  defaultVisible: Boolean,
  /** 关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键 */
  onClose: Function as PropType<TdImageViewerProps['onClose']>,
  /** 预览图片切换时触发，`context.prev` 切换到上一张图片，`context.next` 切换到下一张图片 */
  onIndexChange: Function as PropType<TdImageViewerProps['onIndexChange']>,
};
