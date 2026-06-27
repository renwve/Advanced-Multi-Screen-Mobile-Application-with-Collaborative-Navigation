import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function MoreScreen() {
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const colors = {
    background: isDark ? "#0f0f10" : "#f5f5f5",
    card: isDark ? "#1c1c1e" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    subtext: isDark ? "#b3b3b3" : "#8b8b8b",
    border: isDark ? "#2d2d2d" : "#ededed",
    accent: "#25d4d4",
    blue: "#0A84FF",
    buttonText: "#ffffff",
    shadow: "#000000",
    arrow: isDark ? "#6f6f6f" : "#bbbbbb",
  };

  const shortcuts = [
    {
      title: "Order History",
      icon: "shopping-bag",
      color: "#35D4D0",
    },
    {
      title: "Event Entries",
      icon: "calendar-star",
      color: "#74D89A",
    },
    {
      title: "Purchased\nMedia",
      icon: "receipt",
      color: "#45B8FF",
    },
  ];

  const menuItems = [
    {
      title: "Coupon Box",
      icon: "ticket-percent",
      color: "#39C78B",
    },
    {
      title: "My Collection",
      icon: "folder-heart",
      color: "#FDB92B",
    },
    {
      title: "Recently Watched",
      icon: "play-circle",
      color: "#D36BFF",
    },
    {
      title: "Downloaded Videos",
      icon: "download-box",
      color: "#6A63D9",
    },
    {
      title: "Saved QR Codes",
      icon: "qrcode",
      color: "#63A7FF",
    },
  ];

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.header}>
          <View style={{ width: 70 }} />

          <Text
            style={[
              styles.headerTitle,
              { color: colors.text },
            ]}
          >
            More
          </Text>

          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="line-scan"
                size={30}
                color={colors.text}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsWrapper}>
              <Ionicons
                name="settings-outline"
                size={34}
                color={colors.text}
              />

              <View style={styles.redDot} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: colors.card },
          ]}
        >
          <View style={styles.accountRow}>
            <View>
              <Text
                style={[
                  styles.username,
                  { color: colors.text },
                ]}
              >
                안나리
              </Text>

              <TouchableOpacity
                style={styles.membershipRow}
              >
                <MaterialCommunityIcons
                  name="heart-half-full"
                  size={34}
                  color="#43D59F"
                />

                <Text
                  style={[
                    styles.membershipText,
                    { color: colors.text },
                  ]}
                >
                  My Membership
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.accountText,
                    { color: colors.subtext },
                  ]}
                >
                  My account
                </Text>
              </TouchableOpacity>

              <Ionicons
                name="chevron-forward"
                size={30}
                color={colors.arrow}
                style={{ marginTop: 36 }}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.card,
              marginTop: 18,
            },
          ]}
        >
          <View style={styles.jellyRow}>
            <View style={styles.jellyLeft}>
              <MaterialCommunityIcons
                name="star-circle"
                size={34}
                color="#FDBB22"
              />

              <Text
                style={[
                  styles.jellyAmount,
                  { color: colors.text },
                ]}
              >
                0
              </Text>

              <Ionicons
                name="chevron-forward"
                size={26}
                color={colors.arrow}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.purchaseButton,
                {
                  backgroundColor: colors.accent,
                },
              ]}
            >
              <Text style={styles.purchaseText}>
                Purchase
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.card,
              marginTop: 18,
            },
          ]}
        >
          <View style={styles.shortcutRow}>
            {shortcuts.map((item) => (
              <TouchableOpacity
                key={item.title}
                style={styles.shortcutItem}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={34}
                  color={item.color}
                />

                <Text
                  style={[
                    styles.shortcutText,
                    { color: colors.text },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.card,
              marginTop: 18,
            },
          ]}
        >
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.menuRow,
                index !== menuItems.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: colors.border,
                },
              ]}
            >
              <View style={styles.menuLeft}>
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={30}
                  color={item.color}
                />

                <Text
                  style={[
                    styles.menuText,
                    { color: colors.text },
                  ]}
                >
                  {item.title}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={28}
                color={colors.arrow}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 6,
    marginTop: 35,
    marginBottom: 8,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  settingsWrapper: {
    position: "relative",
  },

  redDot: {
    position: "absolute",
    top: 3,
    right: 3,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },

  card: {
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  username: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  membershipRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  membershipText: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },

  accountText: {
    fontSize: 14,
    textDecorationLine: "underline",
  },

  jellyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  jellyLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  jellyAmount: {
    fontSize: 22,
    fontWeight: "800",
    marginHorizontal: 8,
  },

  purchaseButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  purchaseText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  shortcutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  shortcutItem: {
    flex: 1,
    alignItems: "center",
  },

  shortcutText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },

  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "500",
  },
});