import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const categories = [
  "All",
  "Recommended",
  "TXT",
  "ILLIT",
  "ENHYPEN",
  "BTS",
];

const artists = [
  { id: "1", name: "SOOBIN", group: "TXT", image: "https://picsum.photos/200?1" },
  { id: "2", name: "YEONJUN", group: "TXT", image: "https://picsum.photos/200?2" },
  { id: "3", name: "BEOMGYU", group: "TXT", image: "https://picsum.photos/200?3" },
  { id: "4", name: "TAEHYUN", group: "TXT", image: "https://picsum.photos/200?4" },
  { id: "5", name: "HUENINGKAI", group: "TXT", image: "https://picsum.photos/200?5" },

  { id: "6", name: "YUNAH", group: "ILLIT", image: "https://picsum.photos/200?6" },
  { id: "7", name: "MINJU", group: "ILLIT", image: "https://picsum.photos/200?7" },
  { id: "8", name: "MOKA", group: "ILLIT", image: "https://picsum.photos/200?8" },
  { id: "9", name: "WONHEE", group: "ILLIT", image: "https://picsum.photos/200?9" },
  { id: "10", name: "IROHA", group: "ILLIT", image: "https://picsum.photos/200?10" },

  { id: "11", name: "JUNGWON", group: "ENHYPEN", image: "https://picsum.photos/200?11" },
  { id: "12", name: "HEESEUNG", group: "ENHYPEN", image: "https://picsum.photos/200?12" },
  { id: "13", name: "JAY", group: "ENHYPEN", image: "https://picsum.photos/200?13" },

  { id: "14", name: "RM", group: "BTS", image: "https://picsum.photos/200?14" },
  { id: "15", name: "JIN", group: "BTS", image: "https://picsum.photos/200?15" },
  { id: "16", name: "SUGA", group: "BTS", image: "https://picsum.photos/200?16" },
  { id: "17", name: "J-HOPE", group: "BTS", image: "https://picsum.photos/200?17" },
  { id: "18", name: "JIMIN", group: "BTS", image: "https://picsum.photos/200?18" },
  { id: "19", name: "V", group: "BTS", image: "https://picsum.photos/200?19" },
  { id: "20", name: "JUNGKOOK", group: "BTS", image: "https://picsum.photos/200?20" },
];

export default function NewDM() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#000000" : "#f5f5f5",
    card: isDark ? "#222222" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    subtext: isDark ? "#888888" : "#777777",
    border: isDark ? "#444444" : "#dddddd",
    selected: isDark ? "#ffffff" : "#000000",
    selectedText: isDark ? "#000000" : "#ffffff",
  };
  const [selected, setSelected] = useState("All");
  const router = useRouter();

  const filtered =
    selected === "All" || selected === "Recommended"
      ? artists
      : artists.filter((artist) => artist.group === selected);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background },]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color={colors.text} />
        </TouchableOpacity>

        <Text style={[ styles.title, { color: colors.text }, ]}> Weverse DM</Text>

        <View style={{ width: 28 }} />
      </View>

      <View style={[ styles.search, { backgroundColor: colors.card },]}>
        <Ionicons
          name="search"
          size={18}
          color={colors.subtext}
        />

      <TextInput
          placeholder="Enter artist name"
          placeholderTextColor={colors.subtext}
          style={[
            styles.input,
            { color: colors.text },
          ]}
        />
      </View>

      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelected(item)}
              style={[
                styles.category,
                {
                  borderColor: colors.border,
                  backgroundColor:
                    selected === item
                      ? colors.selected
                      : "transparent",
                },
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  {
                    color:
                      selected === item
                        ? colors.selectedText
                        : colors.text,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.artistRow}>
            <Image source={{ uri: item.image }} style={styles.avatar} />

            <View>
              <Text
                style={[
                  styles.name,
                  { color: colors.text },
                ]}
              >
                {item.name}
              </Text>

              <Text
                style={[
                  styles.group,
                  { color: colors.subtext },
                ]}
              >
                {item.group}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: 14,
    height: 42,
    marginBottom: 16,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  categoriesWrapper: {
    height: 42,
    marginBottom: 12,
  },

  categoriesContainer: {
    alignItems: "center",
    paddingRight: 20,
  },

  category: {
    height: 34,
    borderWidth: 1,
    borderRadius: 17,
    paddingHorizontal: 14,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
  },

  artistRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  group: {
    fontSize: 12,
    marginTop: 2,
  },
});