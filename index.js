import { StyleSheet, Text , View }from "react-native";

export default function Page() {
    return (
        <View style={styles.container}>
        <View style={styles.main}>
        <Text style={styles.title}>腳肘其實就是膝蓋</Text>
        <Text style={styles.subtitle}>姓名:林珏佑  學號:111307030</Text>
        </View>
      </View>
    );
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color:" #D6E1D7 ",
    },
 });
