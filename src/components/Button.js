import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function Button({backgroundColor, disabled, isLoading, onPress, text}) {
  const defaultBackgroundColor = 'deepskyblue';

  const containerStyle = [styles.container].concat([
    {
      backgroundColor: backgroundColor || defaultBackgroundColor,
      opacity: disabled || isLoading ? 0.4 : 1,
    },
  ]);

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      onPress={onPress}
      style={containerStyle}>
      {isLoading ? (
        <ActivityIndicator
          color="white"
          size="small"
          style={styles.activityIndicator}
        />
      ) : null}

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  activityIndicator: {
    marginRight: 10,
  },
  text: {
    color: 'white',
  },
});

export default Button;
