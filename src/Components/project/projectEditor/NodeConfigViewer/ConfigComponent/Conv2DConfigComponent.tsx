import { ChangeEvent } from 'react';
import TextInput from '../../../../Input/TextInput';
import React from 'react';
import {
  AveragePooling2DConfig,
  BatchNormalizationConfig, Conv2DConfig,
  IConfigComponent,
  InputConfig
} from '../../../../../core/block';
import SliderInput, { Marks } from '../../../../Input/SliderInput';
import SecondDivisionTupleInput from '../../../../Input/SecondDivisionTupleInput';

type Props = {
  config: Conv2DConfig,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const marks : Marks = [
  {
    value: 32,
    label: 32,
  },
  {
    value: 64,
    label: 64,
  },
  {
    value: 128,
    label: 128,
  },
  {
    value: 256,
    label: 256,
  },
]

const Conv2DConfigComponent = ({config, onChange}: Props) => {

  const {padding, strides, kernel_size, filters} = config

  const configComponent: IConfigComponent<typeof config> = {
    filters: <SliderInput
      onChange={onChange}
      propertyContent={filters}
      propertyName={'filters'}
      marks={marks}
      max={256}
      min={32}
      step={null}
    />,
    kernel_size: <SecondDivisionTupleInput
      onChange={onChange}
      propertyContent={kernel_size}
      propertyName={'kernel_size'}
    />,
    padding:<SecondDivisionTupleInput
      onChange={onChange}
      propertyContent={padding}
      propertyName={'padding'}
    />,
    strides:<SecondDivisionTupleInput
      onChange={onChange}
      propertyContent={strides}
      propertyName={'strides'}
    />
  }

  const elements = [];

  for (const configComponentKey in configComponent) {
    const key = configComponentKey as keyof typeof configComponent
    elements.push(
      <li key={key}>
        {configComponent[key]}
      </li>
    );
  };

  return (<>
    {elements}
  </>)
}

export default Conv2DConfigComponent;
