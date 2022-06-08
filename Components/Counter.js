import { Text, StyleSheet, View } from 'react-native';
import { useGlobalState } from '../state';

const Counter = () => {
    const [favoriteCount] = useGlobalState('favoriteCount');
    if (favoriteCount === 0) {
        return (null)
    }
    else {
        return (
            <View
                style={styles.notification}
                activeOpacity={0.5}
            >
                <Text
                    style={{ width: 18, height: 18, textAlign: 'center', color: 'white' }}
                >{favoriteCount}</Text>
            </View>
        )
    }
}

export default Counter;

const styles = StyleSheet.create({
    notification: {
        borderRadius: 8,
        position: 'absolute',
        backgroundColor: '#FA5C4D',
        right: '1%',
        bottom: 0,
        zIndex: 1,
    }
});