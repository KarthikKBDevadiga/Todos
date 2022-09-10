import TodoItemStyles from './style/TodoItemStyles';

const {View, Text, TouchableOpacity, Image} = require('react-native');

export default TodoItem = ({todo, divider = false, deleteItem}) => {
  return (
    <View>
      <View style={TodoItemStyles.Item}>
        <Text style={TodoItemStyles.ItemName}>{todo.name}</Text>
        <TouchableOpacity onPress={deleteItem}>
          <Image
            source={require('../../icons/delete.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
      {divider && <View style={TodoItemStyles.Divider} />}
    </View>
  );
};
