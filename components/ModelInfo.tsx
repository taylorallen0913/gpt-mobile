import { View, Text } from 'react-native';

interface ModelInfoProps {
  description: string;
}

export const ModelInfo: React.FC<ModelInfoProps> = ({ description }) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 60,
        backgroundColor: '#40414f',
      }}
    >
      <Text style={{ textAlign: 'center', color: '#c5c5d2' }}>
        Model: {description}
      </Text>
    </View>
  );
};
