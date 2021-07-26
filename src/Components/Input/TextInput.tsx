import { makeStyles, TextField } from '@material-ui/core';
import Input from './Input';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

const TextInput = ({ propertyName, propertyContent, onChange}
  : {propertyName: string, propertyContent: string | string[] | number, onChange: any}) => {
  const classes = useStyle();

  const body = (
    <TextField
      name={propertyName}
      onChange={(e) => { onChange(e); } }
      value={propertyContent}
      type="text"
      className={classes.propertyContentContainer}
      variant={'standard'}
      label={propertyName}
    />)

    return (
      <Input
        body={body}
    />)
};

export default TextInput;
