import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getCourse } from "../../Services";
import SubHeading from "../SubHeading";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import CourseItem from "./CourseItem";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CourseList({ level }) {
  const [courseList, setCourseList] = React.useState([]);
  const navigation=useNavigation();
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourse(level)
      .then((resp) => {
        console.log("RESP--", resp);
        setCourseList(resp?.courses);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };
  return (
    <View>
      <SubHeading text={level+" Courses"} color={level=='Basic'?Colors.white:Colors.primary} />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={()=>navigation.navigate('CourseDetails',
          {course:item})}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1, // Apply opacity effect when pressed
            },
          ]}>
          <CourseItem item={item} />
          </Pressable>
        )}
      />
    </View>
  );
}
