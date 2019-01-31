import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export const textField = (props: any) => {
  const { label, placeholder, input, ...custom } = props;

  if (input.value === '' && custom.defaultValue) {
    input.onChange(custom.defaultValue);
  }

  return <TextField label={label} placeholder={placeholder} {...input} />;
};

export const textArea = (props: any) => {
  const { label, rows, multiline = true, input, rowsMax, ...custom } = props;

  if (input.value === '' && custom.defaultValue) {
    input.onChange(custom.defaultValue);
  }

  return (
    <TextField
      label={label}
      placeholder={label}
      multiline={multiline}
      rows={rows}
      rowsMax={rowsMax}
      {...input}
    />
  );
};
