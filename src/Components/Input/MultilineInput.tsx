import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Input from './Input';

const useStyle = makeStyles({
  propertyContentContainer: {
    width: '100%',
  },
});

const MultilineInput = ({ propertyName, propertyContent, onChange}
  : {propertyName: string, propertyContent: string | string[] | number, onChange: any}) => {
  const classes = useStyle();

  const body = (
    <TextField
      label={propertyName}
      multiline
      rows={4}
      variant="standard"
      name={propertyName}
      onChange={onChange}
      value={propertyContent}
      className={classes.propertyContentContainer}
    />);

  return (
    <Input
      body={body}
    />)
};

export default MultilineInput;
