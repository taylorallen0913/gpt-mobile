import { View, Text } from 'react-native';

interface ModelInfoProps {
  description: string;
}

export const ModelInfo: React.FC<ModelInfoProps> = ({ description }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        height: 65,
        marginTop: 5,
        backgroundColor: '#40414f',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#c5c5d2',
          fontSize: 16,
          fontWeight: '500',
        }}
      >
        Model: {description}
      </Text>
    </View>
  );
};
