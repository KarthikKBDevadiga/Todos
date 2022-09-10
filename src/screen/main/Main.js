import {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {TODOS_ACTIONS} from '../../../redux/todos';
import TodoItem from '../../item/TodoItem';
import MainStyles from './styles/MainStyles';

export default Main = () => {
  const [text, setText] = useState();
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={MainStyles.Container}>
      <FlatList
        data={todos}
        renderItem={({item, index}) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              deleteItem={() => {
                dispatch({
                  type: TODOS_ACTIONS.DELETE_TODOS,
                  payload: {
                    id: item.id,
                  },
                });
              }}
              divider={index != todos.length - 1}
            />
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          this.RBSheet.open();
        }}
        style={MainStyles.AddFab}>
        <Image
          source={require('../../../icons/add.png')}
          style={MainStyles.FabIcon}
        />
      </TouchableOpacity>
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={200}
        openDuration={250}
        customStyles={{
          container: {
            padding: 16,
          },
        }}>
        <View style={{width: '100%'}}>
          <Text style={MainStyles.Heading}>Add Todos</Text>
          <TextInput
            onChangeText={text => setText(text)}
            editable
            style={MainStyles.INPUT}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: TODOS_ACTIONS.ADD_TODOS,
                payload: {
                  name: text,
                },
              });
              this.RBSheet.close();
            }}
            style={MainStyles.Button}>
            <Text style={MainStyles.ButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
