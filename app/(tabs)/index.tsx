import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#0f0f10" : "#f5f5f5",
    card: isDark ? "#1c1c1e" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    subtext: isDark ? "#b3b3b3" : "gray",
    border: isDark ? "#2a2a2a" : "#eee",
    background2: isDark ? "#006166" : "#BBF3F6",
    accent: "#4fded0",
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text
            style={[
              styles.logo,
              { color: colors.text },
            ]}
          >
            weverse
          </Text>

          <View style={styles.headerIcons}>
            <MaterialCommunityIcons
              name="star-four-points"
              size={24}
              color={colors.accent}
            />

            <View style={styles.notificationWrapper}>
              <Ionicons
                name="notifications-outline"
                size={28}
                color={colors.text}
              />

              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  99+
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity>
            <Text
              style={[
                styles.activeTab,
                { color: colors.text },
              ]}
            >
              My Feed
            </Text>

            <View
              style={[
                styles.activeLine,
                {
                  backgroundColor: colors.text,
                },
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={[
                styles.tab,
                { color: colors.subtext },
              ]}
            >
              Discover
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={[
                styles.tab,
                { color: colors.subtext },
              ]}
            >
              Party
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.title,
            { color: colors.text },
          ]}
        >
          A new DM message!
        </Text>

        <View
          style={[
            styles.card,
            { backgroundColor: colors.card },
          ]}
        >
          <View style={styles.profileRow}>
            <Image
              source={{
                uri: "https://picsum.photos/100",
              }}
              style={styles.avatar}
            />

            <View>
              <Text
                style={[
                  styles.artist,
                  { color: colors.text },
                ]}
              >
                TAEHYUN
              </Text>

              <Text
                style={[
                  styles.subtitle,
                  { color: colors.subtext },
                ]}
              >
                TOMORROW X TOGETHER · 8 hrs ago
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.readButton,
              {
                backgroundColor:
                  colors.background2,
                borderColor: colors.accent,
              },
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={15}
              color={colors.text}
            />

            <Text
              style={[
                styles.readText,
                { color: colors.text },
              ]}
            >
              Read Now!
            </Text>
          </TouchableOpacity>

          <View
            style={[
              styles.divider,
              {
                backgroundColor: colors.border,
              },
            ]}
          />

          <TouchableOpacity
            style={styles.exploreBtn}
          >
            <Text
              style={[
                styles.artist,
                { color: colors.text },
              ]}
            >
              Explore Other DMs
            </Text>

            <Feather
              name="refresh-cw"
              size={14}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.title,
            { color: colors.text },
          ]}
        >
          Latest Notices
        </Text>

        <View
          style={[
            styles.noticeRow,
            {
              backgroundColor: colors.card,
            },
          ]}
        >
          <View style={styles.noticeIcon}>
            <Image
              source={{
                uri: "https://pub-dc9a9c6ac2a64ba48bce426ced0ac56a.r2.dev/groups/ILLIT/logo.jpg?v=1778328992377",
              }}
              style={styles.iLLITavatar}
            />
          </View>

          <View
            style={{
              flex: 1,
              marginLeft: 12,
            }}
          >
            <Text
              style={[
                styles.artist,
                { color: colors.text },
              ]}
            >
              ILLIT
            </Text>

            <Text
              numberOfLines={1}
              style={[
                styles.noticeText,
                { color: colors.subtext },
              ]}
            >
              [EVENT] "ICONIC BY MISTAKE"
            </Text>

            <Text
              numberOfLines={1}
              style={[
                styles.noticeText,
                { color: colors.subtext },
              ]}
            >
              Release Celebration Event Winner A...
            </Text>
          </View>

          <Text
            style={[
              styles.time,
              { color: colors.subtext },
            ]}
          >
            19 hrs ago
          </Text>
        </View>

        <LinearGradient
          colors={[
            "#0DD3E1",
            "#5299f9",
            "#a56eff",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.noticeGradient}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.noticeButton,
              {
                backgroundColor: colors.card,
              },
            ]}
          >
            <MaterialCommunityIcons
              name="star-four-points"
              size={20}
              color="#4fded0"
            />

            <Text
              style={[
                styles.noticeButtonText,
                { color: colors.text },
              ]}
            >
              View the most recent notices
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text
          style={[
            styles.title,
            { color: colors.text },
          ]}
        >
          Artist Updates
        </Text>

        <View
          style={[
            styles.artistCard,
            { backgroundColor: colors.card },
          ]}
        >
          <View style={styles.artistHeader}>
            <Image
              source={{
                uri: "https://picsum.photos/100",
              }}
              style={styles.artistAvatar}
            />

            <View
              style={{
                flex: 1,
                marginLeft: 12,
              }}
            >
              <View
                style={styles.artistNameRow}
              >
                <Text
                  style={[
                    styles.artistName,
                    { color: colors.text },
                  ]}
                >
                  DINO⚡
                </Text>

                <Ionicons
                  name="checkmark-circle"
                  size={18}
                  color="#00d7ff"
                />
              </View>

              <Text
                style={[
                  styles.artistDate,
                  { color: colors.subtext },
                ]}
              >
                Jun 26, 21:40
              </Text>
            </View>
          </View>

          <Text
            style={[
              styles.postText,
              { color: colors.text },
            ]}
          >
            The CARATs! Let's have fun in
            GyeongjuAhhhhhhhhhhhhhhhhh 😆 It's a
            different kind of nervousnessㅇㅅㅇ
            hwaiting!!!!! 🥰🫶
          </Text>

          <TouchableOpacity>
            <Text
              style={[
                styles.originalText,
                { color: colors.subtext },
              ]}
            >
              See original (한국어)
            </Text>
          </TouchableOpacity>

          <View style={styles.postActions}>
            <View style={styles.actionGroup}>
              <Ionicons
                name="heart-outline"
                size={15}
                color={colors.text}
              />

              <Text
                style={[
                  styles.actionText,
                  { color: colors.text },
                ]}
              >
                7.6K
              </Text>
            </View>

            <View style={styles.actionGroup}>
              <Ionicons
                name="chatbubble-outline"
                size={15}
                color={colors.text}
              />

              <Text
                style={[
                  styles.actionText,
                  { color: colors.text },
                ]}
              >
                1K
              </Text>
            </View>

            <View style={{ flex: 1 }} />

            <Ionicons
              name="bookmark-outline"
              size={15}
              color={colors.text}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 40,
    fontWeight: "900",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  notificationWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 36,
    minHeight: 36,
    padding: 4,
  },

  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "#ff6b6b",
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  tabs: {
    flexDirection: "row",
    marginTop: 15,
    gap: 12,
  },

  activeTab: {
    fontSize: 18,
    fontWeight: "700",
  },

  tab: {
    fontSize: 18,
    color: "gray",
  },

  activeLine: {
    marginTop: 8,
    height: 3,
    backgroundColor: "black",
    borderRadius: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 35,
    marginRight: 15,
  },

  artist: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "gray",
    marginTop: 2,
    fontSize: 15,
  },

  readButton: {
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderStyle: "dashed",
    borderColor: "#4fded0",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 12,
    marginTop: 8,
    marginLeft: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    width: 238,
  },

  readText: {
    fontSize: 15,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },

  exploreBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  noticeCard: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
  },

  noticeRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "auto",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 15,
  },

  iLLITavatar: {
    width: 45,
    height: 45,
    borderRadius: 15,
  },

  noticeIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  noticeText: {
    color: "gray",
    fontSize: 14,
  },

  time: {
    color: "gray",
    fontSize: 13,
  },

  iLLITnotif: {
    flexDirection: "row",
  },

  noticeGradient: {
    borderRadius: 40,
    padding: 1.5,
    marginTop: 25,
  },

  noticeButton: {
    borderRadius: 38,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  noticeButtonText: {
    fontSize: 16,
  },

  updateCard: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
  },

  artistCard: {
    borderRadius: 30,
    padding: 20,
    marginTop: 15,
    marginBottom: 100,
  },

  artistHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  artistAvatar: {
    width: 30,
    height: 30,
    borderRadius: 28,
  },

  artistNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  artistName: {
    fontSize: 18,
    fontWeight: "700",
  },

  artistDate: {
    fontSize: 15,
    marginTop: 2,
  },

  postText: {
    fontSize: 16,
    lineHeight: 25,
    marginTop: 8,
  },

  originalText: {
    fontSize: 15,
    textDecorationLine: "underline",
    marginTop: 15,
  },

  postActions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  actionGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    gap: 8,
  },

  actionText: {
    fontSize: 12,
  },
});