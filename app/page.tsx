"use client";

import { Container, Text, Button, Stack, Box, Group } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Home() {
  return (
    <Box
      style={{
        background: "linear-gradient(135deg, #0a0f1f 0%, #003a78 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Hero Section */}
      <Container
        size="lg"
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <Stack align="center" gap={30} style={{ width: "100%" }}>
          {/* Название команды */}
          <Text
            fw={700}
            style={{
              fontSize: 82,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: 5,
            }}
            ta="center"
          >
            Team North
          </Text>

          {/* Иллюстрация */}
          <img
            src="/img/roster.png"
            alt="Roster"
            style={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 12,
            }}
          />

          {/* Описание */}
          <Text size="xl" c="#ffffff" ta="center" maw={700} fw={400}>
            Наш девиз – «Билет в компет». Уже 7 лет мы принимаем игроков любого
            уровня, воспитывая таланты со всего мира, главное, чтобы они умели
            говорить по-русски и соблюдали наш устав. Мы ценим тех, кто
            стремится к командной игре, учится на ошибках и адаптируется
            несмотря на трудности.
          </Text>

          {/* Кнопка CTA */}
          <Button
            component="a"
            href="https://discord.gg/cREDhsymBE"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            radius="md"
            color="#00a1fe"
            style={{
              textTransform: "uppercase",
              paddingLeft: 32,
              paddingRight: 32,
            }}
          >
            получить билет в компет
          </Button>
        </Stack>
      </Container>

      {/* Footer */}
      <Box component="footer" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <Container size="lg">
          <Stack align="center" gap="sm">
            <Text c="#ffffff" size="sm">
              © 2025 Team North. Все права защищены.
            </Text>

            <Group gap="xl">
              <a
                href="https://discord.gg/cREDhsymBE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={["fab", "discord"]}
                  size="lg"
                  color="#ffffff"
                />
              </a>

              <a
                href="https://steamcommunity.com/sharedfiles/filedetails/?id=3359758575"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={["fab", "steam"]}
                  size="lg"
                  color="#ffffff"
                />
              </a>

              <a
                href="https://youtube.com/watch?v=PU8o9R-Vrfc"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
                  size="lg"
                  color="#ffffff"
                />
              </a>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
