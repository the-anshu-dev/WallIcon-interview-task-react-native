import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Color } from '../utils/globalstyles';
type Props = React.ComponentProps<typeof TextInput> & {
  label: any | null;
  errorText?: string | null;
  onInputChange?: any | null;
  placeholder?:any|null,
  hideText?:any|null
};


const {width, height} = Dimensions.get('screen');
const TextField: React.FC<Props> = props => {
  const {
    label,
    value,
    placeholder,
    errorText,
    style,
    onInputChange,
    maxLength,
    hideText,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // console.log('inputValue', inputValue);


  const handleInputChange = (text: string) => {
    setInputValue(text);

    // If a callback function is provided, invoke it with the updated value
    if (onInputChange) {
      onInputChange(text);
    }
  };

 
 

  let color = isFocused ? Color.black : Color.textGray;
  if (errorText) {
    color = '#B00020';
  }

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
      secureTextEntry={hideText}
      placeholder={placeholder}
      placeholderTextColor={Color.midGray}
        onChangeText={handleInputChange}
        value={value}
        style={[
          styles.input,
          {
            borderColor: color,
          },
        ]}
        {...restOfProps}
        
        maxLength={maxLength}
      />

  
      {errorText  && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    color: 'black',
    padding: width * 0.02,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#EDE7F8',
    // fontFamily: 'Avenir-Medium',
    fontSize: 20,
  },
  labelContainer: {
    position: 'absolute',
    // left: 16,
    paddingHorizontal: 8,
    // backgroundColor: 'green',
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
    fontFamily: 'Avenir-Medium',
  },
  label: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
  },
});
export default TextField;
