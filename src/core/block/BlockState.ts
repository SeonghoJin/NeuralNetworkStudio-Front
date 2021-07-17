// eslint-disable-next-line max-classes-per-file
export enum BlockCatergory {
  // eslint-disable-next-line no-unused-vars
  Layer= 'Layer',
}

export enum BlockType{
  // eslint-disable-next-line no-unused-vars
  Dense= 'Dense',
  // eslint-disable-next-line no-unused-vars
  Conv2D= 'Conv2D',
  // eslint-disable-next-line no-unused-vars
  AveragePooling2D= 'average_pooling_2D',
  // eslint-disable-next-line no-unused-vars
  MaxPool2D= 'max_pool_2D',
  // eslint-disable-next-line no-unused-vars
  Activation= 'activation',
  // eslint-disable-next-line no-unused-vars
  Input= 'input',
  // eslint-disable-next-line no-unused-vars
  Dropout= 'dropout',
  // eslint-disable-next-line no-unused-vars
  BatchNormalization= 'batch_normalization',
  // eslint-disable-next-line no-unused-vars
  Flatten= 'flatten'
}

export interface BlockState{
  catergory : BlockCatergory;

  name: string | null;

  type: BlockType;

  config: BlockConfig;
}

interface BlockConfig {}
export class DenseConfig implements BlockConfig {
  units: number = 0;
}
export class DenseBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new DenseConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dense;
}
export class Conv2DConfig implements BlockConfig {
  filters : number = 0;

  // eslint-disable-next-line camelcase
  kernel_size : string = '';

  strides : string = '';

  padding : string = '';
}
export class Conv2DBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new Conv2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.Conv2D;
}
export class AveragePooling2DConfig implements BlockConfig {
  // eslint-disable-next-line camelcase
  pool_size : string = '';

  strides : string = '';

  padding : string = '';
}
export class AveragePooling2DBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new AveragePooling2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.AveragePooling2D;
}

export class MaxPool2DConfig implements BlockConfig {
  // eslint-disable-next-line camelcase
  pool_size: string = '';

  strides: string = '';

  padding: string = '';
}

export class MaxPool2DBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new MaxPool2DConfig();

  name: string | null = null;

  type: BlockType = BlockType.MaxPool2D;
}

export class ActivationConfig implements BlockConfig {
  activation: string = '';
}

export class ActivationBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new ActivationConfig();

  name: string | null = null;

  type: BlockType = BlockType.Activation;
}

export class InputConfig implements BlockConfig {
  shape: string = '';
}

export class InputBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new InputConfig();

  name: string | null = null;

  type: BlockType = BlockType.Input;
}

export class DropoutConfig implements BlockConfig {
  rate: number= 0;
}

export class DropoutBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new DropoutConfig();

  name: string | null = null;

  type: BlockType = BlockType.Dropout;
}

export class BatchNormalizationConfig implements BlockConfig {
  axis: number =0 ;

  momentum: number = 0;

  epsilon: number = 0;
}

export class BatchNormalizationBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new BatchNormalizationConfig();

  name: string | null = null;

  type: BlockType = BlockType.BatchNormalization;
}

export class FlattenConfig implements BlockConfig {
}

export class FlattenBlockState implements BlockState {
  catergory: BlockCatergory = BlockCatergory.Layer;

  config: BlockConfig = new FlattenConfig();

  name: string | null = null;

  type: BlockType = BlockType.Flatten;
}

export const blockStates : {type: BlockCatergory, states : BlockState[]}[] = [
  {
    type: BlockCatergory.Layer,
    states: [
      new Conv2DBlockState(),
      new DenseBlockState(),
      new AveragePooling2DBlockState(),
      new MaxPool2DBlockState(),
      new ActivationBlockState(),
      new InputBlockState(),
      new DropoutBlockState(),
      new BatchNormalizationBlockState(),
      new FlattenBlockState(),
    ],
  },
];
